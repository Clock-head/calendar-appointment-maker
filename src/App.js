import logo from './logo.svg';
import classes from './App.module.css';
import React, { useState } from 'react';
import Appointments from './components/Appointments/Appointments';
import Calendar from './components/Calendar/Calendar';
import NewAppointment from './components/AppointmentCreate/NewAppointment';

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


function App() {

  const [ dateChosen, setDateChosen ] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState(0);
  const [ selectedMonth, setSelectedMonth ] = useState(0);
  
  const dateSelectHandler = (date, month) => {
    setSelectedDate(date);
    setSelectedMonth(month);
    setDateChosen(true);
  }

  const appointmentPersistFunc = (appointment) => {

    appointments.push(appointment);
    console.log(appointments);
  }

  const resetFunc = () => {
    setDateChosen(false);
  }

  return (
    <div className={classes.App}>
      <NewAppointment persistAppointment={appointmentPersistFunc}></NewAppointment>
      <Calendar dateSelect={dateSelectHandler} displayReset={resetFunc}/>
      { dateChosen && <Appointments appointments={appointments} date={selectedDate} month={selectedMonth} />}
    </div>
  );
}

export default App;
