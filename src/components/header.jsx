import React from 'react';
import "../index.css";
import "../assets/css/header.css";
import { GiFilmSpool } from "react-icons/gi"

function Header() {
  return (
     <header>
       <div className="container">
         <div className="logo">
           <GiFilmSpool className='logo-icon' />
           <h1>Film<span>Room</span></h1>
         </div>
         <div className="advert">
           <nav>
             <ul>
               <li>
                 <a className="active" href="/">
                   HOME
                 </a>
               </li>
               <li>
                 <a href="/">WATCH</a>
               </li>
               <li>
                 <a href="/">BLOGS</a>
               </li>
               <li>
                 <a href="/">PRICING</a>
               </li>
               <li>
                 <a href="/">CONTACT</a>
               </li>
               <li>
                 <a href="/">SIGN IN</a>
               </li>
             </ul>
           </nav>
         </div>
       </div>
   </header>
  )
}

export default Header