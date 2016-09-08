import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import ActiveCountry from '../containers/active_country';
import CountryList from '../containers/countryList';
import TwitterFeed from '../containers/twitter_feed';
import Globe from '../containers/globeContainer';
import AnnualDataSlider from '../containers/annual_slider_bar';
import VictoryPlots from '../containers/d3Graphs';
import Intro from './introduction';
import NewsOutlet from '../containers/news_outlet';
import UserTour from './tourTips';
import { requestCountries, getAllData } from '../actions/db_actions';

//TODO: We need to build a spinner that that runners until the data populates.

//TODO: This needs to be moved to conatiner folder.
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCountries();
    this.props.getAllData();
  }

  render() {
    // <Intro />

    return React.createElement(
      'div',
      { className: 'main' },
      React.createElement(CountryList, null),
      React.createElement(
        'div',
        { className: 'globe' },
        React.createElement(Globe, null)
      ),
      React.createElement(AnnualDataSlider, null),
      React.createElement(ActiveCountry, null),
      React.createElement(NewsOutlet, null),
      React.createElement(TwitterFeed, null),
      React.createElement(VictoryPlots, null),
      React.createElement(UserTour, null)
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCountries,
    getAllData
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);