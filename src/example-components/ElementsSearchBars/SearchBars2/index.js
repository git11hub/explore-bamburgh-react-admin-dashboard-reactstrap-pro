import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'reactstrap';

export default function LivePreviewExample() {
  const [searchStatus1, setSearchStatus1] = useState(false);
  const toggleSearch1 = () => setSearchStatus1(!searchStatus1);

  const [searchStatus2, setSearchStatus2] = useState(false);
  const toggleSearch2 = () => setSearchStatus2(!searchStatus2);

  const [searchStatus3, setSearchStatus3] = useState(false);
  const toggleSearch3 = () => setSearchStatus3(!searchStatus3);

  const [searchStatus4, setSearchStatus4] = useState(false);
  const toggleSearch4 = () => setSearchStatus4(!searchStatus4);

  const [searchStatus5, setSearchStatus5] = useState(false);
  const toggleSearch5 = () => setSearchStatus5(!searchStatus5);

  const [searchStatus6, setSearchStatus6] = useState(false);
  const toggleSearch6 = () => setSearchStatus6(!searchStatus6);

  return (
    <>
      <div
        className={clsx('search-wrapper search-wrapper--grow mb-4', {
          'is-active': searchStatus1
        })}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch1}
          onBlur={toggleSearch1}
          placeholder="Search terms..."
        />
      </div>
      <div
        className={clsx('search-wrapper search-wrapper--grow mb-4', {
          'is-active': searchStatus2
        })}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch2}
          onBlur={toggleSearch2}
          placeholder="Search terms..."
          className="rounded-pill"
        />
      </div>

      <div className="divider mb-4" />

      <div
        className={clsx(
          'search-wrapper search-wrapper--alternate search-wrapper--grow mb-4',
          { 'is-active': searchStatus3 }
        )}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch3}
          onBlur={toggleSearch3}
          placeholder="Search terms..."
        />
      </div>
      <div
        className={clsx(
          'search-wrapper search-wrapper--alternate search-wrapper--grow mb-4',
          { 'is-active': searchStatus4 }
        )}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch4}
          onBlur={toggleSearch4}
          placeholder="Search terms..."
          className="rounded-pill"
        />
      </div>

      <div className="divider mb-4" />

      <div
        className={clsx('search-wrapper search-wrapper--alternate mb-4', {
          'is-active': searchStatus5
        })}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch5}
          onBlur={toggleSearch5}
          placeholder="Search terms..."
        />
      </div>
      <div
        className={clsx('search-wrapper search-wrapper--alternate', {
          'is-active': searchStatus6
        })}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch6}
          onBlur={toggleSearch6}
          placeholder="Search terms..."
          className="rounded-pill"
        />
      </div>
    </>
  );
}
