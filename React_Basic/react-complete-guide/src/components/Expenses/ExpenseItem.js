import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


// the props here are disassemble dataset from the expenses.
// form the Expenses.js, we break the item dataset into specific 
// title, amount and date
const ExpenseItem = (props) => {

  // useState is a react-hook
  // we can use this function to update the "state" of the component 
  // instead of rendering entire webpage
  // props.title is the content we want to pay attention
  // and state is the current props.title
  const [state, setstate] = useState(props.title);

  // once the ClickHandler is triggered, then the setstate becomes certain state

  // when we use const, we cannot use equal = sign to assign value
  const clickHandler = () => {
    setstate('Updated');
  }

  return (
    <Card className='expense-item'>

      {/* we pass the props.date to the ExpenseDate component 
      we keep breaking the Component into as much pieces as possible*/}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>

        {/* the state here is from the line 17 state which is also the props.title */}
        <h2>{state}</h2>

        {/* props.amount */}
        <div className='expense-item__price'>${props.amount}</div>
      </div>

      {/* onClick is a common js method */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
