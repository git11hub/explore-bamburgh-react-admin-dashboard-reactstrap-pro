import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rating from 'react-rating';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <span className="text-black-50 mx-1 opacity-3">
              <FontAwesomeIcon size="3x" icon={['far', 'thumbs-up']} />
            </span>
          }
          fullSymbol={
            <span className="text-success mx-1">
              <FontAwesomeIcon size="3x" icon={['far', 'thumbs-up']} />
            </span>
          }
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <span className="text-black-50 mx-1 opacity-3">
              <FontAwesomeIcon size="3x" icon={['fas', 'heart']} />
            </span>
          }
          fullSymbol={
            <span className="text-danger mx-1">
              <FontAwesomeIcon size="3x" icon={['fas', 'heart']} />
            </span>
          }
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <span className="text-first mx-1 opacity-2">
              <FontAwesomeIcon size="2x" icon={['fas', 'battery-empty']} />
            </span>
          }
          fullSymbol={
            <span className="text-first mx-1">
              <FontAwesomeIcon size="2x" icon={['fas', 'battery-full']} />
            </span>
          }
        />
      </div>
    </>
  );
}
