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
  FormGroup
} from 'reactstrap';

import DatePicker from 'react-datepicker';
export default function LivePreviewExample() {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));

  return (
    <>
      <Row>
        <Col lg="6">
          <div className="text-center">
            <div className="heading-3 text-center">Inline multiple months</div>
            <div className="d-flex justify-content-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                monthsShown={2}
                inline
              />
            </div>
          </div>
        </Col>
        <Col
          lg="6"
          className="d-flex align-items-center justify-content-center">
          <Card className="p-5 shadow-xxl">
            <FormGroup>
              <Label>Start date:</Label>
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
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>End date:</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['far', 'calendar-alt']} />
                  </InputGroupText>
                </InputGroupAddon>
                <DatePicker
                  className="form-control"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </InputGroup>
            </FormGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
