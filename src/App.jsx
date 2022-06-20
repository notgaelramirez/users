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

  const addUser = () =>{

    let newUser = {
      email: 'ga12@gmail.com',
      password: 'password',
      first_name: 'Gael',
      last_name: 'Ramirez',
    }

    axios.post(URL, newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

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
        <div className='add-user'>Agregar un usuario</div>
        <div className="form">
          <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido' />
            <input type="text" placeholder='Email' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
