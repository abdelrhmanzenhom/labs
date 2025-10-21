import { memo } from "react";

import userStle from '../Styles/User.module.css'

// function User({id, name, age}) {
function User(props) {
  // console.log(props)

  let {id, name, age, incrAgeFun, decrAgeFun, deleteUserFun} = props

  const handelIncrAge = ()=> {
    // age++;
    incrAgeFun(id)
  }
  const handelDecrAge = ()=> {
    // age++;
    decrAgeFun(id)
  }

  const handelDelete =()=> {
   deleteUserFun(id) 
  }

  return (
    <>
      <div style={{width:'70%', margin:"5px auto", padding:'10px',  backgroundColor:"dodgerblue", color:'white', fontSize:"17px", borderRadius:'8px', textAlign:"center"}}>
        <h1 className="alert alert-danger">hello bootstrap</h1>
        <div>Id: {id}</div>
        <div>Name: {name}</div>
        <div>age: {age}</div>
        {/* <h2>{props.children}</h2> */}

        <button style={Styles.btnStyle} onClick={handelIncrAge}>Incr Age</button>
        <button style={Styles.btnStyle} onClick={handelDecrAge}>Decr Age</button>
        {/* <button style={{...Styles.btnStyle, backgroundColor:'crimson'}} onClick={handelDelete}>Delete</button> */}
        <button className={userStle.btn} onClick={handelDelete}>Delete</button>
      </div>
    </>
  );
}

export default memo(User)


let Styles = {
  btnStyle:{border:"none", backgroundColor:"orange", color:"white", padding:"10px 15px", borderRadius:"10px", margin:"5px 10px", fontSize:"18px", cursor:"pointer" }
}