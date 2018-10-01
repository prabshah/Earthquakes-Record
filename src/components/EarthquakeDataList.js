import React, { Component, Fragment } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const capitalizeFirstChar = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default class EarthquakeDataList extends Component {
  renderList = data => {
    if (data.length === 0)
      return <p className="text-warning p-5 border lead">No record found!</p>;

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
        <h4 className="mt-5 pt-3 font-weight-bold lead">
          List of places where earthquakes have happened
        </h4>
        <ListGroup className="mt-2">
          {this.renderList(this.props.earthquakes)}
        </ListGroup>
      </Fragment>
    );
  }
}
