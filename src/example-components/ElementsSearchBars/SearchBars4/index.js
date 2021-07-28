import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LivePreviewExample() {
  const [searchStatus1, setSearchStatus1] = useState(false);
  const toggleSearch1 = () => setSearchStatus1(!searchStatus1);

  const [searchStatus2, setSearchStatus2] = useState(false);
  const toggleSearch2 = () => setSearchStatus2(!searchStatus2);

  return (
    <>
      <div
        className={clsx('search-wrapper mb-4', { 'is-active': searchStatus1 })}>
        <div className="search-options">
          <div>
            <input
              name="type"
              type="radio"
              value="type-audio"
              id="type-audio"
            />
            <label htmlFor="type-audio">
              <FontAwesomeIcon
                icon={['far', 'file-audio']}
                className="font-size-lg"
              />
              <span>Audio</span>
            </label>
          </div>
          <div>
            <input
              name="type"
              type="radio"
              value="type-video"
              id="type-video"
            />
            <label htmlFor="type-video">
              <FontAwesomeIcon
                icon={['fas', 'film']}
                className="font-size-lg"
              />
              <span>Videos</span>
            </label>
          </div>
          <div>
            <input
              name="type"
              type="radio"
              value="type-images"
              id="type-images"
            />
            <label htmlFor="type-images">
              <FontAwesomeIcon
                icon={['far', 'images']}
                className="font-size-lg"
              />
              <span>Images</span>
            </label>
          </div>
        </div>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <input
          type="search"
          onFocus={toggleSearch1}
          onBlur={toggleSearch1}
          placeholder="Search terms..."
          className="form-control"
        />
      </div>

      <div className={clsx('search-wrapper', { 'is-active': searchStatus2 })}>
        <div className="search-options">
          <div>
            <input
              name="type"
              type="radio"
              value="type-audio2"
              id="type-audio2"
            />
            <label htmlFor="type-audio2">
              <FontAwesomeIcon
                icon={['far', 'file-audio']}
                className="font-size-lg"
              />
              <span>Audio</span>
            </label>
          </div>
          <div>
            <input
              name="type"
              type="radio"
              value="type-video2"
              id="type-video2"
            />
            <label htmlFor="type-video2">
              <FontAwesomeIcon
                icon={['fas', 'film']}
                className="font-size-lg"
              />
              <span>Videos</span>
            </label>
          </div>
          <div>
            <input
              name="type"
              type="radio"
              value="type-images2"
              id="type-images2"
            />
            <label htmlFor="type-images2">
              <FontAwesomeIcon
                icon={['far', 'images']}
                className="font-size-lg"
              />
              <span>Images</span>
            </label>
          </div>
        </div>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <input
          type="search"
          onFocus={toggleSearch2}
          onBlur={toggleSearch2}
          placeholder="Search terms..."
          className="form-control rounded-pill"
        />
      </div>
    </>
  );
}
