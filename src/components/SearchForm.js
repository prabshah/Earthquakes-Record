import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnitude: "",
      magtype: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { magnitude, magtype } = this.state;
    return (
      <Container className="mt-5 mb-5 shadow p-3 mb-5 bg-white rounded">
        <Row>
          <Col xs="6">
            <Form inline onSubmit={this.onSubmit}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="text"
                  name="magnitude"
                  onChange={this.onChange}
                  value={magnitude}
                  placeholder="Search by magnitude"
                />
              </FormGroup>
              <Button>Search by magnitude</Button>
            </Form>
          </Col>
          <Col xs="6">
            <Form inline onSubmit={this.onSubmit}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="text"
                  name="magtype"
                  onChange={this.onChange}
                  value={magtype}
                  placeholder="Search by magtype"
                />
              </FormGroup>
              <Button>Search by magtype</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
