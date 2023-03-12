import React from "react"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "./Card"



const Expenses=(props)=>{
    <Card className="expense-item-container">
    <ExpenseItem date={props.items[0].date} 
                title={props.items[0].title}
                amount={props.items[0].amount} ></ExpenseItem>
   <ExpenseItem date={props.items[1].date} 
                title={props.items[0].title}
                amount={props.items[0].amount} ></ExpenseItem>
   </Card>
}
export default Expenses;