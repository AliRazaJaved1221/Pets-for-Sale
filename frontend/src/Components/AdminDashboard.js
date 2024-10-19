import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {

  const [data, setData] = useState(0);

    

  useEffect(() => {
      const fetchInfo = () => {
          return fetch(`http://localhost:5000/api/auth/signup`)
              .then((res) => res.json())
              .then((d) => setData(d))
      }
      fetchInfo();
  }, [])
  console.log(data);

  return (
    <>
      <div className='row'>
        <div className='col-lg-3' style={{position:'fixed'}}>
          <div className='side_bar'>
            <div><Link to='/'><img src='./logo-white.png' style={{ height: '10rem', width: '15rem', marginLeft: '4rem' }} alt='Logo' /></Link></div>
            <div className='line1'><hr/></div>
            <div><Link className='admin_links' to='/'><IoHomeOutline style={{marginRight:'1rem'}}/>Home</Link></div>
            <div className='line1'><hr/></div>
            <div><Link className='admin_links' to="/AdminDashboard"><AiOutlineDashboard style={{marginRight:'1rem'}}/>Dashboard</Link></div>
            <div className='line1'><hr/></div>
            <div><Link className='admin_links' to="/AdminUsers"><FaRegUser style={{marginRight:'1rem'}}/>Users</Link></div>
            <div className='line1'><hr/></div>
            <div><Link className='admin_links' to="/AdminPets"><MdOutlinePets style={{marginRight:'1rem'}}/>Pets</Link></div>
            <div className='line1'><hr/></div>
            <div><Link className='admin_links' to="/"><TbReportSearch style={{marginRight:'1rem'}}/>Report</Link></div>
            <div className='line1'><hr/></div>
            <div style={{marginTop:'8rem'}} className='line1'><hr/></div>
            <div style={{marginRight:'2rem', marginLeft:'2rem'}} className="dropdown">
              <Link className="btn dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>Admin</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/"><IoSettingsOutline style={{marginRight:'0.5rem'}}/>Settings</Link></li>
                <li><Link className="dropdown-item" to="UserInfo"><FaRegUserCircle style={{marginRight:'0.5rem'}}/>Profile</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/Home"><IoLogOutOutline style={{marginRight:'0.5rem'}}/>Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-9' style={{backgroundColor:'', marginLeft:'24%'}}>
          <div style={{ marginTop: '5rem' }}>
            <input type='text' name='search' className='search-bar2' placeholder='Search ' />
            <Link style={{marginLeft:'15rem'}} to='/admindashboard'><IoIosNotificationsOutline style={{fontSize:'1.5rem', color:'black'}}/></Link>
            <Link to='/' style={{color:'black', textDecoration:'none', marginLeft:'5rem'}}><IoLogOutOutline style={{marginRight:'0.5rem'}}/>
              Logout
            </Link>
            <hr style={{marginTop:'3rem'}}/>
          </div>
          <div className='row'>
          <div class="col-lg-6">
            <div className='card dcards'>
            <Link to='/adminusers' style={{textDecoration:'none'}}>
            <div class="card-body">
               <h3 style={{textAlign:"center", marginTop:'2rem'}}>Users</h3>
            </div>
            </Link>
            </div>
            </div>
            <div class="col-lg-6">
                <div className='card dcards'>
                <Link to='/adminpets' style={{textDecoration:'none'}}>
            <div class="card-body">
                <h3 style={{textAlign:"center", marginTop:'2rem'}}>Pets</h3>
            </div>
            </Link>
            </div>
        </div>
        </div>
        <div className='row'>
          <div class="col-lg-6">
            <div className='card dcards'>
            <div class="card-body">
                <h3 style={{textAlign:"center", marginTop:'2rem'}}>Complaints</h3>
            </div>
            </div>
            </div>
            <div class="col-lg-6">
                <div className='card dcards'>
            <div class="card-body">
                <h3 style={{textAlign:"center", marginTop:'2rem'}}>Reports</h3>
            </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
