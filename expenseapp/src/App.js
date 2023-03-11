import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
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
     <ExpenseItem date={details[0].date} 
                 title={details[0].title}
                 amount={details[0].amount} ></ExpenseItem>
    <ExpenseItem date={details[1].date} 
                 title={details[1].title}
                 amount={details[1].amount} ></ExpenseItem>
    </div>
  );
}

export default App;
