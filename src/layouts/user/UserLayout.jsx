import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/common/Header'

const UserLayout = () => {
  console.log('objectaa')
  return (
    <>
      <Header />
      <div className="flex flex-wrap max-w-6xl mx-auto px-4 sm:px-6 ">
        <Outlet></Outlet>
        {/* <Footer />  */}
      </div>
    </>
  )
}

export default UserLayout
