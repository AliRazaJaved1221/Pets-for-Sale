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
import { Link } from 'react-router-dom';
import { TbReportSearch } from "react-icons/tb";

export default function AdminReviews() {
  const [data, setData] = useState([]);

  // Fetch reviews data
  useEffect(() => {
    const fetchInfo = () => {
      fetch(`http://localhost:5000/api/reviews`)
        .then((res) => res.json())
        .then((d) => setData(d));
    };
    fetchInfo();
  }, []);

  // Handle review deletion
  const deleteReview = (reviewId) => {
    fetch(`http://localhost:5000/api/reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          // Remove the deleted review from the state
          setData(data.filter(review => review.id !== reviewId));
        } else {
          alert('Failed to delete review');
        }
      })
      .catch((error) => alert('Error deleting review:', error));
  };

  return (
    <div>
      <div className='row'>
        {/* Sidebar */}
        <div className='col-lg-3 col-md-12 col-sm-12' style={{ position: 'fixed' }}>
          <div className='side_bar'>
            <div><Link to='/'><img src='./logo-white.png' style={{ height: '10rem', width: '15rem', marginLeft: '4rem' }} alt='Logo' /></Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to='/'><IoHomeOutline style={{ marginRight: '1rem' }} />Home</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminDashboard"><AiOutlineDashboard style={{ marginRight: '1rem' }} />Dashboard</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminUsers"><FaRegUser style={{ marginRight: '1rem' }} />Users</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminPets"><MdOutlinePets style={{ marginRight: '1rem' }} />Pets</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className='admin_links' to="/AdminReviews"><MdOutlineRateReview style={{ marginRight: '1rem' }} />Reviews</Link></div>
            <div className='line1'><hr /></div>
            <div><Link className="admin_links" to="/AdminPurchase"><TbReportSearch style={{ marginRight: "1rem" }} />Report</Link></div>
            <div style={{ marginTop: '5rem' }} className='line1'><hr /></div>
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

        {/* Main Content */}
        <div className='col-lg-9 col-md-12 col-sm-12' style={{ marginLeft: '24%' }}>
          <div style={{ marginTop: '5rem' }}>
            <input type='text' name='search' className='search-bar2' placeholder='Search ' />
            <Link style={{ marginLeft: '15rem' }} to='/admindashboard'><IoIosNotificationsOutline style={{ fontSize: '1.5rem', color: 'black' }} /></Link>
            <Link to='/' style={{ color: 'black', textDecoration: 'none', marginLeft: '5rem' }}><IoLogOutOutline style={{ marginRight: '0.5rem' }} />
              Logout
            </Link>
            <hr style={{ marginTop: '3rem', marginBottom:'2rem' }} />
          </div>

          <div style={{ marginLeft: '2rem' }}>
            {data.length > 0 ? (
              data.map((review) => (
                <div key={review.id} style={{ marginBottom: '2rem' }}>
                <div className='App'>
                <h4>Review for Pet: {review.pet.breed}</h4>
                </div>
                <div style={{marginTop:'2rem'}} className='row App'>
                    <div className='col-4'>
                    <h4>Reviewer Information</h4>
                    <p><strong>Reviewer:</strong> {review.user.username}</p>
                    <p><strong>Review:</strong> {review.feedback}</p>
                    <p><strong>Email:</strong> {review.user.email}</p>
                    </div>
                    <div className='col-4'>
                    <h4>Pet Information</h4>
                    <img src={review.pet.image} alt={review.pet.breed} style={{width:'97px', height:'94px', borderRadius:'4rem'}} />
                    <p><strong>Breed:</strong> {review.pet.breed}</p>
                    <p><strong>Color:</strong> {review.pet.color}</p>
                    <p><strong>Price:</strong> ${review.pet.price}</p>
                    <p><strong>Description:</strong> {review.pet.description}</p>
                    </div>
                    <div className='col-4'>
                    <h4>Pet Owner Information</h4>
                    <p><strong>Name:</strong> {review.pet.uploaderName}</p>
                    <p><strong>Email:</strong> {review.pet.uploaderEmail}</p>
                    <p><strong>Contact:</strong> {review.pet.uploaderMobileContact}</p>
                    <p><strong>Location:</strong> {review.pet.UploaderLocation}</p>
                    </div>
                </div>
                  
                  {review.pet.uploaderName ? (
                    <div>

                    </div>
                  ) : (
                    <p><strong>Pet Owner Information is not available.</strong></p>
                  )}
                  <div style={{display: 'flex', alignItems:' center',justifyContent:"center"}} className='col-12'>
                  <button onClick={() => deleteReview(review.id)} className='review_dlt'>
                    Delete Review
                  </button>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>No reviews found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
