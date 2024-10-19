// import React from 'react';
// import { IoHomeOutline } from "react-icons/io5";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlinePets } from "react-icons/md";
// import { TbReportSearch } from "react-icons/tb";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoLogOutOutline } from "react-icons/io5";
// import { IoIosNotificationsOutline } from "react-icons/io";

// export default function Admin() {

//   return (
//     <>
//       <div className='row'>
//         <div className='col-lg-3' style={{position:'fixed'}}>
//           <div className='side_bar'>
//             <div><a href='/'><img src='./logo-white.png' style={{ height: '10rem', width: '15rem', marginLeft: '4rem' }} alt='Logo' /></a></div>
//             <div className='line1'><hr/></div>
//             <div><a className='admin_links' href='/Admin'><IoHomeOutline style={{marginRight:'1rem'}}/>Home</a></div>
//             <div className='line1'><hr/></div>
//             <div><a className='admin_links' href="/AdminDashboard"><AiOutlineDashboard style={{marginRight:'1rem'}}/>Dashboard</a></div>
//             <div className='line1'><hr/></div>
//             <div><a className='admin_links' href="/AdminUsers"><FaRegUser style={{marginRight:'1rem'}}/>Users</a></div>
//             <div className='line1'><hr/></div>
//             <div><a className='admin_links' href="/AdminPets"><MdOutlinePets style={{marginRight:'1rem'}}/>Pets</a></div>
//             <div className='line1'><hr/></div>
//             <div><a className='admin_links' href="/"><TbReportSearch style={{marginRight:'1rem'}}/>Report</a></div>
//             <div className='line1'><hr/></div>
//             <div style={{marginTop:'8rem'}} className='line1'><hr/></div>
//             <div style={{marginRight:'2rem', marginLeft:'2rem'}} className="dropdown">
//               <a className="btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>Admin</a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="/"><IoSettingsOutline style={{marginRight:'0.5rem'}}/>Settings</a></li>
//                 <li><a className="dropdown-item" href="UserInfo"><FaRegUserCircle style={{marginRight:'0.5rem'}}/>Profile</a></li>
//                 <li><hr className="dropdown-divider"/></li>
//                 <li><a className="dropdown-item" href="/"><IoLogOutOutline style={{marginRight:'0.5rem'}}/>Logout</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className='col-lg-9' style={{backgroundColor:'', marginLeft:'24%'}}>
//           <div style={{ marginTop: '5rem' }}>
//             <input type='text' name='search' className='search-bar2' placeholder='Search ' />
//             <a style={{marginLeft:'15rem'}} href='/'><IoIosNotificationsOutline style={{fontSize:'1.5rem', color:'black'}}/></a>
//             <a href='/' style={{color:'black', textDecoration:'none', marginLeft:'5rem'}}><IoLogOutOutline style={{marginRight:'0.5rem'}}/>
//               Logout
//             </a>
//             <hr style={{marginTop:'3rem'}}/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
