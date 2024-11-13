import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PetDetails() {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);

    const user = JSON.parse(localStorage.getItem("user")) || {};
    const userId = user.id || ""; 

    useEffect(() => {
        const fetchUserPets = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("User not logged in.");
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/api/pets/by-user/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) throw new Error('Failed to fetch user pets');

                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error("Error fetching user pets:", error);
            }
        };

        fetchUserPets();
    }, [userId]);

    const deletePet = (petId) => {
      

        fetch(`http://localhost:5000/api/pets/${petId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((res) => {
            if (res.ok) {
                setData(data.filter((pet) => pet.id !== petId));  
                toast.success("Pet deleted successfully");
            } else {
                toast.error("Error deleting pet.");
            }
        })
        .catch((error) => {
            console.error('Error deleting pet:', error);
            toast.error("Error deleting pet.");
        });
    };

    const openUpdateModal = (pet) => {
        setSelectedPet(pet);
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedPet((prevPet) => ({ ...prevPet, [name]: value }));
    };

    const updatePet = async (e) => {
        e.preventDefault();
        if (!selectedPet.id) return;

        try {
            const response = await fetch(`http://localhost:5000/api/pets/${selectedPet.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(selectedPet)
            });

            if (response.ok) {
                setData(data.map(pet => pet.id === selectedPet.id ? selectedPet : pet));
                toast.success("Pet updated successfully");
                setIsModalOpen(false);
            } else {
                toast.error("Failed to update pet.");
            }
        } catch (error) {
            console.error('Error updating pet:', error);
            toast.error("Error updating pet.");
        }
    };
    console.log("Updating pet with ID:", selectedPet);

    if (!data) return <div>Loading...</div>;

    return (
        <>
            <ToastContainer />
            <div className='container'>
                <div className='row'>
                    <div className='container-fluid' style={{ marginTop: '-1rem' }}>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className='colo'>
                                <Link to='/Home'><img src='./logo-pets.png' className='update_logo' alt='Logo' /></Link>
                            </div>
                            <div className='colo'>
                                <h2 className='userinfo'>Pets Management</h2>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className='container row mt-5'>
                    <div className="row">
                        {data.map((pet) => (
                            <div className="col-lg-12" key={pet.id}>
                                <div className="card pets-card-dum">
                                    <div className='row'>
                                        <div style={{ width: '30%' }}>
                                            <img className="pets-card2-dum" src={pet.image} alt="Pet" />
                                        </div>
                                        <div style={{ width: '50%', paddingTop: '2rem' }}>
                                            <div className='row'>
                                                <div className='col-3'><h5>{pet.breed}</h5></div>
                                                <div className='col-3'><p><b>Color:</b> {pet.color}</p></div>
                                                <div className='col-3'><p><b>Age:</b> {pet.age}</p></div>
                                                <div className='col-3'><p><b>Price:</b> {pet.price}</p></div>
                                            </div>
                                            <p style={{ width: "100%", height: "50px", overflow: "hidden" }}><b>Description:</b> {pet.description}</p>
                                        </div>
                                        <div style={{ width: '20%', borderLeft: '1px solid rgb(212, 212, 212)', height: '20vh' }}>
                                            <div style={{ marginTop: '2.5rem' }}>
                                                <button className="dlt_icon2-dum" onClick={() => openUpdateModal(pet)}><RxUpdate /></button>
                                                <button className="dlt_icon-dum" onClick={() => deletePet(pet.id)}><MdDelete /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                       
                {isModalOpen && selectedPet && (
    <div className="modal1">
        <div className="modal-content1">
            <span className="close1" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Update Pet</h2>
            <form onSubmit={updatePet}>
                <div className='row' style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'2rem'}}>
                   <div className='col-lg-6'>
                    <div className='row'>
                   <div className='col-2'>
                    <label>Breed: </label>
                    </div>
                    <div className='col-10'>
                    <input className='input-fields4' type="text" name="breed" value={selectedPet.breed || ''} onChange={handleInputChange} />
                    </div>
                    </div>
                   </div>
                   <div className='col-6'>
                    <div className='row'>
                   <div className='col-2'>
                    <label>Color:</label>
                    </div>
                    <div className='col-10'>
                    <input className='input-fields4' type="text" name="color" value={selectedPet.color || ''} onChange={handleInputChange} />
                    </div>
                    </div>
                   </div>
                </div>
                <div className='row' style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'2rem'}}>
                   <div className='col-lg-6'>
                    <div className='row'>
                   <div className='col-2'>
                    <label>Age: </label>
                    </div>
                    <div className='col-10'>
                    <input className='input-fields4' type="text" name="age" value={selectedPet.age || ''} onChange={handleInputChange} />
                    </div>
                    </div>
                   </div>
                   <div className='col-6'>
                    <div className='row'>
                   <div className='col-2'>
                    <label>Price:</label>
                    </div>
                    <div className='col-10'>
                    <input className='input-fields4' type="text" name="price" value={selectedPet.price || ''} onChange={handleInputChange} />
                    </div>
                    </div>
                   </div>
                </div>
           
                <div className='row'>
                    <div className='col-2'>
                    <label>Description: </label>
                    </div>
                    <div className='col-10'>
                    <textarea rows="15" cols='30' className='input-fields5' name="description" value={selectedPet.description || ''} onChange={handleInputChange} />                </div>
                </div>
                <button className='button_up' type="submit">Update</button>
            </form>
        </div>
    </div>
)}

            </div>
        </>
    );
}
