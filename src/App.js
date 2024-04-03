import './App.css';
import { createContext, useState } from 'react';
import Lists from './component/lists';
import Login from './component/login';
// CRUD
export const createContextAPI = createContext()
export const loginContextAPI = createContext()

function App() {
  // const ListPoint = useContext()
    const [login,setLogIn ] = useState(false)
    const [textValue, setTextValue] = useState([])

  function createFunc(props) {
    console.log(textValue)  
  }
  return (
    <div className='container'>  
    <loginContextAPI.Provider value={[login,setLogIn]}>
      <Login />
    </loginContextAPI.Provider>
      {login && 
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
        <Lists/>
        <h1 className='btn loginBtn'>[login]</h1>
      </createContextAPI.Provider>
      }
      
    </div>
  );
}

export default App;
