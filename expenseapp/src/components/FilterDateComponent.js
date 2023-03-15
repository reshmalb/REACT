import React,{useState} from "react";
import './FilterDateComponent.css'
const FilterDateComponent=(props)=>{
    const [selectedDate,setSelectedDate]=useState('');
    //Handling date drop-down list
    const filterHandler=(event)=>{      
        setSelectedDate(event.target.value);        
    }
    //passing selected date to parent
    props.onChangeDate(selectedDate);
    
    return(
        <div className='date-filter_conatainer' >           
            <select select={selectedDate} onChange={filterHandler}> 
                    
                    <option type="text" >2019</option>
                    <option type="text">2020</option>
                    <option type="text">2021</option>
                     <option type="text">2022</option>                     
            </select>
        </div>
    )
}


export default FilterDateComponent;