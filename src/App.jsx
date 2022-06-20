import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'

function App() {
  let [users, setUsers] = useState()
  const URL = 'https://users-crud1.herokuapp.com/users/'

  const getData = () =>{
    axios.get(URL)
      .then(res => setUsers(res.data))
  }

  console.log(users)


  useEffect(()=>{
    getData()
  }, [])

  return (
    <div className="App">
      <header className='header'>
        <h1>USERS LIST</h1>
      </header>

      <div className="container">
        <div className='card-zone'>
           {
            users?.map(user=>(
            <UsersList
            key={user.id}
            user={user} 
            />))
            }
        </div>
      </div>

      <div className="downbar">
        Hola
      </div>
    </div>
  )
}

export default App
