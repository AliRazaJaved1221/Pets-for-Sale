import React, { useState, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RxUpdate } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function AdminUsers() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileContact, setMobileContact] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [userCount, setUserCount] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/count`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const count = await response.json();
        setUserCount(count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };
  
    fetchUserCount();
  }, []);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchInfo();
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/api/users/delete/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if (res.ok) {
        toast.success("User Deleted successfully", {
          onClose: () => navigate('/AdminUsers'),
        });
        setData((prevData) => prevData.filter(user => user.id !== id));
      } else {
        console.error('Error deleting User:', res.statusText);
      }
    })
    .catch((error) => console.error('Error deleting User:', error));
  };

  const openUpdateModal = (user) => {
    setSelectedUser(user);
    setUsername(user.username);
    setEmail(user.email);
    setMobileContact(user.mobileContact);
    setLocation(user.location);
    setPassword(user.password);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setUsername("");
    setEmail("");
    setMobileContact("");
    setLocation("");
    setPassword("");
  };

  const handleUpdate = () => {
    const updatedData = { username, email, mobileContact, location, password };

    fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to update user. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      toast.success("User updated successfully");
      closeUpdateModal();
      setData((prevData) =>
        prevData.map((user) => (user.id === selectedUser.id ? data : user))
      );
    })
    .catch((error) => {
      console.error('Error updating User:', error);
      toast.error("Error updating user");
    });
  };

  const openModalWithDetails = (user) => {
    setSelectedUser(user);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className='row'>
        <div className='col-lg-3' style={{ position: 'fixed' }}>
          <div className='side_bar'>
            <div>
              <Link to='/'><img src='./logo-white.png' style={{ height: '10rem', width: '15rem', marginLeft: '4rem' }} alt='Logo' /></Link>
            </div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to='/'><IoHomeOutline style={{ marginRight: '1rem' }} />Home</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminDashboard"><AiOutlineDashboard style={{ marginRight: '1rem' }} />Dashboard</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminUsers"><FaRegUser style={{ marginRight: '1rem' }} />Users</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminPets"><MdOutlinePets style={{ marginRight: '1rem' }} />Pets</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminReviews"><MdOutlineRateReview style={{marginRight:'1rem'}}/>Reviews</Link></div>
            <div className='line1'><hr /></div>
            <div style={{ marginTop: '8rem' }} className='line1'><hr /></div>
            <div style={{ marginRight: '2rem', marginLeft: '2rem' }} className="dropdown">
              <Link className="btn dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>Admin</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/"><IoSettingsOutline style={{ marginRight: '0.5rem' }} />Settings</Link></li>
                <li><Link className="dropdown-item" to="/UserInfo"><FaRegUserCircle style={{ marginRight: '0.5rem' }} />Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/"><IoLogOutOutline style={{ marginRight: '0.5rem' }} />Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-9' style={{ marginLeft: '24%' }}>
          <div style={{ marginTop: '5rem' }}>
            <input type='text' name='search' className='search-bar2' placeholder='Search ' />
            <Link style={{ marginLeft: '15rem' }} to='/admindashboard'><IoIosNotificationsOutline style={{ fontSize: '1.5rem', color: 'black' }} /></Link>
            <Link to='/' style={{ color: 'black', textDecoration: 'none', marginLeft: '5rem' }}><IoLogOutOutline style={{ marginRight: '0.5rem' }} />
              Logout
            </Link>
            <hr style={{ marginTop: '3rem' }} />
          </div>
          <div style={{marginLeft:'2rem'}}>
            <h3>Registered Users</h3>
            <div style={{ height: 'auto', overflowY: 'auto', marginBottom:'3rem'}}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Password</th>
                    <th scope='col'>User Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {data && Array.isArray(data) && data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.mobileContact}</td>
                      <td>{item.password}</td>
                      <td>
                        <button className='dlt_icon' onClick={() => deleteUser(item.id)}><MdDelete /></button>
                        <button className="dlt_icon2" onClick={() => openUpdateModal(item)}><RxUpdate /></button>
                        <button className="dlt_icon3" onClick={() => openModalWithDetails(item)}><IoEyeOutline /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{marginLeft:'2rem'}}>
          <h4>No. of Registered Users: {userCount}</h4>
            <div style={{ overflowY: 'auto' }}>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{backgroundColor:'#0758d3',color: 'white'}}>
                <h5 className="modal-title">Update User</h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Contact</label>
                  <input type="text" className="form-control" value={mobileContact} onChange={(e) => setMobileContact(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="modal-footer" style={{backgroundColor:'#0758d3'}}>
                <button type="button" className="btn btn-secondary" onClick={closeUpdateModal}>Close</button>
                <button type="button" style={{border:'2px solid white'}} className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Details Modal */}
      {isDetailsModalOpen && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div style={{backgroundColor:'#0758d3', color:'white'}} className="modal-header">
                <h5 className="modal-title" >User Details</h5>
              </div>
              <div className="modal-body">
                <p><strong>Username: </strong>{selectedUser?.username}</p>
                <p><strong>Email: </strong>{selectedUser?.email}</p>
                <p><strong>Mobile Contact: </strong>{selectedUser?.mobileContact}</p>
                <p><strong>Location: </strong>{selectedUser?.location}</p>
                <p><strong>Password: </strong>{selectedUser?.password}</p>
              </div>
              <div className="modal-footer"  style={{backgroundColor:'#0758d3'}}>
                <button type="button" className="btn btn-secondary" onClick={closeDetailsModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
