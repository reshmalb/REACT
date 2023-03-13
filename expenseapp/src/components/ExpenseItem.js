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
                 </div>
            <div className='btn2'>
                    <button  id="button-delete"
                 onClick={clickHandler}>Change Amount</button>
                 
                 </div> 
          </div>
     </div>
    

    );
}
export default ExpenseItem;