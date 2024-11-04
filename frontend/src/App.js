import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Modal from './Components/Modal'
import Home from './Components/Home';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm';
import ForgetPassword from './Components/ForgetPassword';
import { ToastContainer } from 'react-toastify';
import AdminPets from './Components/AdminPets';
import UserInfo from './Components/UserInfo';
import AdminUsers from './Components/AdminUsers';
import PetDetails from './Components/PetDetails'
import AdminDashboard from './Components/AdminDashboard';
import Payment from './Components/Payment';
import Review from './Components/Review';
import Contact from './Components/Contact';
import FAQs from './Components/FAQs';
import Privacy from './Components/Privacy';
import TermsAndConditions from './Components/TermsAndConditions';

function App() {
//   if (!navigator.onLine) {
//     alert("The device is currently offline");
// }
  return (
    <>
      <Router>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/SignUpForm" element={<SignUpForm/>}></Route>
            <Route path="/LoginForm" element={<LoginForm />}></Route>
            <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
            <Route path="/AdminPets" element={<AdminPets/>}></Route>
            <Route path="/pet/:id" element={<PetDetails/>} />
            <Route path="/UserInfo" element={<UserInfo/>}></Route>
            <Route path="/AdminUsers" element={<AdminUsers/>}></Route>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
            <Route path="/Payment" element={<Payment/>}></Route>
            <Route path="/Review" element={<Review/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/FAQs" element={<FAQs/>}></Route>
            <Route path="/Privacy" element={<Privacy/>}></Route>
            <Route path="TermsandConditions" element={<TermsAndConditions/>}></Route>

          </Routes>
      </Router>
            <Modal/>
            <ToastContainer/>
    </>
  );
}

export default App;
