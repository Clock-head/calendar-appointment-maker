import logo from './logo.svg';
import classes from './App.module.css';
import React, { useState } from 'react';
import Appointments from './components/Appointments/Appointments';
import Calendar from './components/Calendar/Calendar';


function App() {

  const [ dateChosen, setDateChosen ] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState(0);
  const [ selectedMonth, setSelectedMonth ] = useState(0);
  
  const dateSelectHandler = (date, month) => {
    setSelectedDate(date);
    setSelectedMonth(month);
    setDateChosen(true);
  }

  return (
    <div className={classes.App}>
      <Calendar dateSelect={dateSelectHandler}/>
      {dateChosen && <Appointments date={selectedDate} month={selectedMonth} />}
    </div>
  );
}

export default App;
