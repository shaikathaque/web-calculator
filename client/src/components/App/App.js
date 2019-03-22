import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions';

// import components
import Navbar from '../Navbar';

import A from '../A';
import B from '../B';
import PreviousCalculations from '../PreviousCalculations';
import NewCalculation from '../NewCalculation';

import './App.css';

class App extends Component {
  componentDidMount() {
    // const { fetchName } = this.props;
    // fetchName('Shaikat');
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <PreviousCalculations />
          <Switch>
            <Route exact path="/" component={NewCalculation} />
            <Route component={NewCalculation} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  fetchCalculations: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(App);
