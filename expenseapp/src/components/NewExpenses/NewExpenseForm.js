import React from "react";
import './NewExpenseForm.css'

const NewExpenseForm = () => {
    // const change= document.getElementById('')
    // change.addEventListener("click",(event)=>{console.log(event.target.value)})
    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }
    return (  
         <form className="expense_cotrols_form">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" className="input-group1" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" className="input-group1" min="0.01" step='0.01'></input>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" className="input-group1" min='2019-10-01' max='2022-12-31'></input>
            </div>
            <div className="new-expense_actions">
                <button type="submit" id="btn-sbt" >Add Expense</button>
            </div>
    </form>
    
    );
}
export default NewExpenseForm;