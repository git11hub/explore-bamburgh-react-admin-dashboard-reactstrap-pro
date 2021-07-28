import React from 'react';

import Rating from 'react-rating';
import { Star, LifeBuoy, Heart } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <Star className="font-size-lg text-warning mx-1 opacity-3" />
          }
          fullSymbol={<Star className="font-size-lg text-warning mx-1" />}
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <LifeBuoy className="font-size-xl text-black-50 mx-1 opacity-3" />
          }
          fullSymbol={<LifeBuoy className="font-size-xl text-first mx-1" />}
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={3}
          stop={5}
          emptySymbol={
            <Heart className="font-size-xxl text-danger mx-1 opacity-3" />
          }
          fullSymbol={<Heart className="font-size-xxl text-danger mx-1" />}
        />
      </div>
    </>
  );
}
