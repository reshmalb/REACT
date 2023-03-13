import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses';
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
const addExpenseHandler=(expense)=>{
  console.log('In app.js');
  console.log(expense);
}

  return (
    <div className="App">
         <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

        < div className="expense-item-container">
            <Expenses items={details}></Expenses>      
         </div>
    </div>
 
  );
}

export default App;
