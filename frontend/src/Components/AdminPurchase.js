import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePets, MdOutlineRateReview } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function AdminPurchase() {
  const [purchasedPets, setPurchasedPets] = useState([]);
  // const [weeklyCount, setWeeklyCount] = useState(0);
  // const [monthlyCount, setMonthlyCount] = useState(0);
  

  // Group purchases by time period
  const groupPurchases = (data) => {
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);

    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);

    // let weekly = 0;
    // let monthly = 0;

    data.forEach((pet) => {
      // const purchaseDate = new Date(pet.purchaseDate);
      // if (purchaseDate > oneWeekAgo) weekly++;
      // if (purchaseDate > oneMonthAgo) monthly++;
    });

    // setWeeklyCount(weekly);
    // setMonthlyCount(monthly);
  };

  useEffect(() => {
    const fetchPurchasedPets = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/purchase/buy-now");
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

  const printSummary = () => {
    const printContents = document.getElementById("summary").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12" style={{ position: "fixed" }}>
            <div className="side_bar">
              <div>
                <Link to="/">
                  <img
                    src="./logo-white.png"
                    style={{ height: "10rem", width: "15rem", marginLeft: "4rem" }}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="line1">
                <hr />
              </div>
              <div>
                <Link className="admin_links" to="/">
                  <IoHomeOutline style={{ marginRight: "1rem" }} />
                  Home
                </Link>
              </div>
              <div className="line1">
                <hr />
              </div>
              <div>
                <Link className="admin_links" to="/AdminDashboard">
                  <AiOutlineDashboard style={{ marginRight: "1rem" }} />
                  Dashboard
                </Link>
              </div>
              <div className="line1">
                <hr />
              </div>
              <div>
                <Link className="admin_links" to="/AdminUsers">
                  <FaRegUser style={{ marginRight: "1rem" }} />
                  Users
                </Link>
              </div>
              <div className="line1">
                <hr />
              </div>
              <div>
                <Link className="admin_links" to="/AdminPets">
                  <MdOutlinePets style={{ marginRight: "1rem" }} />
                  Pets
                </Link>
              </div>
              <div className="line1">
                <hr />
              </div>
              <div>
                <Link className="admin_links" to="/AdminReviews">
                  <MdOutlineRateReview style={{ marginRight: "1rem" }} />
                  Reviews
                </Link>
              </div>
              <div className="line1">
                <hr />
              </div>
              <div>
                <Link className="admin_links" to="/AdminPurchase">
                  <TbReportSearch style={{ marginRight: "1rem" }} />
                  Report
                </Link>
              </div>

              <div style={{ marginTop: "5rem" }} className="line1">
                <hr />
              </div>
              <div style={{ marginRight: "2rem", marginLeft: "2rem" }} className="dropdown">
                <Link
                  className="btn dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Admin
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      <IoLogOutOutline style={{ marginRight: "0.5rem" }} />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12" style={{ marginLeft: "24%" }}>
            <div style={{ marginTop: "5rem" }}>
              <input type="text" name="search" className="search-bar2" placeholder="Search" />
              <Link style={{ marginLeft: "15rem" }} to="/admindashboard">
                <IoIosNotificationsOutline style={{ fontSize: "1.5rem", color: "black" }} />
              </Link>
              <Link to="/" style={{ color: "black", textDecoration: "none", marginLeft: "5rem" }}>
                <IoLogOutOutline style={{ marginRight: "0.5rem" }} />
                Logout
              </Link>
              <hr style={{ marginTop: "3rem" }} />
            </div>

            <div className="row" style={{ marginLeft: "2rem" }} id="summary">
              <h3>Purchased Pets Summary 
              <button style={{marginLeft:'1rem'}} className="btn btn-success" onClick={printSummary}>
                Print Summary
              </button>
              </h3>
              <p>
                <strong>Total Pets Purchased:</strong> {purchasedPets.length}
              </p>
            
              <p>
                <strong>Pets Purchases in last 7 days:</strong> {purchasedPets.length}
              </p>
              <p>
                <strong>Pets Purchases in last 30 days:</strong> {purchasedPets.length}
              </p>
             
            </div>

            {/* Purchased Pets Details */}
            <div className="row" style={{marginLeft:'2rem'}}>
          <h3>Purchased Pets</h3>
          <div style={{height: '60vh', overflowY: 'auto'}}>
          {purchasedPets.length > 0 ? (
            purchasedPets.map((pet, index) => (
              <div style={{ marginTop: "2rem" }} className="row" key={index}>
                <div className="col-4">
                  <h4>Buyer Information</h4>
                  <p>
                    <strong>Buyer First Name:</strong> {pet.buyerFirstName || "N/A"}
                  </p>
                  <p>
                    <strong>Buyer Last Name:</strong> {pet.buyerLastName || "N/A"}
                  </p>
                  <p>
                    <strong>Buyer Email:</strong> {pet.buyerEmail || "N/A"}
                  </p>
                  <p>
                    <strong>Buyer Contact:</strong> {pet.contact || "N/A"}
                  </p>
                  <p>
                    <strong>Buyer Address:</strong> {pet.address || "N/A"}
                  </p>
                  <p>
                    <strong>Payment Method:</strong> {pet.paymentMethod || "N/A"}
                  </p>
                </div>
                <div className="col-4">
                  <h4>Pet Information</h4>
                  <img
                    src={pet.petImage || "/placeholder-image.png"}
                    alt="Pet"
                    style={{ width: "97px", height: "94px", borderRadius: "4rem" }}
                  />
                  <p>
                    <strong>Breed:</strong> {pet.petBreed || "N/A"}
                  </p>
                  <p>
                    <strong>Color:</strong> {pet.petColor || "N/A"}
                  </p>
                  <p>
                    <strong>Price:</strong> {pet.petPrice ? `$${pet.petPrice}` : "N/A"}
                  </p>
                  <p>
                    <strong>Age:</strong> {pet.petAge || "N/A"}
                  </p>
                  <p>
                    <strong>Description:</strong> {pet.petDescription || "N/A"}
                  </p>
                </div>
                <div className="col-4">
                  <h4>Pet Owner Information</h4>
                  <p>
                    <strong>Owner Name:</strong> {pet.petOwnerName || "N/A"}
                  </p>
                  <p>
                    <strong>Owner Contact:</strong> {pet.petOwnerMobile || "N/A"}
                  </p>
                  <p>
                    <strong>Owner Email:</strong> {pet.petOwnerEmail || "N/A"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No purchased pets available.</p>
          )}
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
