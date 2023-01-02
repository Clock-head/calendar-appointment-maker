import React, { useState } from 'react';
import classes from './AppointmentForm.module.css';

const AppointmentForm = props => {
  
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const appointmentEntry = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      date: new Date(enteredDate)
    }
    props.onSaveAppointment(appointmentEntry);
  }

  const inputFirstNameHandler = (e) => {
    setEnteredFirstName(e.target.value);
  }

  const inputLastNameHandler = (e) => {
    setEnteredLastName(e.target.value);
  }

  const inputDateHandler = (e) => {
    console.log(e.target.value)
    setEnteredDate(e.target.value);
  }




  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes['new-appointment__controls']}>
          <div className={classes['new-appointment__control']}>
              <label> First Name </label>
              <input type='text' value={enteredFirstName} onChange={inputFirstNameHandler}></input>
          </div>
          <div className={classes['new-appointment__control']}>
              <label> Last Name </label>
              <input type='text' value={enteredLastName} onChange={inputLastNameHandler}></input>
          </div>
          <div className={classes['new-appointment__control']}>
              <label> Appointment Date </label>
              <input type='date' value={enteredDate} onChange={inputDateHandler}></input>
          </div>
          <div className={classes['new-appointment__actions']}>
              <button type='submit'> Submit Appointment </button>
              <button onClick={props.onCancelEditing}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AppointmentForm;