import React from 'react'
import { Link } from 'react-router-dom'

export default function PetsManage() {
  return (
<>
    <div className="col-lg-12 col-md-12 col-sm-12">
        <div className='colo'>
        <Link to='/Home'><img src='./logo-pets.png' className='update_logo' alt='Logo' /></Link>
        </div>
        <div className='colo'>
        <h2 className='userinfo'>Pets Management</h2>
        <h3>sds</h3>
        </div>
    </div>
</>
  )
}
