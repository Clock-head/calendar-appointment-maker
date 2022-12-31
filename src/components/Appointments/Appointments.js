import React, { useState } from 'react';
import AppointmentList from './AppointmentList';
import classes from './Appointments.module.css';
import Card from '../UI/Card';

const appointments = [
  {
    name: "Andrew",
    time: "1600",
    date: new Date('2022, 3, 4')
  },
  {
    name: "Wahyu",
    time: "1300",
    date: new Date('2022, 3, 5')
  },
  {
    name: "Ellie",
    time: "1400",
    date: new Date('2022, 3, 7')
  }
]

const Appointments = props => {

  const filteredAppointments = appointments.filter(appointment => 
     appointment.date.getDate() === parseInt(props.selectedDate));

  return (
    <Card className={classes.appointments}>
      <div>
        <AppointmentList items={filteredAppointments}/>
      </div>
    </Card>
  )
};

export default Appointments