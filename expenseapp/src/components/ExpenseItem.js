import React,{useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
   
    return(
     <div className='expense-item'>
            <div  className='div-subdata'>
                <ExpenseDate date={props.date}/>
                 <div className="expense-item_description">       
                    {props.title}</div>
                 <div className="expense-item_price">${props.amount}
                 </div>
            <div className='btn2'>
                    <button  id="button-delete"
                 >Change Amount</button>
                 
                 </div> 
          </div>
     </div>
    

    );
}
export default ExpenseItem;