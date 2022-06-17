import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'

function App() {
  const [data, setData] = useState()
  const URL = 'https://users-crud1.herokuapp.com/users/'


  const getLength = () =>{
    axios.get(URL)
    .then(res=>setData(res.data))
  }

  console.log(data)
  console.log(data?.length)

  const random = () =>{
  
    let randn = Math.round(Math.random() * data?.length)
    console.log( 'ran' + randn)
  }


  useEffect(()=>{
    getLength()
    random()
  }, [])

  return (
    <div className="App">
      <header className='header'>
        <h1>USERS LIST</h1>
      </header>

      <article>
       
      </article>
    </div>
  )
}

export default App
