import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import UsersList from './components/UsersList'

function App() {
  let [users, setUsers] = useState()
  const URL = 'https://users-crud1.herokuapp.com/users/'

  const getData = () =>{
    axios.get(URL)
      .then(res => setUsers(res.data))
  }

  const submit = data =>{

    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getData())
  }

  const {handleSubmit, register} = useForm()

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
          <form onSubmit={handleSubmit(submit)} action="">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' {...register('first_name')} />
            
            <label htmlFor="lastName">Lastname</label>
            <input type="text" id='lastName' {...register('last_name')}/>

            <label htmlFor="email">Email</label>
            <input type="text" id='email' {...register('email')}/>

            <label htmlFor="bday">Birthday</label>
            <input type="date" id='bday' {...register('birthday')}/>

            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register('password')}/>

            <button className='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div> 
  )
}

export default App
