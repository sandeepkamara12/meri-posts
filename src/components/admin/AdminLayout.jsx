import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <AdminHeader />
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout
