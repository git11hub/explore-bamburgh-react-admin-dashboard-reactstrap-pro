import React from 'react';

import { Button } from 'reactstrap';

import Rating from 'react-rating';
export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <Button
              size="sm"
              color="neutral-success"
              className="btn-icon mx-1 btn-transition-none"
            />
          }
          fullSymbol={
            <Button
              size="sm"
              color="success"
              className="btn-icon shadow-none mx-1 btn-transition-none"
            />
          }
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <Button
              color="neutral-danger"
              className="btn-icon mx-1 btn-transition-none"
            />
          }
          fullSymbol={
            <Button
              color="danger"
              className="btn-icon shadow-none mx-1 btn-transition-none"
            />
          }
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <Button
              size="lg"
              color="neutral-warning"
              className="btn-icon mx-1 btn-transition-none"
            />
          }
          fullSymbol={
            <Button
              size="lg"
              color="warning"
              className="btn-icon shadow-none mx-1 btn-transition-none"
            />
          }
        />
      </div>
    </>
  );
}
