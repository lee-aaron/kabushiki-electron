// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Settings.css';
import routes from '../constants/routes';

type Props = {
  setEmail: () => String,
  setPassword: () => String,
  email: String,
  pass: String
};

export default class Settings extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
      </div>
    );
  }
}
