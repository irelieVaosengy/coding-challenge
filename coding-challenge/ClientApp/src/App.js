import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return <div className="app">
        <Layout></Layout>
    </div>;
  }
}
