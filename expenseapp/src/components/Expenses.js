import React from "react"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "./Card"



const Expenses=(props)=>{
   console.log(props.items)
   
    return(
    <div >
    
      <ExpenseItem date={props.items.date} 
                title={props.items.title}
                amount={props.items.amount} >

                </ExpenseItem>
           
    
    
    
    
    
   </div>)
      
}
export default Expenses;