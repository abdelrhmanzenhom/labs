import React, { useState } from 'react';
import './user.css'

const User=({addNewUser})=>{
const [inputData,setInputData] = useState({name:'', age:''});
let handleChange=(e)=>{
    console.log(e.target.value);
    setInputData({...inputData,[e.target.name]:e.target.value})
}
let submitData=(e)=>{
e.preventDefault();
console.log(inputData.name,inputData.age)
addNewUser(inputData.name,inputData.age)
setInputData({...inputData,name:'',age:''});
}
    
    return <div >
        
        <form onSubmit={submitData} className='formS'>
              <h1>Form</h1>
     <label htmlFor="NameI">name</label>
 <input id="NameI" type="text" name="name" value={inputData.name} onChange={handleChange} placeholder='your name'/>
 <label htmlFor="ageI">age</label>
    <input id='ageI' type="text" name='age' value={inputData.age} onChange={handleChange} placeholder='your age'/>
    <input type="submit" value='Add User'/>
        </form>
   
    </div>

}
export default User 