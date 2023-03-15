import React ,{useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses';
function App() { 
const[details,setDetails]=useState([
  {date:new Date(2021,5,2),
  title:'vacation',
   amount:300}
]);
const addExpenseHandler=(expense)=>{
  console.log(expense)
  console.log(expense.date)
  console.log(expense.title)
  console.log(expense.amount)
  const data=[
    { 
      date:expense.date,
    title:expense.title,
    amout:expense.amount
    }
  ];
  setDetails([...details,expense])
 
}
console.log(details)
  return (
    <div className="App">
         <NewExpense onAddExpense={addExpenseHandler}></NewExpense>       
      
            < div className="expense-item-container">
              {
                details.map((val)=>{
                  return(
                    <Expenses items={val}></Expenses>
                  )
                }
                )
              }
        
        </div>       
     </div>
 
  );
}

export default App;
