import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Header.css';
const remote = require('electron').remote;

type Props = {
  link: String
};

export default class Header extends Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      link: ""
    };
    this.closeWindow = this.closeWindow.bind(this);
    this.minimize = this.minimize.bind(this);
    this.goToLink = this.goToLink.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  closeWindow = () => {
    const window = remote.getCurrentWindow();
    window.close();
  }

  minimize = () => {
    const window = remote.getCurrentWindow();
    window.minimize();
  }

  goToLink = (e) => {
    e.preventDefault();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <div className={styles.Header} data-tid="container">
        <form onSubmit={this.goToLink}>
          <input type="text" name="link" value={this.state.link} onChange={this.onChange}/>
        </form>
        <Link to={this.state.link}>To Link</Link>
        <button id="close-btn" onClick={this.closeWindow} ><i className="fas fa-times"></i></button>
        <button id="minimize" onClick={this.minimize} ><i className="far fa-window-minimize"></i></button>
      </div>
    );
  }
}

