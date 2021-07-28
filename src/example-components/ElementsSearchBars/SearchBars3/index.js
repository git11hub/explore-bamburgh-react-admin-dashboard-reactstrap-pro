import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Input } from 'reactstrap';

export default function LivePreviewExample() {
  const [searchStatus1, setSearchStatus1] = useState(false);
  const toggleSearch1 = () => setSearchStatus1(!searchStatus1);

  const [searchStatus2, setSearchStatus2] = useState(false);
  const toggleSearch2 = () => setSearchStatus2(!searchStatus2);

  const [searchStatus3, setSearchStatus3] = useState(false);
  const toggleSearch3 = () => setSearchStatus3(!searchStatus3);

  const [searchStatus4, setSearchStatus4] = useState(false);
  const toggleSearch4 = () => setSearchStatus4(!searchStatus4);

  return (
    <>
      <Row>
        <Col md="6">
          <div
            className={clsx('search-wrapper search-wrapper--expandable mb-4', {
              'is-active': searchStatus1
            })}>
            <span className="icon-wrapper text-black">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </span>
            <Input
              onFocus={toggleSearch1}
              onBlur={toggleSearch1}
              placeholder="Search terms..."
              type="search"
            />
          </div>
          <div
            className={clsx('search-wrapper search-wrapper--expandable', {
              'is-active': searchStatus2
            })}>
            <span className="icon-wrapper text-black">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </span>
            <Input
              onFocus={toggleSearch2}
              onBlur={toggleSearch2}
              className="rounded-pill"
              placeholder="Search terms..."
              type="search"
            />
          </div>
        </Col>
        <Col md="6">
          <div
            className={clsx(
              'search-wrapper search-wrapper--expandable search-wrapper--alternate mb-4',
              { 'is-active': searchStatus3 }
            )}>
            <span className="icon-wrapper text-black">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </span>
            <Input
              onFocus={toggleSearch3}
              onBlur={toggleSearch3}
              placeholder="Search terms..."
              type="search"
            />
          </div>
          <div
            className={clsx(
              'search-wrapper search-wrapper--expandable search-wrapper--alternate',
              { 'is-active': searchStatus4 }
            )}>
            <span className="icon-wrapper text-black">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </span>
            <Input
              onFocus={toggleSearch4}
              onBlur={toggleSearch4}
              className="rounded-pill"
              placeholder="Search terms..."
              type="search"
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
