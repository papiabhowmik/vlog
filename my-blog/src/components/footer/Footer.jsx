import React from 'react'
import './style.css';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="contact-sec sec-pad" id='contact'>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>
                <ul className="contact-ul">
                    <li>
                     <IoLocationOutline /> Saltlake, kolkata
                     Delhi
                    </li>
                    <li>
                    <BsTelephone />
                    <a href="tel:08510004495">
                        <b>0255000XXXX</b>
                    </a>
                    ,
                    <a href="tel:08510005495">
                        <b>0251600XXXX</b>
                    </a>
                    </li>
                    <li>
                    <FaRegEnvelope />
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                        <b> demounknown@gmail.com</b>
                    </a>
                    </li>
                </ul>
                <span>
                    <a href="#" className="fb">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="insta">
                      <FaInstagram />
                    </a>
                    <a href="#" className="twitter">
                      <FaXTwitter />
                    </a>
                </span>
                </div>
            </div>
            <div className="col-md-6">
                <form action="#" className="contFrm" method="POST">
                <div className="row">
                    <div className="col-sm-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="inptFld"
                        required=""
                    />
                    </div>
                    <div className="col-sm-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="inptFld"
                        required=""
                    />
                    </div>
                    <div className="col-sm-6">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="inptFld"
                        required=""
                    />
                    </div>
                    <div className="col-sm-6">
                    <input
                        type="text"
                        name="sub"
                        placeholder="Subject"
                        className="inptFld"
                        required=""
                    />
                    </div>
                    <div className="col-12">
                    <textarea
                        className="inptFld"
                        rows=""
                        cols=""
                        placeholder="Your Message..."
                        required=""
                        defaultValue={""}
                    />
                    </div>
                    <div className="col-12">
                    <input
                        type="submit"
                        name="submit"
                        defaultValue="SUBMIT"
                        className="inptBtn"
                    />
                    </div>
                </div>
                </form>
            </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 20 }}>
            <p> Copyright © All rights reserved | Surojeet 2k25</p>
            </div>
        </div>
    </footer>

  )
}

export default Footer