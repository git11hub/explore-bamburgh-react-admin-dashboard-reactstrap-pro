import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
export default function LivePreviewExample() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="rounded bg-night-sky p-5">
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <div className="m-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          </div>
          <div className="m-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={2}
              inline
            />
          </div>
        </div>
      </div>
    </>
  );
}
