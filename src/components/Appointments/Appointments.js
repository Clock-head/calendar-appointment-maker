//import React, { useState } from 'react';
import AppointmentList from './AppointmentList';
import classes from './Appointments.module.css';
import Card from '../UI/Card';





const Appointments = props => {

  const filteredAppointments = props.appointments.filter( ( appointment ) => {
      if ( appointment.date.getDate() === parseInt(props.date) && appointment.date.getMonth() === parseInt(props.month) ) {
        return true;
      }
      return false;
  });

  

  return (
    <Card className={classes.appointments}>
      <div>
        <AppointmentList items={filteredAppointments}/>
      </div>
    </Card>
  )
};

export default Appointments