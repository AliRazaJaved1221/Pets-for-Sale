import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaUser, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PetDetails() {
    const [data, setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'));

        const fetchInfo = () => {
            return fetch(`http://localhost:5000/api/pets/${id}`)
                .then((res) => res.json())
                .then((d) => setData(d))
                .catch((error) => console.error('Error fetching pet details:', error));
        };
        fetchInfo();
    }, [id]);

    const deletePet = () => {
        if (!isLoggedIn) {
            toast.error("You need to be logged in to delete a pet.");
            return;
        }

        fetch(`http://localhost:5000/api/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((res) => {
            if (res.ok) {
                toast.success("Pet deleted successfully", {
                    onClose: () => navigate('/Home'),
                });
            } else {
                console.error('Error deleting pet:', res.statusText);
                toast.error("Error deleting pet.");
            }
        })
        .catch((error) => {
            console.error('Error deleting pet:', error);
            toast.error("Error deleting pet.");
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/Home');
    };

    const handleBuyNow = () => {
        if (!isLoggedIn) {
            toast.error("You need to be logged in to buy a pet.");
            return;
        }
        // Navigate to the Payment page and pass the pet data
        navigate('/Payment', { state: { pet: data } });
    };

    if (!data) return <div>Loading...</div>;

    return (
    <div>
    <ToastContainer />
    <div className='container'>
    <div className='container-fluid'>
    <div className="custom1">
        <Link to='/Home'><img src='/logo-pets.png' style={{ height: '10rem', width: '15rem', marginTop: '1rem' }} alt='Logo' /></Link>
    </div>
    <div className='custom2' style={{ marginTop: '4.7rem' }}>
        <input type='text' name='search' className='search-bar' placeholder='Search ' />
   </div>
    <div className='custom3' style={{ marginTop: '4.7rem' }}>
    {isLoggedIn ? (
     <>
    <span><button className='log-but1' onClick={handleLogout}><FaSignOutAlt style={{ fontSize: '1.3rem' }} /> Logout</button></span>
      </>
      ) : (
       <>
    <span><Link className='log-sign3' to='/LoginForm'><FaUser style={{ fontSize: '1.3rem' }} /> Login</Link></span>
    <span style={{ marginLeft: '2rem', fontWeight: 'bold' }}>|</span>
    <span><Link className='log-sign3' to='/SignUpForm'><FaUserPlus style={{ fontSize: '1.5rem' }} /> SignUp</Link></span>
    </>
        )}
    </div>
    </div>

    <div className='container row mt-5'>
    <div className='col-lg-6 mt-4'>
    <div className='colo'>
        <img src={data.image} className='pet_detail' alt='pet' />
    </div>
    <div className='colo'>
        {isLoggedIn ? (
            <Link to={{
    pathname: '/Review',
    state: {
        userId: localStorage.getItem('userId'),
        petId: id
    }
}} className='review-link'>
    Review here
</Link>
        ) : (
            <p className="login-reminder">Please log in to submit a review.</p>
        )}
    </div>
</div>

<div className='col-lg-6'>
  <h6 className='pet-pricing'>Type: {data.type}</h6>
  <h6 className='pet-pricing'>Breed: {data.breed}</h6>
  <h6 className='pet-pricing'>Color: {data.color}</h6>
  <h6 className='pet-pricing'>Age: {data.age}</h6>
  <h6 className='pet-pricing'>Price: {data.price}</h6>
  <h6 className='pet-pricing'>Uploaded by: {data.uploaderName} ({data.uploaderEmail})</h6>
  <h6 className='pet-pricing'>Description:</h6>
  <p className='pet-pricing2'>{data.description}</p>
</div>

</div>

<div className='col-lg-12 colo' style={{ textAlign: 'center' }}>
<button className='upload2 main-color' type='submit' onClick={handleBuyNow}>Buy Now</button>
{isLoggedIn && (
<button className='delete_pet' onClick={deletePet}>Delete</button>
   )}
</div>
</div>
</div>
);
}
