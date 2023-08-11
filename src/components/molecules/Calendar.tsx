import React, { useRef } from 'react';
import Calendar from 'react-calendar';
import { CalendarContainer } from '@components/atoms/Container';
import { NextIcon, PrevIcon } from '@components/atoms/Icon';

export const MainCalendar = () => {
  const todayRef = useRef();

  return (
    <CalendarContainer>
      <Calendar
        ref={todayRef}
        calendarType="gregory"
        nextLabel={<NextIcon />}
        prevLabel={<PrevIcon />}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        formatShortWeekday={(locale, date) =>
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
        }
        view={'month'}
      />
    </CalendarContainer>
  );
};
