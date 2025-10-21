import React, { use, useState } from 'react';
import User from './user.jsx'
import Table from './table.jsx';
const Root=()=>{
const [usersList,setInputData] = useState([]);

const addNewUser=(name,age)=>{
    usersList.push({
        name,age
    })
    setInputData([...usersList])

console.log(usersList)
}

    return (<div>
        <User addNewUser={addNewUser}></User>
        <Table usersList={usersList}></Table>
    </div>)
}
export default Root;