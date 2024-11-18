import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdLocalShipping } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Payment() {
    const { state } = useLocation();
    const pet = state?.pet;

    const [formData, setFormData] = useState({
        contact: '',
        delivery: '',
        city: '',
        firstName: '',
        lastName: '',
        address: '',
        paymentMethod: ''
    });

    if (!pet) return <div>No pet data available. Please go back and select a pet.</div>;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContinue = async () => {
        const { contact, delivery, city, firstName, lastName, address, paymentMethod } = formData;

        if (!contact || !delivery || !city || !firstName || !address || !paymentMethod) {
            toast.error('Please fill in all required fields.', {
                hideProgressBar: true,
            });
            return;
        }

        const purchaseData = {
            buyerFirstName: firstName,
            buyerLastName: lastName || '',
            buyerEmail: contact, 
            contact,
            delivery,
            city,
            address,
            paymentMethod,
            petName: pet.breed,
            petBreed: pet.breed,
            petColor: pet.color,
            petAge: pet.age,
            petPrice: pet.price,
            petDescription: pet.description,
            petOwnerName: pet.uploaderName,
            petOwnerMobile: pet.uploaderMobileContact,
            petOwnerEmail: pet.uploaderEmail,
            petOwnerLocation: pet.UploaderLocation,
            petImage: pet.image,
            
            isSold: pet.true,
        };

        try {
            const response = await fetch('http://localhost:5000/api/purchase/buy-now', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseData),
            });

            if (response.ok) {
                toast.success('Your order was placed! Seller will contact you soon. Thank you for your purchase.', {
                    hideProgressBar: false,
                });
            } else {
                toast.error('Failed to place order. Please try again.', {
                    hideProgressBar: true,
                });
            }
        } catch (error) {
            console.error('Error placing order:', error);
            toast.error('An error occurred. Please try again.', {
                hideProgressBar: true,
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <Link to='/Home'><img src='/logo-pets.png' style={{ height: '10rem', width: '13rem' }} alt='Logo' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div style={{ marginLeft: '4rem' }}>
                                <h4>Contact</h4>
                                <input
                                    type='text'
                                    className='search-bar3'
                                    name='contact'
                                    placeholder='Email or Mobile Phone Number'
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    required
                                />
                                <h4 style={{ marginTop: '1rem' }}>Delivery</h4>
                                <div className='ship_radio'>
                                    <input
                                        type='radio'
                                        name='delivery'
                                        value='Ship'
                                        onChange={handleInputChange}
                                        required
                                    /><span className='shipping'>Ship</span>
                                    <span style={{ fontSize: '1.5rem', float: 'right' }}><MdLocalShipping /></span>
                                </div>
                                <div className='ship_radio'>
                                    <input
                                        type='radio'
                                        name='delivery'
                                        value='PickUp'
                                        onChange={handleInputChange}
                                    /><span className='shipping'>PickUp in store</span>
                                    <span style={{ fontSize: '1.5rem', float: 'right' }}><FaStore /></span>
                                </div>
                                <input
                                    type='text'
                                    className='search-bar3'
                                    name='city'
                                    placeholder='City'
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        <input
                                            type='text'
                                            className='search-bar4'
                                            name='firstName'
                                            placeholder='First Name'
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className='col-lg-5'>
                                        <input
                                            type='text'
                                            className='search-bar4'
                                            name='lastName'
                                            placeholder='Last Name (Optional)'
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='col-lg-2'></div>
                                </div>
                                <input
                                    type='text'
                                    className='search-bar3'
                                    name='address'
                                    placeholder='Address'
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input type='text' className='search-bar3' placeholder='Apartment, suite, etc. (optional)' />

                                <h4 style={{ marginTop: '1rem' }}>Payment</h4>
                                <div style={{ color: '#5e5d56' }}>All transactions are secure and encrypted.</div>
                                <div className='ship_radio'>
                                    <input
                                        type='radio'
                                        name='paymentMethod'
                                        value='Card'
                                        onChange={handleInputChange}
                                        required
                                    /><span className='shipping'>Debit - Credit Card</span>
                                    <img src='card.jpeg' style={{ width: '2rem', float: 'right', marginBottom: '1rem' }} alt='Cards' />
                                </div>
                                <div className='ship_radio'>
                                    <input type='radio' name='paymentMethod' value='COD' onChange={handleInputChange} /><span className='shipping'>Cash on Delivery (COD)</span>
                                    <img src='cash-rupee.jpg' style={{ width: '2rem', float: 'right', marginBottom: '1rem' }} alt='Cash' />
                                </div>
                                <div className='ship_radio'>
                                    <input type='radio' name='paymentMethod' value='JazzCash' onChange={handleInputChange} /><span className='shipping'>Jazz Cash</span>
                                    <img src='jazzcash.png' style={{ width: '2rem', float: 'right', marginBottom: '1rem' }} alt='JazzCash' />
                                </div>
                                <div className='ship_radio'>
                                    <input type='radio' name='paymentMethod' value='Easypaisa' onChange={handleInputChange} /><span className='shipping'>Easypaisa</span>
                                    <img src='easypaisa.jpg' style={{ width: '2rem', float: 'right', marginBottom: '1rem' }} alt='Easypaisa' />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <h4>Pet Details</h4>
                            <div className='container row mt-5'>
                                <div className='col-lg-12 mt-5'>
                                    <img src={pet.image} className='pet_detail3' alt='pet' />
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 mt-5'>
                                        <h6 className='pet-pricing'>Breed: {pet.breed}</h6>
                                        <h6 className='pet-pricing'>Color: {pet.color}</h6>
                                        <h6 className='pet-pricing'>Age: {pet.age}</h6>
                                        <h6 className='pet-pricing'>Price: {pet.price}</h6>
                                        <h6 className='pet-pricing'>Description:</h6>
                                        <p className='pet-pricing2'>{pet.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12' style={{ textAlign: 'center' }}>
                            <button className='upload2 main-color' type='button' onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
