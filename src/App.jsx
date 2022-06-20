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

  const addUser = () =>{

    let newUser = {
      email: 'prueba1@gmail.com',
      password: 'password',
      first_name: 'Hector',
      last_name: 'Cruz',
    }

    axios.post(URL, newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getData())
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
            getData ={getData}
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
        <button onClick={addUser}>Click</button>
      </div>
    </div> 
  )
}

export default App
