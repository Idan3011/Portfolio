import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
        <ul><li className="social"><a href="#"><FaFacebook /></a></li>
        <li className="social"><a href="#"><FaInstagram /></a></li>
        <li className="social"><a href="#"><FaTwitter /></a></li>
      </ul>
    <p>Designed By Idan | ALL Rights Reserved <FaRegCopyright /></p>
    </div>
  )
}

export default Footer