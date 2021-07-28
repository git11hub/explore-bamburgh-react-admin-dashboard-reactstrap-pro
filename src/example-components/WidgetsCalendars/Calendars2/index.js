import React from 'react';

import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from './events';

let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: '#eaf6ff'
    }
  });

const localizer = momentLocalizer(moment);

export default function LivePreviewExample() {
  return (
    <>
      <Calendar
        localizer={localizer}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2015, 3, 1)}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper
        }}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: 650 }}
      />
    </>
  );
}
