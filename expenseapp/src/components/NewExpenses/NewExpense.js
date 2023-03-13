import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'

const NewExpense=(props)=>{
    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
             ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        console.log(expenseData)
    }
    return(<div className="new-expense">
        <NewExpenseForm onSaveExpenseData={saveExpenseHandler}></NewExpenseForm>
        </div>
    )

}
export default NewExpense;