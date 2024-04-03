import React, { useContext, useState } from 'react'
import { loginContextAPI } from '../App'

function Login() {
    const [dataTransfer,setDataTransfer] = useState({userName:'',password:'',email:''})
    const [login,setLogIn] = useContext(loginContextAPI)

  return (
    <>
    
    {!login && 
      <div 
      className='modal'
      >
      <div>User Name</div>
      <input
      className='inputBox'
      value={dataTransfer.userName}
      onInput={(value) => setDataTransfer({ ...dataTransfer, userName: value.target.value })} />
      <div>User Password</div>
      <input
      className='inputBox'
      value={dataTransfer.password}
      onInput={(value) => setDataTransfer({ ...dataTransfer, password: value.target.value })} />
      <div>User Email</div>
      <input
      className='inputBox'
      value={dataTransfer.email}
      onInput={(value) => setDataTransfer({ ...dataTransfer, email: value.target.value })} />
      <br />
      <input type='submit' onClick={() => setLogIn(true)} className='btn' />
      </div>
    }      
    </>
  )
}

export default Login
