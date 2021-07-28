import React from 'react';

import Rating from 'react-rating';
import MdHeart from 'react-ionicons/lib/MdHeart';
import MdStar from 'react-ionicons/lib/MdStar';
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp';
import IosBatteryDead from 'react-ionicons/lib/IosBatteryDead';
import IosBatteryFull from 'react-ionicons/lib/IosBatteryFull';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={2}
          stop={5}
          emptySymbol={
            <MdHeart color="var(--light)" fontSize="2rem" beat={true} />
          }
          fullSymbol={
            <MdHeart color="var(--primary)" fontSize="2rem" beat={true} />
          }
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={2}
          stop={5}
          emptySymbol={
            <MdStar color="var(--secondary)" fontSize="2.2rem" rotate={true} />
          }
          fullSymbol={
            <MdStar color="var(--danger)" fontSize="2.2rem" rotate={true} />
          }
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={2}
          stop={5}
          emptySymbol={<IosThumbsUp color="var(--light)" fontSize="3.2rem" />}
          fullSymbol={<IosThumbsUp color="var(--success)" fontSize="3.2rem" />}
        />
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Rating
          initialRating={2}
          stop={5}
          emptySymbol={
            <IosBatteryDead color="var(--light)" fontSize="2.8rem" />
          }
          fullSymbol={<IosBatteryFull color="var(--first)" fontSize="2.8rem" />}
        />
      </div>
    </>
  );
}
