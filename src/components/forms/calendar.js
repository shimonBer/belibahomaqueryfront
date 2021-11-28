import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

function CalendarComp({onDateChange}) {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
      console.log(value)
      onDateChange(value.getMonth() + 1, value.getFullYear())

  }, [value])


  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default CalendarComp