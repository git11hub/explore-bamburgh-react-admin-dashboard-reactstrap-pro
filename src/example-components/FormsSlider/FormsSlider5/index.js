import React from 'react';

import Nouislider from 'nouislider-react';
export default function LivePreviewExample() {
  return (
    <>
      <div className="p-4">
        <Nouislider
          connect
          range={{ min: 0, max: 15 }}
          start={[3, 5]}
          step={1}
          tooltips
        />
      </div>
    </>
  );
}
