import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  FormGroup,
  UncontrolledTooltip,
  Button,
  Alert
} from 'reactstrap';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { UncontrolledAlert } from 'reactstrap';

export default class LivePreviewExample extends Component {
  state = {
    value: 'Input value to be copied here...',
    copied: false,

    value2: 'Input with side button & icon',
    copied2: false
  };

  render() {
    return (
      <>
        {this.state.copied ? (
          <UncontrolledAlert color="success">
            <span>
              The input had the <b>{this.state.value}</b> content which was
              copied successfully!
            </span>
          </UncontrolledAlert>
        ) : null}
        {this.state.copied2 ? (
          <UncontrolledAlert color="warning">
            <span>
              The input had the <b>{this.state.value2}</b> content which was
              copied successfully!
            </span>
          </UncontrolledAlert>
        ) : null}

        <Row>
          <Col xl="6">
            <div className="font-weight-bold font-size-lg mb-3">
              Content source
            </div>
            <div className="form-group d-flex justify-content-between">
              <div className="flex-grow-1 mr-3">
                <input
                  className="form-control form-control-lg"
                  onChange={({ target: { value } }) =>
                    this.setState({ value, copied: false })
                  }
                  value={this.state.value}
                />
              </div>
              <CopyToClipboard
                text={this.state.value}
                onCopy={() => this.setState({ copied: true })}>
                <Button color="warning">Copy content from input</Button>
              </CopyToClipboard>
            </div>
            <div className="divider my-4" />
            <FormGroup>
              <div className="input-group">
                <input
                  className="form-control form-control-sm"
                  onChange={({ target: { value } }) =>
                    this.setState({ value, copied2: false })
                  }
                  value={this.state.value2}
                />
                <div className="input-group-append">
                  <CopyToClipboard
                    text={this.state.value2}
                    onCopy={() => this.setState({ copied2: true })}>
                    <Button
                      size="sm"
                      color="info"
                      className="btn-transition-none"
                      id="ClickToCopyTooltip">
                      <FontAwesomeIcon icon={['fas', 'save']} />
                    </Button>
                  </CopyToClipboard>
                  <UncontrolledTooltip
                    target="ClickToCopyTooltip"
                    popperClassName="tooltip-info">
                    Click to copy
                  </UncontrolledTooltip>
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col xl="6">
            <div className="font-weight-bold font-size-lg mb-3">Test copy</div>
            <Alert color="warning">
              Paste here the content you copied when you clicked the "Copy"
              button.
            </Alert>
            <textarea
              className="form-control font-size-sm"
              id=""
              name=""
              rows="2"></textarea>
          </Col>
        </Row>
      </>
    );
  }
}
