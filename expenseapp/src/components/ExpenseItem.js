import React from 'react';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
    const clickHandler=()=>{
        console.log("button clicked!!!")
    }
    return(
     <div className='expense-item'>
            <div  className='div-subdata'>
                <ExpenseDate date={props.date}/>
                 <div className="expense-item_description">       
                    {props.title}</div>
                 <div className="expense-item_price">${props.amount}
                 <button  className="button-delete"
                 onClick={clickHandler}>Delete Expense</button>
                 </div>
          </div>
     </div>
    

    );
}
export default ExpenseItem;