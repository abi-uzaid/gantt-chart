import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/id';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date('2023-07-20T10:00:00'),
      end: new Date('2023-07-20T12:00:00'),
    },
    {
      title: 'Event 2',
      start: new Date('2023-07-21T14:00:00'),
      end: new Date('2023-07-21T16:00:00'),
    },
  ];

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </div>
  );
};

export default MyCalendar;
