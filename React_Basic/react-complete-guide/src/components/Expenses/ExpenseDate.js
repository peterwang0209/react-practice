import React from 'react';
import './ExpenseDate.css';


// the props here is the Date we pass in from the ExpenseItem
// the entire paragraph is, we have the Date in App.js expense const variable
// it got pass to the Expense, and pass into ExpenseItem
// then it end up being here.

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;