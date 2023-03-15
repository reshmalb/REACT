import React,{useState}from "react"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import FilterDateComponent from "./FilterDateComponent"
import ExpenseChart from "./ExpenseChart"

const Expenses=(props)=>{
        const [filteredDate,setFilteredDate]=useState('')
        let expenseContent;

              //handling expense data based on selected date
              const changeDateHandler=(selectedDate)=>{
                      setFilteredDate(selectedDate);
                  
              }
              const filteredExpenses=props.items.filter((expenses)=>{
                           return  expenses.date.getFullYear().toString()===filteredDate})

               if(filteredExpenses.length===0){
                expenseContent=<p id="info-msg">No Expenses found!  </p>

               }            
              else if(filteredExpenses.length==1){
                 expenseContent=filteredExpenses.map(val=>(
                 <div> <ExpenseItem key={val.id}
                  date={val.date} 
                      title={val.title}
                      amount={val.amount} >
                      </ExpenseItem>
                      <p id="info-msg">Only single Expense here. Please add more..."</p>

                      </div> )
                      )   

                 } 
               else if(filteredExpenses.length>1){ 
                      expenseContent=filteredExpenses.map(val=>(
                    <ExpenseItem key={val.id}
                    date={val.date} 
                        title={val.title}
                        amount={val.amount} >
                        </ExpenseItem> )
                        )    
                }       

    return(    
      <div>  
       <FilterDateComponent  onChangeDate={changeDateHandler} ></FilterDateComponent>
       <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        {expenseContent}
       
      </div> )      
}


export default Expenses;