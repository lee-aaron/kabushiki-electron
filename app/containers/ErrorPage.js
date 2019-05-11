// @flow
import React, { Component } from 'react';
import Error from '../components/Error';

type Props = {};

export default class ErrorPage extends Component<Props> {
  props: Props;

  render() {
    return <Error />;
  }
}
