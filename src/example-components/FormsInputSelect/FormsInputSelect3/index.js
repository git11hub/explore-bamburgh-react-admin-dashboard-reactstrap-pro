import React, { Component } from 'react';

import { Row, Col, Card } from 'reactstrap';

import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const options2 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class LivePreviewExample extends Component {
  state = {
    selectedOption: null,
    selectedOption2: null
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 });
  };
  render() {
    const { selectedOption } = this.state;
    const { selectedOption2 } = this.state;
    return (
      <>
        <Card className="shadow-xxl p-4">
          <Row>
            <Col lg="6">
              <Row>
                <Col md="6" xl="6">
                  <div className="heading-3 text-center">Single basic</div>
                  <Select
                    isSearchable
                    placeholder="Example placeholder ..."
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '0.29rem',
                      borderWidth: 1,
                      colors: {
                        ...theme.colors,
                        primary25: 'rgba(60,68,177,0.15)',
                        primary50: 'rgba(60,68,177,0.15)',
                        primary: '#3c44b1'
                      }
                    })}
                  />
                </Col>
                <Col md="6" xl="6">
                  <div className="heading-3 text-center">Single disabled</div>
                  <Select
                    isDisabled
                    placeholder="Example placeholder ..."
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '0.29rem',
                      borderWidth: 1,
                      colors: {
                        ...theme.colors,
                        primary25: 'rgba(60,68,177,0.15)',
                        primary50: 'rgba(60,68,177,0.15)',
                        primary: '#3c44b1'
                      }
                    })}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <Row>
                <Col md="6" xl="6">
                  <div className="heading-3 text-center">Multiple basic</div>
                  <Select
                    isSearchable
                    isMulti
                    placeholder="Example placeholder ..."
                    value={selectedOption2}
                    onChange={this.handleChange2}
                    options={options2}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '0.29rem',
                      borderWidth: 1,
                      colors: {
                        ...theme.colors,
                        primary25: 'rgba(60,68,177,0.15)',
                        primary50: 'rgba(60,68,177,0.15)',
                        primary: '#3c44b1'
                      }
                    })}
                  />
                </Col>
                <Col md="6" xl="6">
                  <div className="heading-3 text-center">Multiple disabled</div>
                  <Select
                    isDisabled
                    isMulti
                    placeholder="Example placeholder ..."
                    value={selectedOption2}
                    onChange={this.handleChange2}
                    options={options2}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '0.29rem',
                      borderWidth: 1,
                      colors: {
                        ...theme.colors,
                        primary25: 'rgba(60,68,177,0.15)',
                        primary50: 'rgba(60,68,177,0.15)',
                        primary: '#3c44b1'
                      }
                    })}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}
