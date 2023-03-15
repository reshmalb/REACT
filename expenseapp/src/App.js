import React ,{useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses';

function App() { 
  //DUMMY DATA
  const dummy=[
    { id:'e1',
      date:new Date(2020,5,2),
    title:'vacation',
     amount:300},
     {
      id:'e2',
      date:new Date(2022,3,5),
    title:'news paper',
     amount:500},
     {
     id:'e3',
      date:new Date(2020,6,9),
    title:'education',
     amount:700},
     {
     id:'e4',
      date:new Date(2019,8,10),
    title:'health',
     amount:1000}
  ]
const[details,setDetails]=useState(dummy);
//handling user entered data
const addExpenseHandler=(expense)=>{  
  setDetails((prevDetails)=>{
    return [expense,...prevDetails]}) 
}

  
  return (
    <div className="App">
         <NewExpense onAddExpense={addExpenseHandler}></NewExpense>   
          <div className='expense-item-container'  >         
          <Expenses key={details.id} items={details}></Expenses>
           </div>
          
     </div>
 
  );
}

export default App;
