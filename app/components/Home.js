// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
const remote = require('electron').remote;

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h1>Welcome to Kabushiki Web!</h1>
        <Link to={routes.MAIN}>Click here to get started!</Link>
      </div>
    );
  }
}

