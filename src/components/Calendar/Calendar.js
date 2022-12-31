import React, { Fragment, useState, useEffect } from 'react';
import Date from './Date';
import MonthFilter from './MonthFilter'
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Calendar.module.css';

// const d = new Date();
// const currentMonth = d.getMonth()

const Calendar = (props) => {

  const year = 2022;
  let days = [];
  const d = new window.Date();
  const currentMonth = d.getMonth();

  const [ monthState, setMonthState ] = useState(currentMonth);
  const [ daysState, setDaysState ] = useState([]);
  

  const getDays = (year, month) => {
    let intMonth = parseInt(month);
    intMonth += 1;
    const d = new window.Date(year, intMonth, 0);
    console.log(d);
    return d.getDate()
  }

  useEffect(() => {
    days = [];
    const noOfDays = getDays(year, monthState);
    for (let i = 0; i < noOfDays; i++) {
      days.push(i);
    }
    setDaysState(days);
    //console.log(days);
    //console.log(monthState);
  }, [monthState]);

  const onChooseMonth = (month) => {
    //console.log(days);
    setMonthState(month)
  }

  const selectDateHandler = (e) => {
    //must pass month and date information here.
    console.log(e.target.value);
    props.dateSelect(e.target.value);
  }

  return (
      <div className={classes.calendar}>
      <MonthFilter 
      selected={monthState}
      onChangeFilter={onChooseMonth}>
      </MonthFilter>
        <Container>
          <Row>
             { daysState.map((day) => { return <Date key={day} date={day} onSelectDate={selectDateHandler}/>}) }
          </Row>
        </Container>
      </div>
  )
}

export default Calendar;