import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Col,
  Card,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

import InputMask from 'react-input-mask';
export default class LivePreviewExample extends Component {
  state = {
    value: '',
    mask: '9999-9999-9999-9999'
  };

  onChange = (event) => {
    var value = event.target.value;
    var newState = {
      mask: '9999-9999-9999-9999',
      value: value
    };
    if (/^3[47]/.test(value)) {
      newState.mask = '9999-999999-99999';
    }
    this.setState(newState);
  };

  render() {
    return (
      <>
        <Card className="shadow-xxl p-4">
          <Col md="8" lg="6" className="mx-auto p-0">
            <div className="heading-3">Phone numbers</div>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </InputGroupText>
              </InputGroupAddon>
              <InputMask
                className="form-control"
                mask="+49 99 999 99"
                maskChar={null}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </InputGroupText>
              </InputGroupAddon>
              <InputMask className="form-control" mask="+7 (999) 999-99-99" />
            </InputGroup>

            <div className="divider my-4" />

            <div className="heading-3">Dates</div>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={['far', 'calendar-alt']} />
                </InputGroupText>
              </InputGroupAddon>
              <InputMask
                className="form-control"
                mask="99-99-9999"
                defaultValue="27-10-2018"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={['far', 'calendar-alt']} />
                </InputGroupText>
              </InputGroupAddon>
              <InputMask
                className="form-control"
                mask="99/99/9999"
                placeholder="Enter birthdate"
              />
            </InputGroup>

            <div className="divider my-4" />

            <div className="heading-3">Credit Card</div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputMask
                className="form-control"
                {...this.state}
                onChange={this.onChange}
              />
            </InputGroup>
          </Col>
        </Card>
      </>
    );
  }
}
