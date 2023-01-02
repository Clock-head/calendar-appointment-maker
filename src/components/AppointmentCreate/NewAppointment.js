import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import classes from './NewAppointment.module.css';

const NewAppointment = props => {

  const [ isEditing, setIsEditing  ] = useState(false);

  const saveAppointment = (appointment) => {
    const appointmentObj = {
      firstName: appointment.firstName,
      lastName: appointment.lastName,
      date: appointment.date
    }

    props.persistAppointment(appointmentObj);
  }

  const setEditingHandler = () => {
    if (isEditing === false) {
      setIsEditing(true);
    }

    if (isEditing === true) {
      setIsEditing(false);
    }
  }


return (<div className={classes['new-appointment']}>
  { !isEditing && <button onClick={setEditingHandler}> Add Appointment </button>}
  { isEditing && <AppointmentForm onCancelEditing={setEditingHandler} onSaveAppointment={saveAppointment}></AppointmentForm> }
  </div>
)

};

export default NewAppointment;