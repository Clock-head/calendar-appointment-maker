import React from 'react';
import classes from './MonthFilter.module.css';
import Card from '../UI/Card';

const MonthFilter = props => {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dropdownChangeHandler = (event) => {
    //console.log(event.target.value)
    props.onChangeFilter(event.target.value);
  }

  return (
    <Card className={classes['card']}>
    <div className={classes['month-filter']}>
        <div className={classes['month-filter__control']}>
          {/* <label>{months[props.selected]}</label> */}
          <select value={props.selected} onChange={dropdownChangeHandler}>
					<option value='0'>January</option>
					<option value='1'>February</option>
					<option value='2'>March</option>
					<option value='3'>April</option>
					<option value='4'>May</option>
					<option value='5'>June</option>
					<option value='6'>July</option>
					<option value='7'>August</option>
					<option value='8'>September</option>
					<option value='9'>October</option>
					<option value='10'>November</option>
					<option value='11'>December</option>
        </select>
        </div>
    </div>
    </Card>
  )

}

export default MonthFilter;