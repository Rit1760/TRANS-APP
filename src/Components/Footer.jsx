'use client';

import "../Styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container1_footer">
      {/* <div className="row1_footer">
        <div className="col1_footer">
         <h2><Link href="/Contact">Contact Us</Link></h2>
        </div>
        <div className="col2_footer">
          <h2><Link href="/Privacy">Privacy Policy</Link></h2>
        </div>
        <div className="col3_footer">
          <h2><Link href="/Term">Terms & Conditions</Link></h2>
        </div>
        </div> */}


        <div className="row2_footer">
          <div className="col4_footer">
 <Image src="/images/foot-tblt.png" width={250} height={180} alt="foot-tblt"/>
          </div>
  
          <div className="col5_footer">
          {/* <h2>TRANSBOLT</h2> */}
            <p>
              We are<b> INDIA'S FIRST</b> company to provide comprehensive Earthing, Lightning Protection,
              and Over-voltage Protection solutions, establishing a legacy of unparalleled safety and
              reliability. Our mission: Protect lives, assets, and ensure a smarter, safer future.
            </p>
          </div>
  
          <div className="col6_footer">
            <h4>Get in Touch</h4>
  <a href="mailto:info@transbolt.com" style={{ textDecoration: 'none' ,color:"#fff"}}>
            <p>   <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#2391fb", cursor: "pointer", marginRight: "1rem" }}
          />  <b> Email</b>: info@transbolt.com</p></a>
  <a
    href="tel:+919876543210"
    style={{ color: 'white', textDecoration: 'none' }}
  >
            <p> <FontAwesomeIcon icon={faPhone}  style={{ color: "#2391fb", cursor: "pointer", marginRight: "1rem" }}/><b> Phone</b>: +91 9876543210</p>
         </a>
            <a
          // href="https://www.google.com/maps?q=870-B1,+Spaze+ITech+Park,+Sector+49,+Sohna+Road,+Gurgaon,+122018"
          href="https://maps.app.goo.gl/wNu7PAy1vZjPLxsM7"
          target="_blank"
          rel="noopener noreferrer" style={{textDecoration:"none"}}
        >
            <p style={{color:"#fff"}}><FontAwesomeIcon icon={faLocationDot}  style={{ color: "#2391fb", cursor: "pointer", marginRight: "1rem" }}/>   <b>Location</b> :870-B1, Spaze ITech Park, Sector 49, Sohna Road, Gurgaon, 122018</p>
          </a>
          </div>
        </div>



      <div className="row1_footer">
        <div className="col1_footer">
         <h2><Link href="/Contact">Contact Us</Link></h2>
        </div>
        <div className="col2_footer">
          <h2><Link href="/Privacy">Privacy Policy</Link></h2>
        </div>
        <div className="col3_footer">
          <h2><Link href="/Term">Terms & Conditions</Link></h2>
        </div>
      </div>



      <div className="row3_footer">
<a href="mailto:info@transbolt.com" style={{ textDecoration: 'none' }}>
  <FontAwesomeIcon
    icon={faEnvelope}
    style={{ color: "blue", cursor: "pointer", marginRight: "1rem", fontSize:"30px" }}
  />
</a>
<a href="https://www.linkedin.com/company/transbolt-the-power-to-protect/" style={{ textDecoration: 'none' ,color:"#fff"}}>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          style={{ color: "rgb(42, 156, 255)", cursor: "pointer", marginRight: "1rem" , fontSize:"30px" }}
        /></a>
        <a
  href="https://wa.me/9971237771?text=Hello%20Transbolt%2C%20I%20want%20to%20know%20more"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: 'green', fontSize: '24px', textDecoration: 'none' }}
>
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ color: "green", cursor: "pointer" , fontSize:"30px" }}
        />
        </a>
      </div>

      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        © 2025–present TRANSBOLT. All Rights Reserved.
      </h3>
    </footer>
  );
}