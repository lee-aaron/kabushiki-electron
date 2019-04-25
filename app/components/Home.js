// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
const remote = require('electron').remote;

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  closeWindow() {
    const window = remote.getCurrentWindow();
    window.close();
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h1>Welcome to Kabushiki Web!</h1>
        <button id="close-btn" onClick={this.closeWindow} >X</button>
      </div>
    );
  }
}

