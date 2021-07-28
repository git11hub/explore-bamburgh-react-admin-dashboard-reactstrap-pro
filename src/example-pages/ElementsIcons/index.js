import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import ElementsIcons1 from '../../example-components/ElementsIcons/Icons1';
import ElementsIcons2 from '../../example-components/ElementsIcons/Icons2';
import ElementsIcons3 from '../../example-components/ElementsIcons/Icons3';
import ElementsIcons4 from '../../example-components/ElementsIcons/Icons4';
export default function ElementsIcons() {
  return (
    <>
      <PageTitle
        titleHeading="Icons"
        titleDescription="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
      />

      <Row>
        <Col xl="6">
          <div className="bg-premium-dark mb-5 rounded">
            <div className="pt-5 pb-4">
              <h4 className="heading-2 heading-2-demo pb-1 text-white">
                FontAwesome
              </h4>
              <p className="mb-3 px-4">
                Over 1500 pixel perfect icons available, each designed from
                scratch, forged from years of experience.
              </p>
              <div className="px-5">
                <ElementsIcons1 />
              </div>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="bg-plum-plate mb-5 rounded">
            <div className="pt-5 pb-4">
              <h4 className="heading-2 heading-2-demo pb-1 text-white">
                Feather
              </h4>
              <p className="mb-3 px-4">
                Over 280 SVG beautiful and simple vector icons. Dual-tone colors
                can be added using the helper classes.
              </p>
              <div className="px-5">
                <ElementsIcons2 />
              </div>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="bg-night-sky mb-5 rounded">
            <div className="pt-5 pb-4">
              <h4 className="heading-2 heading-2-demo pb-1 text-white">
                Flags
              </h4>
              <p className="mb-3 px-4">
                A collection of all country flags in SVG. Easy to modify and
                integrate in almost any other element type.
              </p>
              <div className="px-5">
                <ElementsIcons3 />
              </div>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="bg-slick-carbon mb-5 rounded">
            <div className="pt-5 pb-4">
              <h4 className="heading-2 heading-2-demo pb-1 text-white">Ion</h4>
              <p className="mb-3 px-4">
                Ionicons is a complete icon set with 700+ icons crafted for web,
                iOS, Android, and desktop apps.
              </p>
              <div className="px-5">
                <ElementsIcons4 />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
