import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Review() {
  
  const location = useLocation();
  const { id } = useParams();
  const { petId } = location.state || {};  // Getting petId from route state
  console.log("id::::",id)
  const user = JSON.parse(localStorage.getItem("user")) || {}; // Fetching user from localStorage

  const [formData, setFormData] = useState({
    petId: id || "", 
    userId: user.id || "", 
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userId || !formData.petId) {
      toast.error("User ID and Pet ID are required.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Review submitted successfully!");
        setFormData({
          petId:petId,
          userId: user.id,
          feedback: "",
        });
        
      } else {
        toast.error(data.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred while submitting the review.");
    }
  };
  console.log('petId', petId )

  return (
    <div className="review-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 colo">
          <Link to="/Home">
            <img
              src="/logo-pets.png"
              className="login_log"
              style={{ marginLeft: "-1rem" }}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 colo">
          <h2 className="review">Post a review</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 colo">
            <input
              type="number"
              name="userId"
              className="input-fields2"
              value={formData.userId}
              onChange={handleInputChange}
              placeholder="User ID"
              style={{display:'none'}}
              required
              // style={{display:'none'}}
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 colo">
            <input
              type="number"
              name="petId"
              className="input-fields2"
              value={formData.petId}
              onChange={handleInputChange}
              placeholder="Pet ID"
              style={{display:'none'}}
              required
            />

          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 colo">
            <textarea
              type="textarea"
              name="feedback"
              rows="15"
              cols="30"
              className="input-area"
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="REVIEW *"
              required
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12 colo">
            <button type="submit" className="review_btn">
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
