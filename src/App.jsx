import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import UsersList from './components/UsersList'

function App() {
  let [users, setUsers] = useState()
  const URL = 'https://users-crud1.herokuapp.com/users/'
  const {handleSubmit, register} = useForm()
  
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


  const updateUser = newData =>{

    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, newData)
      .then(res => console.log(res.data))
      .catch( err => console.log(err))
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
        <div className="edit-zone">
          <form onSubmit={updateUser} action="">
            <div>
              <label htmlFor="first_name">Name</label>
              <input type="text" id='first_name' {...register('first_name')}/>
              <label htmlFor="last_name">Lastname</label>
              <input type="text" id='last_name' {...register('last_name')}/>
            </div>

            <div>
              <label htmlFor="email-edit">Email</label>
              <input type="text" id='email-edit' {...register('email')} />
            </div>

            <div>
              <label htmlFor="password-edit">Password</label>
              <input type="password" id='password-edit' {...register('password')} />
            </div>

            <div>
              <label htmlFor="bday-edit">Birthday</label>
              <input type="date" id='bday-edit' {...register('birthday')} />
            </div>

            <div>
              <button className='btn-edit'>Submit changes</button>
            </div>
          </form>
        </div>

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
