import React from 'react';
import AppointmentItem from './AppointmentItem';
import classes from './AppointmentList.module.css';


const AppointmentList = props => {

  if (props.items.length === 0) {
    return <h2 className={classes['expenses-list__fallback']}>no appointments today.</h2>
  }

  if (props.items.length > 0) {
    return ( props.items.map( (appointment) => ( 
        <AppointmentItem 
        name={ appointment.name } 
        time={appointment.time}
        date={appointment.date}
        /> 
        )))
  }

};

export default AppointmentList;