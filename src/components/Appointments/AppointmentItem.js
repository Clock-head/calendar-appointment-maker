import React from 'react';
import classes from './AppointmentItem.module.css';
import Card from '../UI/Card';
import AppointmentDate from './AppointmentDate';


const AppointmentItem = props => {
  return (
    <Card className={classes['appointment-item']}>
      <AppointmentDate date={props.date} />
    <div className={classes['appointment-item']}>
      <h2>{props.firstName} {props.lastName} </h2>
    </div>
    </Card>
  )
};

export default AppointmentItem;