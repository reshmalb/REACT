import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpenses/NewExpense';
function App() { 
    const details=[
    {  date:new Date(2021,1,10),
     title:'vacation',
    amount:200
   },
    {
      date:new Date(2021,2,20),
      title:'insurance',
     amount:5000 
    }
]

  return (
    <div className="App">
      <NewExpense></NewExpense>

     <div className="expense-item-container">
      <ExpenseItem date={details[0].date} 
                 title={details[0].title}
                 amount={details[0].amount} ></ExpenseItem>
      <ExpenseItem date={details[1].date} 
                 title={details[1].title}
                 amount={details[1].amount} ></ExpenseItem>
    </div>
    </div>
 
  );
}

export default App;
