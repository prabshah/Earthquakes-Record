import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEarthquakeData } from "./actions/index";

import "./App.css";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import EarthquakeDataList from "./components/EarthquakeDataList";

class App extends Component {
  componentWillMount() {
    this.props.fetchEarthquakeData();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Container className="text-center">
          <SearchForm />
          <EarthquakeDataList />
        </Container>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEarthquakeData }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(App);
