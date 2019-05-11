import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.css';
import routes from '../constants/routes';

type Props = {
  setBrokerage: (brokerage: string) => void,
  setEmail: (email: string) => void,
  setPassword: (pass: string) => void,
  brokerage: string,
  email: string,
  pass: string
};

export default class Main extends Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      brokerage: "",
      email: "",
      pass: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e: SyntheticInputEvent<*>) => {
    e.preventDefault();
    this.props.setBrokerage(this.state.brokerage);
    this.props.setEmail(this.state.email);
    this.props.setPass(this.state.pass);
    console.log(this.props);
  }

  onChange = (e: SyntheticInputEvent<*>) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      brokerage,
      email,
      pass
    } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <h1>Main</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="brokerage" value={this.state.brokerage} onChange={this.onChange} />
          <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
          <input type="text" name="pass" value={this.state.pass} onChange={this.onChange} />
          <button type="submit">Submit</button>
        </form>
        <div>{brokerage}</div>
        <div>{email}</div>
        <div>{pass}</div>
      </div>
    );
  }
}
