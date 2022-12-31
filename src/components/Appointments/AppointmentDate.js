import React from 'react';

const AppointmentDate = props => {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

  return (
    <div className="appointment-date">
			<div className="appointment-date__month">{month}</div>
			<div className="appointment-date__year">{year}</div>
			<div className="appointment-date__day">{day}</div>
		</div>
  )
}

export default AppointmentDate;