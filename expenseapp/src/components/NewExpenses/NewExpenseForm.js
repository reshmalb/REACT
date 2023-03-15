import React,{useState} from "react";
import './NewExpenseForm.css'


const NewExpenseForm = (props) => {
   

    const [enterdTitle,setEnteredTitle]=useState('');
    const [enterdAmount,setEnteredAmount]=useState('');
    const [enterdDate,setEnteredDate]=useState('');


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            id:Math.random().toString(),
            date:new Date(enterdDate),
            title:enterdTitle,
            amount:enterdAmount


        }
        props.onSaveExpenseData(expenseData)
       // console.log(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }
    return (  
         <form onSubmit={submitHandler} className="expense_cotrols_form">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" value={enterdTitle} className="input-group1" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" value={enterdAmount} className="input-group1" min="0.01" step='0.01' onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" value={enterdDate} className="input-group1" min='2019-10-01' max='2022-12-31' onChange={dateChangeHandler}></input>
            </div>
            <div className="new-expense_actions">
                <button type="submit" id="btn-sbt" >Add Expense</button>
            </div>
    </form>
    
    );
}
export default NewExpenseForm;