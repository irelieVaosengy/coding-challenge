import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/layout/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import Header from "./components/header/Header";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return <div className="app">
        <Layout></Layout>
    </div>;
  }
}
