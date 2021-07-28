import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  FormGroup,
  Button
} from 'reactstrap';

import DatePicker from 'react-datepicker';
export default function LivePreviewExample() {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }) => (
    <Button block color="second" onClick={onClick}>
      <span className="btn-wrapper--icon">
        <FontAwesomeIcon icon={['far', 'calendar-alt']} />
      </span>
      <span className="btn-wrapper--label">{value}</span>
    </Button>
  );

  return (
    <>
      <Row>
        <Col
          lg="6"
          className="d-flex align-items-center justify-content-center">
          <Card className="p-5 shadow-xxl">
            <FormGroup>
              <Label className="font-weight-bold">Input toggle</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['far', 'calendar-alt']} />
                  </InputGroupText>
                </InputGroupAddon>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold">Button toggle</Label>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </FormGroup>
          </Card>
        </Col>
        <Col lg="6">
          <div className="text-center my-5">
            <div className="heading-3 text-center">Inline datepicker</div>
            <div className="d-flex justify-content-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
