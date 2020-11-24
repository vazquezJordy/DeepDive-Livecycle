import React, { Component } from 'react';
import Navigation from './navigation'
import PageContent from './page-content';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Skeleton</h2>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}