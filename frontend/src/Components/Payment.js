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
        const { contact, delivery, city, firstName, address, paymentMethod } = formData;

        if (!contact || !delivery || !city || !firstName || !address || !paymentMethod) {
            toast.error('Please fill in all required fields.', {
                hideProgressBar: true,
            });
            return;
        }

        const purchaseData = {
            buyerFirstName: firstName,
            buyerLastName: formData.lastName || '',
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
            isSold: true,
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                        <Link to="/Home">
                            <img src="/logo-pets.png" style={{ height: '10rem', width: '13rem' }} alt="Logo" />
                        </Link>
                    </div>
                </div>
            </div>
            <form>
                <div className="container">
                    <div className="row">
                        {/* Form Section */}
                        <div className="col-lg-8">
                            <div style={{ marginLeft: '4rem' }}>
                                <h4>Contact</h4>
                                <input
                                    type="text"
                                    className="search-bar3"
                                    name="contact"
                                    placeholder="Email or Mobile Phone Number"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                />
                                <h4 style={{ marginTop: '1rem' }}>Delivery</h4>
                                <div className="ship_radio">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="Ship"
                                        onChange={handleInputChange}
                                    />
                                    <span className="shipping">Ship</span>
                                    <MdLocalShipping style={{ fontSize: '1.5rem', float: 'right' }} />
                                </div>
                                <div className="ship_radio">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="PickUp"
                                        onChange={handleInputChange}
                                    />
                                    <span className="shipping">PickUp in store</span>
                                    <FaStore style={{ fontSize: '1.5rem', float: 'right' }} />
                                </div>
                                <input
                                    type="text"
                                    className="search-bar3"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                                <div className="row">
                                    <div className="col-lg-5">
                                        <input
                                            type="text"
                                            className="search-bar4"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-lg-5">
                                        <input
                                            type="text"
                                            className="search-bar4"
                                            name="lastName"
                                            placeholder="Last Name (Optional)"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    className="search-bar3"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    className="search-bar3"
                                    placeholder="Apartment, suite, etc. (optional)"
                                />
                                <h4 style={{ marginTop: '1rem' }}>Payment</h4>
                                <div style={{ color: '#5e5d56' }}>All transactions are secure and encrypted.</div>
                                {['Card', 'COD', 'JazzCash', 'Easypaisa'].map((method) => (
                                    <div className="ship_radio" key={method}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value={method}
                                            onChange={handleInputChange}
                                        />
                                        <span className="shipping">{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Pet Details */}
                        <div className="col-lg-4">
                            <h4>Pet Details</h4>
                            <img src={pet.image} className="pet_detail3" alt="pet" />
                            <p>Breed: {pet.breed}</p>
                            <p>Color: {pet.color}</p>
                            <p>Age: {pet.age}</p>
                            <p>Price: {pet.price}</p>
                        </div>
                        <div className="col-lg-12 text-center">
                            <button
                                className="upload2 main-color"
                                type="button"
                                onClick={handleContinue}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
