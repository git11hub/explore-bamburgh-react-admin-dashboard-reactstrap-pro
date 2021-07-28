import React from 'react';

import { Row, Col } from 'reactstrap';

import { Sparklines, SparklinesLine } from 'react-sparklines';
function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w;

  return (function () {
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData1 = randomData(30);
const sampleData2 = randomData(32);
const sampleData3 = randomData(28);

export default function LivePreviewExample() {
  return (
    <>
      <div className="p-4">
        <Row>
          <Col md="4">
            <Sparklines data={sampleData1} height={40}>
              <SparklinesLine
                style={{ stroke: '#559500', fill: '#8fc638', fillOpacity: '1' }}
              />
            </Sparklines>
          </Col>
          <Col md="4">
            <Sparklines data={sampleData2} height={80}>
              <SparklinesLine
                style={{ stroke: '#d1192e', strokeWidth: '1', fill: 'none' }}
              />
            </Sparklines>
          </Col>
          <Col md="4">
            <Sparklines data={sampleData3}>
              <SparklinesLine
                style={{ strokeWidth: 3, stroke: '#336aff', fill: 'none' }}
              />
            </Sparklines>
          </Col>
        </Row>
      </div>
    </>
  );
}
