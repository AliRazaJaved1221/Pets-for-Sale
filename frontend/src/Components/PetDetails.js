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
    console.log("id:::", id)

    // Check if the logged-in user is an admin
    const isAdmin =JSON.parse(localStorage.getItem('user')).role === 1;  

    
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
        navigate('/Payment', { state: { pet: data } });
    };

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <ToastContainer />
            <div className='container'>
                <div className='row'>
                    <div className='container-fluid' style={{ marginTop: '-1rem' }}>
                        <div className="custom1">
                            <Link to='/Home'><img src='/logo-pets.png' style={{ height: '10rem', width: '15rem', marginTop: '1rem' }} alt='Logo' /></Link>
                        </div>
                        <div className='custom2' style={{ marginTop: '4.7rem' }}>
                            <input type='text' name='search' className='search-bar' placeholder='Search ' />
                        </div>
                        <div className='custom3' style={{ marginTop: '4.7rem' }}>
                            {isLoggedIn ? (
                                <button className='log-but1' onClick={handleLogout}><FaSignOutAlt style={{ fontSize: '1.3rem' }} /> Logout</button>
                            ) : (
                                <>
                                    <span><Link className='log-sign3' to='/LoginForm'><FaUser style={{ fontSize: '1.3rem' }} /> Login</Link></span>
                                    <span style={{ marginLeft: '2rem', fontWeight: 'bold' }}>|</span>
                                    <span><Link className='log-sign3' to='/SignUpForm'><FaUserPlus style={{ fontSize: '1.5rem' }} /> SignUp</Link></span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className='container row mt-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='pic1'>
                        <div className='colo1'>
                            <div className='pet_detail'>
                                <img src={data.image} alt='pet' />
                            </div>
                        </div>
                        <div className='colo2'>
                            {isLoggedIn ? (
                                <Link
                                    to={{
                                        pathname: `/Review/${id}`,
                                        state: { petId: '', userId: localStorage.getItem('userId') }
                                    }}
                                    className='review-link'
                                >
                                    Review here
                                </Link>
                            ) : (
                                <p className="login-reminder">Please log in to submit a review.</p>
                            )}
                        </div>
                    </div>

                    <div className='pic2' style={{ marginTop: '-2rem' }}>
                        <h4 className=''>{data.breed}</h4>
                        <div className='row'>
                            <div className='pic1'>
                                <h6 className='pet-pricing'>Price: {data.price}</h6>
                                <h6 className='pet-pricing'>Owner Name: {data.uploaderName}</h6>
                                <h6 className='pet-pricing'>Contact No: {data.uploaderMobileContact}</h6>
                                <h6 className='pet-pricing'>Location: {data.UploaderLocation}</h6>
                            </div>

                            <div className='pic2' style={{ marginTop: '3rem' }}>
                                <h6 className='pet-pricing'>Color: {data.color}</h6>
                                <h6 className='pet-pricing'>Age: {data.age}</h6>
                                <h6 className='pet-pricing'>Owner Email: <a href={`mailto:${data.uploaderEmail}`} style={{ textDecoration: 'none' }}>{data.uploaderEmail}</a></h6>
                            </div>
                        </div>
                        <p className='pet-pricing2'>{data.description}</p>
                    </div>

                    <div className='col-lg-12 colo2' style={{ marginTop: '1rem' }}>
                        <button className='upload2 main-color' type='submit' onClick={handleBuyNow}>Buy Now</button>
                        { isAdmin && (
                            <button className='delete_pet' onClick={deletePet}>Delete</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
