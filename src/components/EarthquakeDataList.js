import React, { Component, Fragment } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

const capitalizeFirstChar = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class EarthquakeDataList extends Component {
  renderLists = data => {
    return data.map(dataList => {
      const id = dataList.id ? capitalizeFirstChar(dataList.id) : null;
      const place = dataList.properties.place;
      const mag = dataList.properties.mag;
      const magType = dataList.properties.magType;

      return (
        <ListGroupItem key={dataList.id}>
          &#9733;
          {` ${id} : ${place} : ${mag} : ${magType}`}
        </ListGroupItem>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <h4 className="mt-5 pt-3 lead">
          List of places where earthquakes have happened
        </h4>
        <ListGroup className="mt-2">
          {this.renderLists(this.props.earthquake)}
        </ListGroup>
      </Fragment>
    );
  }
}
function mapStateToProps({ earthquake }) {
  return { earthquake };
}

export default connect(mapStateToProps)(EarthquakeDataList);
