import React, { Component } from 'react';

import { Row, Col, Button, Alert } from 'reactstrap';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { UncontrolledAlert } from 'reactstrap';

export default class LivePreviewExample extends Component {
  state = {
    value:
      'Dummy content to be copied on button click! Write something else here...',
    copied: false
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

        <Row>
          <Col xl="6">
            <div className="font-weight-bold font-size-lg mb-3">
              Content source
            </div>
            <textarea
              name=""
              className="form-control"
              rows="6"
              onChange={({ target: { value } }) =>
                this.setState({ value, copied: false })
              }
              value={this.state.value}
            />

            <div className="text-center mt-4">
              <CopyToClipboard
                text={this.state.value}
                onCopy={() => this.setState({ copied: true })}>
                <Button color="success">Copy content from textarea</Button>
              </CopyToClipboard>
            </div>
          </Col>
          <Col xl="6">
            <div className="font-weight-bold font-size-lg mb-3">Test copy</div>
            <Alert color="warning">
              Paste here the content you copied when you clicked the "Copy"
              button.
            </Alert>
            <textarea
              name=""
              className="form-control font-size-sm"
              rows="2"></textarea>
          </Col>
        </Row>
      </>
    );
  }
}
