import React, { Component } from 'react';

import {
  Row,
  Col,
  UncontrolledPopover,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import {
  BlockPicker,
  CirclePicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color';
export default class LivePreviewExample extends Component {
  state = {
    displayColorPicker: false,
    displayColorPicker2: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleClick2 = () => {
    this.setState({ displayColorPicker2: !this.state.displayColorPicker2 });
  };

  handleClose2 = () => {
    this.setState({ displayColorPicker2: false });
  };
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
      top: '48px',
      opacity: '1',
      visibility: 'visible'
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    };

    return (
      <>
        <Row>
          <Col xl="3" md="6">
            <Button color="primary" onClick={this.handleClick}>
              Custom Picker Wrapper 1
            </Button>
            {this.state.displayColorPicker ? (
              <div className="dropdown-menu p-0 m-0" style={popover}>
                <div style={cover} onClick={this.handleClose} />
                <TwitterPicker />
              </div>
            ) : null}
          </Col>
          <Col xl="3" md="6">
            <Button color="primary" onClick={this.handleClick2}>
              Custom Picker Wrapper 2
            </Button>
            {this.state.displayColorPicker2 ? (
              <div className="dropdown-menu p-0 m-0" style={popover}>
                <div style={cover} onClick={this.handleClose2} />
                <BlockPicker className="m-0 border-0 w-100 mx-auto" />
              </div>
            ) : null}
          </Col>
          <Col xl="3" md="6">
            <Button id="toggleColorpickerPopover" color="primary">
              Inside Popover
            </Button>
            <UncontrolledPopover
              trigger="legacy"
              target="toggleColorpickerPopover"
              popperClassName="popover-custom-wrapper popover-custom-lg d-flex justify-content-center align-items-center p-3"
              placement="bottom">
              <CirclePicker />
            </UncontrolledPopover>
          </Col>
          <Col xl="3" md="6">
            <Button id="toggleColorpickerTooltip" color="primary">
              Inside Tooltip
            </Button>
            <UncontrolledTooltip
              trigger="legacy"
              placement="bottom"
              container="body"
              target="toggleColorpickerTooltip"
              popperClassName="tooltip-lg tooltip-secondary">
              <SwatchesPicker />
            </UncontrolledTooltip>
          </Col>
        </Row>
      </>
    );
  }
}
