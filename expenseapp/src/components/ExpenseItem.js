import React,{useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
   const [title,setTitle]= useState(props.title);
   const [amount,setAmount]=useState(props.amount)

    const clickHandler=()=>{
        setAmount(100);
        console.log(amount)
    }
    return(
     <div className='expense-item'>
            <div  className='div-subdata'>
                <ExpenseDate date={props.date}/>
                 <div className="expense-item_description">       
                    {title}</div>
                 <div className="expense-item_price">${amount}
                <button  className="button-delete"
                 onClick={clickHandler}>change amount</button>
                 
                 </div>
          </div>
     </div>
    

    );
}
export default ExpenseItem;