import React,{useState} from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'


const NewExpense=(props)=>{
    const [buttonPopUp,setButtonPopup]=useState(false)
    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
             ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
       // console.log(expenseData)
    }
    return(<div className="new-expense">
        <button onClick={()=>setButtonPopup(true)} >AddNew Expenses</button>
        <NewExpenseForm trigger={buttonPopUp} setTrigger={setButtonPopup} onSaveExpenseData={saveExpenseHandler}></NewExpenseForm>
        </div>
    )

}
export default NewExpense;