import './App.css';
import { createContext, useState } from 'react';
import ValueSpaceCom from './component/valueSpaceCom';
import Login from './component/login';
// CRUD
export const createContextAPI = createContext()

function App() {
  // const ListPoint = useContext()
    const [login,setLogIn ] = useState(false)
    const [textValue, setTextValue] = useState('CLick Me')

  function createFunc() {
    console.log("ListPoint")
     
  }
  return (
    <div className='container'>  
      <Login />
      <createContextAPI.Provider value={[textValue, setTextValue]}>
        <div className='box'>
          <input 
          value={textValue} 
          onInput={(e)=>setTextValue(e.target.value)}
          className='inputBox spaceBox'
          />
          <div 
          className='btn' 
          onClick={()=>createFunc()}>
          Create
          </div>
        </div>
        <ValueSpaceCom/>
      </createContextAPI.Provider>
      <h1 className='btn'>[login]</h1>
    </div>
  );
}

export default App;
