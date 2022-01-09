import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

// this props are expenses constant variable from the App.js
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onSaveExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>

      {/* Card customized component is imported from Card, it will take the className css style and append it the Card frame */}
      <Card className="expenses">
        {/* the expenses constant variable has 4 datasets
      we pass them through the ExpenseItem component,
      notice that we can access the expenses dataset by using
      
      props.item[i].title/amount/date 
      
      and also the items is a user-defined attributes name*/}

        <ExpensesFilter selected={filteredYear} onSaveExpenseFilter={onSaveExpenseFilterHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
