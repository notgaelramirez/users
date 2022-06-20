import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
//=============================

const UsersList = ({user, getData}) => {

  const deleteUser = () =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getData())
  }


  const editUser = () =>{

    let userUpdate = {
      email:'prueba2@gmail.com',
      password:'password',
      first_name: 'Hectora',
      last_name: 'Chaparro',

    }

    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, userUpdate)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(()=> getData())
  }

  

  return (
    <div className='user-card'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className='data'>
        <div className='user-name'><b>{user?.first_name} {user?.last_name}</b></div>
        <div className='email'><small>{user?.email}</small></div>
        <div className='birthday'>{user?.birthday} <span className="material-symbols-outlined">cake</span></div>
      </div>

      <aside className='crud'>
        <button onClick={deleteUser} className='delete'><span className="material-symbols-outlined">delete</span></button>
        <button onClick={editUser}><span className="material-symbols-outlined">edit</span></button>
      </aside>
    </div>
  )
}

export default UsersList  