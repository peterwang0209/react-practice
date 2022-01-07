import Expenses from "./components/Expenses/Expenses";

// this is the arrow function, it is same as normal function
// App takes no argument

const App = () => {
  
  // expenses is a constant variable consisted of id, title, amount and date
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // this is what App will return
  return (
    <div>
      <h2>Let's get started!</h2>
      
      {/* pass the expenses as items to the Expense Component */}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
