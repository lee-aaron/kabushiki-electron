// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Header.css';
const remote = require('electron').remote;

type Props = {};

export default class Header extends Component<Props> {
  props: Props;

  closeWindow() {
    const window = remote.getCurrentWindow();
    window.close();
  }

  minimize() {
    const window = remote.getCurrentWindow();
    window.minimize();
  }

  render() {
    return (
      <div className={styles.header} data-tid="container">
        <button id="close-btn" onClick={this.closeWindow} ><i class="fas fa-times"></i></button>
        <button id="minimize" onClick={this.minimize} ><i class="far fa-window-minimize"></i></button>
      </div>
    );
  }
}

