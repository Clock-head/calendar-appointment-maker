import logo from './logo.svg';
import classes from './App.module.css';
import React, { useState } from 'react';
import Appointments from './components/Appointments/Appointments';
import Calendar from './components/Calendar/Calendar';


function App() {

  const [ dateChosen, setDateChosen ] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState(0);
  const dateSelectHandler = (date) => {
    setSelectedDate(date);
    setDateChosen(true);
    console.log(date)
    console.log(selectedDate);
  }

  return (
    <div className={classes.App}>
      <Calendar dateSelect={dateSelectHandler}/>
      {dateChosen && <Appointments selectedDate={selectedDate} />}
    </div>
  );
}

export default App;
