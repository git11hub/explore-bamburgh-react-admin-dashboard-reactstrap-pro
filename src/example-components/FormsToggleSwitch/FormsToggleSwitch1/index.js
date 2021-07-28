import React, { useState } from 'react';

import { Row, Col } from 'reactstrap';

import Switch from 'rc-switch';
export default function LivePreviewExample() {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Row>
        <Col xl="6">
          <div className="heading-3 text-center">Default</div>
          <div className="d-flex justify-content-center">
            <div className="m-2">
              <Switch
                checked={checked}
                onClick={toggle}
                className="switch-medium"
              />
            </div>
            <div className="m-2">
              <Switch className="switch-medium" />
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="heading-3 text-center">Sizing</div>
          <div className="d-flex justify-content-center">
            <div className="m-2">
              <Switch className="switch-small" />
            </div>
            <div className="m-2">
              <Switch className="switch-medium" />
            </div>
            <div className="m-2">
              <Switch className="switch-large" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
