import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout
