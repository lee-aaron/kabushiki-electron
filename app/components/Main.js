//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.css';
import routes from '../constants/routes';
const axios = require('axios');
var request = require('request');

type Props = {
  getAuth: () => void,
  auth_url: string
};

type State = {
  code: string,
  refresh_token: string,
  data: Array<any>
};

export default class Main extends Component<Props, State> {
  props: Props;
  state: State;
  webView: { current: null | HTMLWebViewElement };

  constructor(props: Props) {
    super(props);
    this.state = {
      code: '',
      refresh_token: '',
      data: []
    };
    props.getAuth();
    this.webView = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleWebView = this.handleWebView.bind(this);
    this.decodeURLRecursively = this.decodeURLRecursively.bind(this);
    this.getTokens = this.getTokens.bind(this);
    this.getStocks = this.getStocks.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.renderAccounts = this.renderAccounts.bind(this);
  }

  componentDidMount() {
    console.log('Refreshed');
    this.handleWebView();
  }

  decodeURLRecursively = (url: string) => {
    if (url.indexOf('%') != -1) {
      return this.decodeURLRecursively(decodeURIComponent(url));
    }
    return url;
  };

  handleWebView = () => {
    // should fix this so our program doesn't need to work on error
    this.webView.current.addEventListener('did-fail-load', event => {
      if (event.validatedURL.includes('https://localhost:5000/api?code=')) {
        let parsed = event.validatedURL.replace(
          'https://localhost:5000/api?code=',
          ''
        );
        this.setState({ code: this.decodeURLRecursively(parsed) });
        this.webView.current.remove();
      }
    });
  };

  getTokens = () => {
    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    var options = {
      //see the Authentication API's Post Access Token method for more information
      url: 'https://api.tdameritrade.com/v1/oauth2/token',
      method: 'POST',
      headers: headers,
      //POST Body params
      form: {
        grant_type:
          this.state.refresh_token == ''
            ? 'authorization_code'
            : 'refresh_token',
        access_type: this.state.refresh_token == '' ? 'offline' : '',
        refresh_token: this.state.refresh_token,
        code: this.state.refresh_token != '' ? '' : this.state.code, //get the code
        client_id: 'KABUSHIKI-C',
        redirect_uri: 'http://localhost:5000/api'
      }
    };

    //Post Access Token request
    request(options, this.handleCallback);
  };

  handleCallback = (error: any, response: any, body: any) => {
    if (!error && response.statusCode == 200) {
      //see Post Access Token response summary for what authReply contains
      let authReply = JSON.parse(body);

      //the line below is for convenience to test that it's working after authenticating
      //console.log(authReply);
      this.setState({
        code: authReply.access_token,
        refresh_token: authReply.refresh_token
      });

      this.getStocks();
    }
  };

  getStocks = () => {
    let headers = {
      Authorization: 'Bearer ' + this.state.code
    };
    let params = {
      fields: 'positions'
    };
    axios
      .get('https://api.tdameritrade.com/v1/accounts', {
        headers: headers,
        params: params
      })
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  onSubmit = (e: SyntheticInputEvent<*>) => {
    e.preventDefault();
  };

  onChange = (e: SyntheticInputEvent<*>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderAccounts = () => {
    if (this.state.data.length === 0) {
      return null;
    }

    console.log(this.state.data);

    return (
      <>
        {this.state.data.map(account => (
          <div className={styles.account} key={account.securitiesAccount.accountId}>
            <div>{account.securitiesAccount.accountId}</div>
            <div>
              Total Value: {account.securitiesAccount.initialBalances.accountValue}
            </div>
            <table className={styles.position}>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Long Quantity</th>
                  <th>Market Value</th>
                  <th>Current Gain ($)</th>
                </tr>
              </thead>
              <tbody>
                {account.securitiesAccount.positions.map(position => (
                  <tr key={position.instrument.symbol}>
                    <td>{position.instrument.symbol}</td>
                    <td>{position.settledLongQuantity}</td>
                    <td>{position.marketValue}</td>
                    <td>{position.currentDayProfitLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </>
    );
  };

  render() {
    const { auth_url } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <h1>Main</h1>
        <webview src={auth_url} ref={this.webView} />
        {this.state.code != '' ? this.getTokens() : null}
        {this.state.data.length === 0 ? null : <div id="parent" className={styles.parent}>{this.renderAccounts()}</div>}
      </div>
    );
  }
}
