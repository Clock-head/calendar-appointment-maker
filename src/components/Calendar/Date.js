import React, { Fragment, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Date.module.css';

const Date = (props) => {

  // useEffect(() => {
  //   console.log(props.date)
  // }, [])

  return (
    <Col>
      <div className={classes['calendar-date']}> 
          <button className={classes['calendar-date__day']} value={props.date} onClick={props.onSelectDate}> 
            {props.date + 1} 
          </button> 
          </div> 
    </Col>
      
)
}

export default Date;