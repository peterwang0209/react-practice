import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

// this props are expenses constant variable from the App.js
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onSaveExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>
  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
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

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onSaveExpenseFilterHandler}
        />
        {expensesContent}
        
      </Card>
    </div>
  );
};

export default Expenses;
