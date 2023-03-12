import React from 'react';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
    return(
    
            <div  className="div-subdata">
                <ExpenseDate date={props.date}/>
                 <div className="expense-item_description">       
                    {props.title}</div>
                 <div className="expense-item_price">${props.amount}
                 </div>
          </div>
    
    

    );
}
export default ExpenseItem;