import React from 'react';

import { Card, Container } from 'reactstrap';

import TimePicker from 'rc-time-picker';
import moment from 'moment';
const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

const now = moment().hour(14).minute(30);

function generateOptions(length, excludedOptions) {
  const arr = [];
  for (let value = 0; value < length; value++) {
    if (excludedOptions.indexOf(value) < 0) {
      arr.push(value);
    }
  }
  return arr;
}

function onChange(value) {
  console.log(value && value.format(str));
}

function disabledHours() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
}

function disabledMinutes(h) {
  switch (h) {
    case 9:
      return generateOptions(60, [30]);
    case 21:
      return generateOptions(60, [0]);
    default:
      return generateOptions(60, [0, 30]);
  }
}

function disabledSeconds(h, m) {
  return [h + (m % 60)];
}

export default function LivePreviewExample() {
  return (
    <>
      <Container>
        <Card className="p-5 shadow-xxl">
          <div className="heading-3 text-center">Simple</div>
          <div className="d-flex justify-content-center align-items-center">
            <TimePicker
              showSecond={showSecond}
              defaultValue={now}
              className="xxx"
              onChange={onChange}
              disabledHours={disabledHours}
              disabledMinutes={disabledMinutes}
              disabledSeconds={disabledSeconds}
            />
          </div>
        </Card>
        <div className="divider my-4" />
        <Card className="p-5 shadow-xxl">
          <div className="heading-3 text-center">Format</div>
          <div className="d-flex justify-content-center align-items-center">
            <TimePicker defaultValue={moment()} showHour={true} />
          </div>
        </Card>
        <div className="divider my-4" />
        <Card className="p-5 shadow-xxl">
          <div className="heading-3 text-center">Disabled</div>
          <div className="d-flex justify-content-center align-items-center">
            <TimePicker defaultValue={now} disabled onChange={onChange} />
          </div>
        </Card>
      </Container>
    </>
  );
}
