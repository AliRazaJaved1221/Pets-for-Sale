// Modal Component
import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validate = (values) => {
  let errors = {};
  if (!values.type) errors.type = "Required";
  if (!values.breed) errors.breed = "Required";
  if (!values.color) errors.color = "Required";
  if (!values.age) errors.age = "Required";
  if (!values.price) errors.price = "Required";
  if (!values.description) errors.description = "Required";
  return errors;
};

export default function Modal() {
  const [imageurl, setImageUrl] = useState(null);
  const [preview, setPreview] = useState(null);
  const modalRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);
      uploadImageToDatabase(formData);
    }
  };

  const uploadImageToDatabase = async (formData) => {
    try {
      const res = await fetch("http://localhost:5000/api/files/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data?.filePath);
      formik.setFieldValue("image", data?.filePath);
    } catch {
      toast.error("Error uploading image.");
    }
  };

  const onSubmit = async (values, { resetForm }) => {
    if (!imageurl) {
      toast.error("Please wait for the image to finish uploading.");
      return;
    }

    const req = {
      type: values.type,
      breed: values.breed,
      color: values.color,
      age: values.age,
      price: values.price,
      description: values.description,
      image: imageurl,
      uploaderId: user.id,
      uploaderName: user.name,
      uploaderEmail: user.email,
    };

    try {
      const response = await fetch("http://localhost:5000/api/pets/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });
      if (response.ok) {
        toast("Pet is Uploaded");
        resetForm();
        setPreview(null);
        setImageUrl(null);
        window.$(modalRef.current).modal("hide");
      } else {
        throw new Error("Failed to upload pet");
      }
    } catch {
      toast.error("Error uploading pet.");
    }
  };

  const formik = useFormik({
    initialValues: {
      type: "", breed: "", color: "", age: "", price: "", description: "", image: "",
    },
    onSubmit,
    validate,
  });

  const handleAddClick = () => {
    formik.setTouched({
      type: true, breed: true, color: true, age: true, price: true, description: true, image: true,
    });
    if (Object.keys(formik.errors).length === 0) formik.handleSubmit();
    else toast.error("Please fill out all required fields.");
  };

  useEffect(() => {
    const handleModalHide = () => {
      formik.resetForm();
      setPreview(null);
      setImageUrl(null);
    };
    modalRef.current?.addEventListener("hidden.bs.modal", handleModalHide);
    return () => modalRef.current?.removeEventListener("hidden.bs.modal", handleModalHide);
  }, [formik]);


  return (
    <div>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog">
        <div className="modal-content main_modal">
        <div className="row" style={{ marginTop: "3rem", marginLeft: "5rem", marginBottom: "2rem",}}>
        <h2>Add New Pets</h2>
        </div>
        <div className="modal-body">
        <div className="row" style={{ marginRight: "4rem", marginLeft: "4rem", marginBottom: "10px",}}>
        <div className="col-lg-6">
        <label htmlFor="type" className="pett">Choose pet Type:</label>
        </div>
        <div className="col-lg-6">
        <select className="pet-type" id="type" name="type" onChange={formik.handleChange} value={formik.values.type}>
            <option value="Select Pet Type">Select Pet Type</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Bird">Bird</option>
        </select>
        {formik.touched.type && formik.errors.type ? (
        <div>{formik.errors.type}</div>
                ) : null}{" "}
        </div>
        </div>
        <div className="row" style={{ marginRight: "4rem", marginLeft: "4rem" }}>
        <div className="col-lg-6" style={{ marginBottom: "1rem" }}>
        <input className="modal-inputfields" placeholder="Breed" onChange={formik.handleChange} value={formik.values.breed} type="text"
            name="breed" id="breed" />
        {formik.touched.breed && formik.errors.breed ? (
        <div>{formik.errors.breed}</div>
             ) : null}
        </div>
        <div className="col-lg-6" style={{ marginBottom: "1rem" }}>
        <input className="modal-inputfields" placeholder="Color" onChange={formik.handleChange} value={formik.values.color} type="text"
            name="color" id="color"/>
        {formik.touched.color && formik.errors.color ? (
        <div>{formik.errors.color}</div>
             ) : null}
        </div>
        </div>
        <div className="row" style={{ marginRight: "4rem", marginLeft: "4rem" }}>
        <div className="col-lg-6" style={{ marginBottom: "1rem" }}>
        <input className="modal-inputfields" placeholder="Age" onChange={formik.handleChange} value={formik.values.age} type="text"
            name="age" id="age"/>
        {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
            ) : null}
        </div>
        <div className="col-lg-6" style={{ marginBottom: "1rem" }}>
        <input className="modal-inputfields" placeholder="Price (pkr.)" onChange={formik.handleChange} value={formik.values.price} type="text"
            name="price" id="price"/>
        {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
            ) : null}
        </div>
        </div>
        <div className="row" style={{ marginRight: "4rem", marginLeft: "4rem" }}>
        <div className="col-lg-6" style={{ marginBottom: "1rem" }}>
        <input className="modal-inputfields" placeholder="Description" onChange={formik.handleChange} value={formik.values.description}
            type="text" name="description" id="description"/>
        {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
            ) : null}
        </div>
        <div className="col-lg-6">
        <div className="modal-inputfields">
        <label htmlFor="upload-image">Upload image</label>
        <input type="file" id="upload-image" className="img-preview" style={{ marginTop: "0.5rem" }} name="upload-image" accept="image/*"
            onChange={handleImageUpload} />
        </div>
        </div>
        </div>
        <div className="row" style={{ marginTop: "0px" }}>
        <div className="col-lg-6" style={{ marginBottom: "1rem" }}></div>
        <div className="col-lg-6">
        {preview && (
        <img src={preview} alt="Image1 Preview" style={{ width: "6rem", height: "4rem", marginRight: "30%", marginLeft: "20%",}}/>
            )}
        </div>
        </div>
        </div>
        <div className="modal-footer" style={{ marginRight: "5rem", border: "none", paddingBottom: "45px",}}>
        <button type="button" style={{ backgroundColor: "#efefef", padding: "5px 40px" }} className="btn" data-bs-dismiss="modal">
            Cancel
        </button>
        <button type="button" style={{padding: "5px 40px", backgroundColor: "#06048c", color: "white",}} className="btn" onClick={handleAddClick}>
            Add
        </button>
        </div>
        </div>
        </div>
        </div>
        </form>
    </div>
  );
}
