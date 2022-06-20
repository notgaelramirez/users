import React from 'react'
//=============================

const UsersList = ({user}) => {

  return (
    <div className='user-card'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className='data'>
        <div className='user-name'><b>{user?.first_name} {user?.last_name}</b></div>
        <div className='email'><small>{user?.email}</small></div>
        <div className='birthday'>{user?.birthday} <span className="material-symbols-outlined">cake</span></div>
      </div>

      <aside className='crud'>
        <button className='delete'><span className="material-symbols-outlined">delete</span></button>
        <button><span className="material-symbols-outlined">edit</span></button>
      </aside>
    </div>
  )
}

export default UsersList  