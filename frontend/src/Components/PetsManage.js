import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

export default function PetDetails() {
    const [data, setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const { id } = useParams();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'));

        const fetchInfo = () => {
            return fetch(`http://localhost:5000/api/pets/${116}`)
                .then((res) => res.json())
                .then((d) => setData(d))
                .catch((error) => console.error('Error fetching pet details:', error));
        };
        fetchInfo();
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
    <div>
    <div className='container'>
    <div className='row'>
    <div className='container-fluid' style={{marginTop:'-1rem'}}>
    <div className="col-lg-12 col-md-12 col-sm-12">
        <div className='colo'>
        <Link to='/Home'><img src='./logo-pets.png' className='update_logo' alt='Logo' /></Link>
        </div>
        <div className='colo'>
        <h2 className='userinfo'>Pet Management</h2>
        </div>
    </div>
    </div>
    </div>

    <div className='container row mt-5' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    <div className='pic1'>
    <div className='colo1'>
        <div className='pet_detail'>
        <img src={data.image} alt='pet' />
        </div>
    </div>
    <div className='colo2'>
     
    </div>
</div>

<div className='pic2' style={{marginTop:'-2rem'}}>
<h4 className=''>{data.breed}</h4>
<div className='row'>
    <div className='pic1'>
    <h6 className='pet-pricing'>Price: {data.price}</h6>
    <h6 className='pet-pricing'>Owner Name:{data.uploaderName}</h6>
    <h6 className='pet-pricing'>Contact No: {data.uploaderMobileContact}</h6>
    <h6 className='pet-pricing'>Location: {data.UploaderLocation}</h6>
    </div>

    <div className='pic2' style={{marginTop:'3rem'}}>
    <h6 className='pet-pricing'>Color: {data.color}</h6>
    <h6 className='pet-pricing'>Age: {data.age}</h6>
    <h6 className='pet-pricing'>Owner Email: <a href={`mailto:${data.uploaderEmail}`} style={{textDecoration:'none'}}>{data.uploaderEmail}</a></h6>
    </div>
</div>
  {/* <h6 className='pet-pricing'>Type: {data.type}</h6> */}
  <p className='pet-pricing2'>{data.description}</p>
</div>

</div>
<div className='col-lg-12 colo2' style={{marginTop:'1rem' }}>
<button className='upload3 main-color' type='submit' >Update</button>
{isLoggedIn && (
<button className='delete_pet' >Delete</button>
   )}
</div>
</div>
</div>
);
}
