import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchEarthquakeData,
  filterByMagnitude,
  filterByMagType
} from "./actions/index";

import "./App.css";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import EarthquakeDataList from "./components/EarthquakeDataList";

const MAGNITUDE = 1;
const MAGTYPE = 2;

class App extends Component {
  componentDidMount() {
    this.props.fetchEarthquakeData();
  }

  filterBy = (type, value) => {
    const storeState = this.props.store.getState();

    if (type === MAGNITUDE) {
      return this.props.filterByMagnitude(value, storeState);
    }

    return this.props.filterByMagType(value, storeState);
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Navbar />
        <Container className="text-center">
          <SearchForm
            filterUsingMagnitude={value => this.filterBy(MAGNITUDE, value)}
            filterUsingMagnitudeType={value => this.filterBy(MAGTYPE, value)}
          />
          <EarthquakeDataList earthquakes={this.props.earthquakes} />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  earthquakes: state.earthquakes.filteredList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchEarthquakeData,
      filterByMagnitude,
      filterByMagType
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
