import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePets, MdOutlineRateReview } from "react-icons/md";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function AdminPurchase() {
  const [purchasedPets, setPurchasedPets] = useState([]);
  const [dailyCount, setDailyCount] = useState(0);
  const [weeklyCount, setWeeklyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  // Function to group purchases
  const groupPurchases = (data) => {
    const today = new Date();
    const oneDayAgo = new Date(today);
    oneDayAgo.setDate(today.getDate() - 1);

    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);

    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);

    let daily = 0;
    let weekly = 0;
    let monthly = 0;

    data.forEach((pet) => {
      const purchaseDate = new Date(pet.purchaseDate);
      if (purchaseDate > oneDayAgo) daily++;
      if (purchaseDate > oneWeekAgo) weekly++;
      if (purchaseDate > oneMonthAgo) monthly++;
    });

    setDailyCount(daily);
    setWeeklyCount(weekly);
    setMonthlyCount(monthly);
  };

  useEffect(() => {
    const fetchPurchasedPets = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/purchase/purchased-pets"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPurchasedPets(data);
        groupPurchases(data);
      } catch (error) {
        console.error("Error fetching purchased pets:", error);
      }
    };

    fetchPurchasedPets();
  }, []);

  return (
    <>
      <div className="row">
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
        <div className="col-lg-9" style={{ marginLeft: "24%" }}>
          <div style={{ marginTop: "5rem" }}>
            <input type="text" name="search" className="search-bar2" placeholder="Search" />
            <Link style={{ marginLeft: "15rem" }} to="/admindashboard"><IoIosNotificationsOutline style={{ fontSize: "1.5rem", color: "black" }}/></Link>
            <Link to="/" style={{ color: "black", textDecoration: "none", marginLeft: "5rem",}}><IoLogOutOutline style={{ marginRight: "0.5rem" }} />Logout</Link>
            <hr style={{ marginTop: "3rem" }} />
          </div>

          {/* Summary Section */}
          <div className="row">
            <h3>Purchased Pets Summary</h3>
            <p><strong>Total Pets Purchased:</strong> {purchasedPets.length}</p>
            <p><strong>Pets Purchased Today:</strong> {dailyCount}</p>
            <p><strong>Pets Purchased in last 7 days:</strong> {weeklyCount}</p>
            <p><strong>Pets Purchased in last 30 days:</strong> {monthlyCount}</p>
          </div>

          {/* Purchased Pets Details */}
          <div className="row">
            <h3>Purchased Pets</h3>
            {purchasedPets.length > 0 ? (
              purchasedPets.map((pet, index) => (
                <div style={{ marginTop: "2rem" }} className="row App" key={index}>
                  <div className="col-4">
                    <h4>Buyer Information</h4>
                    <p><strong>Buyer First Name:</strong> {pet.buyerFirstName || "N/A"}</p>
                    <p><strong>Buyer Last Name:</strong> {pet.buyerLastName || "N/A"}</p>
                    <p><strong>Buyer Email:</strong> {pet.buyerEmail || "N/A"}</p>
                    <p><strong>Buyer Contact:</strong> {pet.contact || "N/A"}</p>
                    <p><strong>Buyer Address:</strong> {pet.address || "N/A"}</p>
                    <p><strong>Payment Method:</strong> {pet.paymentMethod || "N/A"}</p>
                  </div>
                  <div className="col-4">
                    <h4>Pet Information</h4>
                    <img src={pet.petImage || "/placeholder-image.png"} alt="Pet" style={{ width: "97px", height: "94px", borderRadius: "4rem" }} />
                    <p><strong>Breed:</strong> {pet.petBreed || "N/A"}</p>
                    <p><strong>Color:</strong> {pet.petColor || "N/A"}</p>
                    <p><strong>Price:</strong> {pet.petPrice ? `Rs.${pet.petPrice}` : "N/A"}</p>
                    <p><strong>Age:</strong> {pet.petAge || "N/A"}</p>
                    <p><strong>Description:</strong> {pet.petDescription || "N/A"}</p>
                    <p><strong>Status:</strong> {pet.isSold ? "SOLD" : "Available"}</p>
                  </div>
                  <div className="col-4">
                    <h4>Pet Owner Information</h4>
                    <p><strong>Owner Name:</strong> {pet.petOwnerName || "N/A"}</p>
                    <p><strong>Owner Email:</strong> {pet.petOwnerEmail || "N/A"}</p>
                    <p><strong>Owner Contact:</strong> {pet.petOwnerMobile || "N/A"}</p>
                    <p><strong>Owner Address:</strong> {pet.petOwnerLocation || "N/A"}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center" style={{ marginTop: "2rem" }}>
                No purchased pets found.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
