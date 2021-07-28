import React, { Component } from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

import Select, { Option, OptGroup } from 'rc-select';
export default class LivePreviewExample extends Component {
  state = {
    disabled: false,
    value: '',
    options: []
  };

  timeoutId: number;

  onChange = (value, option) => {
    console.log('onChange', value, option);
    this.setState({
      value
    });
  };

  onKeyDown = (e) => {
    const { value } = this.state;
    if (e.keyCode === 13) {
      console.log('onEnter', value);
    }
  };

  onSelect = (v, option) => {
    console.log('onSelect', v, option);
  };

  onSearch = (text: string) => {
    console.log('onSearch:', text);
  };

  onAsyncChange = (value) => {
    window.clearTimeout(this.timeoutId);

    this.setState({
      options: []
    });

    this.timeoutId = window.setTimeout(() => {
      this.setState({
        options: [{ value }, { value: '' }]
      });
    }, 1000);
  };

  toggleDisabled = () => {
    const { disabled } = this.state;
    this.setState({
      disabled: !disabled
    });
  };

  render() {
    const { value, disabled } = this.state;

    return (
      <>
        <Card className="shadow-xxl p-4">
          <Row>
            <Col lg="6">
              <div className="heading-3 text-center">Single basic</div>
              <Select
                disabled={disabled}
                placeholder="Example placeholder here ..."
                defaultValue="Arla Parkinson"
                style={{ width: '100%' }}>
                <OptGroup label="manager">
                  <Option value="Aoife Mooney" test-prop="jack-prop">
                    <b>Aoife Mooney</b>
                  </Option>
                  <Option value="Arla Parkinson" test-prop="lucy-prop">
                    Arla Parkinson
                  </Option>
                  <Option value="Eden Millington" test-prop="lucy-prop1">
                    Eden Millington
                  </Option>
                  <Option value="Phebe Stein" test-prop="lucy-prop2">
                    Phebe Stein
                  </Option>
                </OptGroup>
                <OptGroup label="engineer">
                  <Option value="Emelie Preece" test-prop="yiminghe-prop">
                    Emelie Preece
                  </Option>
                  <Option value="Malachi Chandler" test-prop="lucy-prop3">
                    Malachi Chandler
                  </Option>
                  <Option value="Saarah Irving" test-prop="lucy-prop4">
                    Saarah Irving
                  </Option>
                </OptGroup>
              </Select>
            </Col>
            <Col lg="6">
              <div className="heading-3 text-center">Combobox</div>
              <Select
                disabled={disabled}
                style={{ width: '100%' }}
                onChange={this.onChange}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                onInputKeyDown={this.onKeyDown}
                notFoundContent=""
                allowClear
                placeholder="please select"
                value={value}
                mode="combobox"
                backfill>
                <Option value="Arla Parkinson" test-prop="lucy-prop">
                  Arla Parkinson
                </Option>
                <Option value="Eden Millington" test-prop="lucy-prop1">
                  Eden Millington
                </Option>
                <Option value="Phebe Stein" test-prop="lucy-prop2">
                  Phebe Stein
                </Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Emelie Preece" test-prop="yiminghe-prop">
                  Emelie Preece
                </Option>
                <Option value="Malachi Chandler" test-prop="lucy-prop3">
                  Malachi Chandler
                </Option>
                <Option value="Saarah Irving" test-prop="lucy-prop4">
                  Saarah Irving
                </Option>
              </Select>
            </Col>
          </Row>

          <div className="divider my-4" />
          <div className="text-center">
            <Button color="primary" onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>
        </Card>
      </>
    );
  }
}
