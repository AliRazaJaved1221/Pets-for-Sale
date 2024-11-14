import React , {useState, useEffect}from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function AdminPets() {
  const [data, setData] = useState(0);

  useEffect(() => {
      const fetchInfo = () => {
          return fetch(`http://localhost:5000/api/pets/get`)
              .then((res) => res.json())
              .then((d) => setData(d))
      }
      fetchInfo();
  }, [])

  return (
    <div>
<div className='row'>
        <div className='col-lg-3 col-md-12 col-sm-12' style={{position:'fixed'}}>
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
            <div><Link className='admin_links' to="/AdminReviews"><MdOutlineRateReview style={{marginRight:'1rem'}}/>Reviews</Link></div>
            <div className='line1'><hr/></div>
            <div style={{marginTop:'8rem'}} className='line1'><hr/></div>
            <div style={{marginRight:'2rem', marginLeft:'2rem'}} className="dropdown">
              <Link className="btn dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>Admin</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/"><IoSettingsOutline style={{marginRight:'0.5rem'}}/>Settings</Link></li>
                <li><Link className="dropdown-item" to="/UserInfo"><FaRegUserCircle style={{marginRight:'0.5rem'}}/>Profile</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/"><IoLogOutOutline style={{marginRight:'0.5rem'}}/>Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-9 col-md-12 col-sm-12' style={{backgroundColor:'', marginLeft:'24%'}}>
          <div style={{ marginTop: '5rem' }}>
            <input type='text' name='search' className='search-bar2' placeholder='Search ' />
            <Link style={{marginLeft:'15rem'}} to='/admindashboard'><IoIosNotificationsOutline style={{fontSize:'1.5rem', color:'black'}}/></Link>
            <Link to='/' style={{color:'black', textDecoration:'none', marginLeft:'5rem'}}><IoLogOutOutline style={{marginRight:'0.5rem'}}/>
              Logout
            </Link>
            <hr style={{marginTop:'3rem'}}/>
          </div>
          <div style={{marginLeft:'2rem'}}>
            <h3>Pets</h3>
            <div style={{height: '60vh', overflowY: 'auto'}}>
            <div className='container'>
            <div className='row'>
            {data?.data?.map((item) =>
                <div className='col-lg-4 col-md-6 col-sm-6 mt-5' key={item.id}>
                <Link style={{textDecoration:'none'}} to={`/pet/${item.id}`} className='card pets-card_admin main-color'>
                 <img className='pets-card2_admin' src={item.image} alt='Pet' />
                  <h5 style={{ marginTop: '1rem' }}>Breed: {item.breed}</h5>
                  <p>Color: {item.color}</p>
                  <p>Age: {item.age}</p>
                   <p>Price: {item.price}</p>
                   <p style={{ width: '100%', height: '20px', overflow: 'hidden' }}>Description: {item.description}</p>
                 </Link>
                </div>
              )}
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
