import React from 'react';

import Nouislider from 'nouislider-react';
export default function LivePreviewExample() {
  return (
    <>
      <div className="px-4 pt-3 pb-5">
        <Nouislider
          start={[50]}
          pips={{ mode: 'count', values: 5 }}
          clickablePips
          range={{
            min: 0,
            max: 100
          }}
        />
      </div>
    </>
  );
}
