import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hook to update count value every where
  let [count, setCount] = useState(0)

   const increaseCounterValue = () =>{
    
    setCount(count + 1)

    }

   const decreaseCounterValue = () =>{
    if(count>0){
      setCount(count - 1)
    }
   

    }

  return (
    <>

     <h1>current value of counter {count}</h1>
     <h2>current value of counter {count}</h2>
     <h3>current value of counter {count}</h3>

    <div >
      <button onClick={increaseCounterValue}>Increase</button>
    </div>
    
     <br/>
    
    <div >
      <button onClick={decreaseCounterValue}>Decrease</button>
    </div>
     
    </>
  )
}

export default App
