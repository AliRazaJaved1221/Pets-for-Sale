import React, { useEffect, useState } from "react";
import { FaUser, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pets/get");
      const result = await response.json();
      setData(result.data);
    } catch (error) {
    console.error("Error fetching pet data:", error);
    }
    };
    fetchInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userDetail");
    setIsLoggedIn(false);
    navigate("/Home");
  };

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
    }
  };

  const getFilteredAndUnfilteredPets = () => {
    const filteredPets = data.filter(
      (pet) =>
        pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.age.toString().includes(searchQuery) 
    );
    const unfilteredPets = data.filter(
      (pet) =>
        !(
          pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pet.age.toString().includes(searchQuery)
        )
    );
    return { filteredPets, unfilteredPets };
  };

  const { filteredPets, unfilteredPets } = getFilteredAndUnfilteredPets();

  return (
  <div>
  <header>
  <div className="backg">
  <div className="container-fluid">
  <div className="custom1">
  <Link to="/Home">
  <img src="./logo-pets.png" style={{ height: "10rem", width: "15rem", marginTop: "1rem" }} alt="Logo" />
  </Link>
  </div>
  <div className="custom2" style={{ marginTop: "4.7rem" }}>
  <input  type="text" name="search" className="search-bar" placeholder="Search by breed or age" autoComplete="off"
   value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  onKeyDown={handleSearchSubmit}/>
 </div>
 <div className="custom3" style={{ marginTop: "4.7rem" }}>
  {isLoggedIn ? (
   <>
  <button className="upload main-color" data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit">+ Upload Pet</button>
  <span>
   <button className="log-but" onClick={handleLogout}>
   <FaSignOutAlt style={{ fontSize: "1.3rem" }} /> Logout
  </button>
  </span>
   </>
   ) : (
   <>
  <span>
  <Link className="log-sign" to="/LoginForm">
   <FaUser style={{ fontSize: "1.3rem" }} /> Login
  </Link>
  </span>
  <span style={{ marginLeft: "2rem", fontWeight: "bold" }}>|</span>
  <span>
  <Link className="log-sign" to="/SignUpForm">
  <FaUserPlus style={{ fontSize: "1.5rem" }} /> SignUp
  </Link>
  </span>
  </>
    )}
  <span style={{ marginLeft: "2rem", fontWeight: "bold" }}>|</span>
  <span>
  <Link className="log-sign" to="/UserInfo">
  <FaUser style={{ fontSize: "1.3rem" }} /> Profile
  </Link>
  </span>
  </div>
  </div>
  </div>
  </header>
<div className="backg1">
  <div className="container">
  <div>
  <div className="dog1">
  <div className="pets-hover">
    <img src="./dog-5.jpg" className="petrow" alt="dogpicture" />
    <h1>Dogs</h1>
  </div>
  </div>
  <div className="cat2">
  <div className="pets-hover">
    <img src="./parrot-6.jpg" className="petrow" alt="birdpicture" />
    <h1>Birds</h1>
  </div>
  </div>
  <div className="bird3">
  <div className="pets-hover">
  <img src="./cat-3.jpg" className="petrow" alt="catpicture" />
    <h1>Cats</h1>
     </div>
  </div>
  </div>
  </div>

  <div className="container" style={{ marginTop: "7rem" }}>
  <div className="row">
  {filteredPets.map((item) => (
  <div className="col-lg-3 col-md-4 mt-5" key={item.id}>
  <Link style={{ textDecoration: "none" }} to={`/pet/${item.id}`} className="card pets-card main-color">
  <img className="pets-card2" src={item.image} alt="Pet" />
  <h5>Breed: {item.breed}</h5>
  <p>Color: {item.color}</p>
  <p>Age: {item.age}</p>
  <p>Price: {item.price}</p>
  <p style={{ width: "100%", height: "50px", overflow: "hidden" }}>Description: {item.description}</p>
  </Link>
  </div>
  ))}

  {filteredPets.length > 0 && unfilteredPets.length > 0 && (
  <div className="col-12 mt-4">
  <hr style={{ borderTop: "2px solid #ccc" }} />
  </div>
  )}

  {unfilteredPets.map((item) => (
  <div className="col-lg-3 col-md-4 mt-5" key={item.id}>
  <Link style={{ textDecoration: "none" }} to={`/pet/${item.id}`} className="card pets-card main-color">
  <img className="pets-card2" src={item.image} alt="Pet" />
  <h5>Breed: {item.breed}</h5>
  <p>Color: {item.color}</p>
  <p>Age: {item.age}</p>
  <p>Price: {item.price}</p>
  <p style={{ width: "100%", height: "50px", overflow: "hidden" }}> Description: {item.description}</p>
  </Link>
  </div>
  ))}
  </div>
  </div>
  </div>
  <footer className="footer">
  <div className="footer-container">
  <div className="footer-section">
  <h4>Our experts are available 24/7</h4>
  <p>Find everything you need for your beloved pets - Pakistan's Top Online Pet Store.</p>
  </div>
  <div className="footer-section">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/Home">Home</Link></li>
    <li><Link to="">Cats/Kittens</Link></li>
    <li><Link to="">Dogs</Link></li>
    <li><Link to="">Birds</Link></li>
    <li><Link to="">About</Link></li>
  </ul>
  </div>
  <div className="footer-section">
  <h4>Information</h4>
  <ul>
    <li><Link to="/Contact">Contact</Link></li>
    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    <li><Link to="/FAQs">FAQs</Link></li>
    <li><Link to="/">Terms & Conditions</Link></li>
    <li><Link to="/">Shipping</Link></li>
  </ul>
  </div>

  <div className="footer-section">
  <h4>Contact Us</h4>
  <a className="mail1" href="mailto:petsforsale.official@gmail.com">petsforsale.official@gmail.com</a>
  <p>0305-1888872</p>
  <p> M. A. Jinnah Campus, Defence Rd, off Raiwand Road, Lda Avenue Phase 1 Lda Avenue, Lahore, Punjab</p>
  </div>

  <div className="footer-section">
  <h4>Follow Us</h4>
  <div className="social-icons">
  <div className="fb-icons"><a href="https://www.facebook.com/61567034620674/" target="_blank" rel="noopener noreferrer"><FaFacebook className="fb-icons1"/></a></div>
  <div className="fb-icons"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="fb-icons2"/></a></div>
  <div className="fb-icons"><a href="https://wa.link/7yqee1" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="fb-icons3"/></a></div>
  </div>
  </div>
  </div>
  </footer>
</div>
  );
}
