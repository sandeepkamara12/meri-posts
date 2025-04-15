import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminSidebar from '../../components/admin/AdminSidebar'

const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <AdminHeader />
      <AdminSidebar />
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout
