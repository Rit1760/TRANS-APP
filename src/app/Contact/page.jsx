"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Contact.css";
import Head from "next/head";
// import { useState } from "react";

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   first_name:"",
  //   last_name:"",
  //   email:"",
  //   phone:"",
  //   message:"",
  // });


  //   const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/Contact", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   });

  //   const data = await res.json();
  //   if (res.ok) {
  //     localStorage.setItem("token", data.token);
  //     alert("Login Successful!");
  //     window.location.href = "/";
  //   } else {
  //     alert(data.error);
  //   }
  // };




  return (
    <>
      <Head>
        <title>Contact Us | Transbolt Lightning Protection India</title>
        <meta
          name="description"
          content="Get in touch with Transbolt for lightning protection solutions, consultations, and service inquiries. We're here to help you stay protected."
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Transbolt | Contact Our Lightning Protection Experts"
        />
        <meta
          property="og:description"
          content="Reach out to Transbolt for expert guidance on lightning protection systems, installations, and safety compliance across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transbolt.in/Contact" />
        <meta property="og:site_name" content="Transbolt" />

        <meta
          name="keywords"
          content="contact Transbolt, lightning protection contact, lightning system inquiry, surge protection quote, lightning safety help, Transbolt India"
        />
      </Head>

      <div className="main_contact">
        <div className="container1_contact">
          <div className="row1_contact">
            <div className="col1_contact">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>

        <div className="container2_contact">
          <div className="row2_contact">
            <div className="col2_contact">
              <h3>TRANSBOLT</h3>
              <h2>Get in touch with us!</h2>
            </div>
          </div>

          <div className="row3_contact">
            <div className="col3_contact">
              <FontAwesomeIcon icon={faPhone} className="ph" />
              <h3>PHONE</h3>
              <p>
                <b>Phone:</b> <a href="tel:+919971237771">+91 9971237771</a>
              </p>
              <p>
                <b>Phone:</b> <a href="tel:+919971795987">+91 9971795987</a>
              </p>
            </div>

            <div className="col4_contact">
              <FontAwesomeIcon icon={faLocationDot} className="loca" />
              <h3>ADDRESS</h3>
              <p>
                870-B1, Spaze ITech Park, Sector 49,
                <br />
                Sohna Road, Gurgaon,
                <br />
                122018
              </p>
            </div>

            <div className="col5_contact">
              <FontAwesomeIcon icon={faEnvelope} className="mail" />
              <h3>EMAIL</h3>
              <p>
                <a href="mailto:example@example.com">info@transbolt.com</a>
                <br />
                <a href="mailto:example@example.com">example@example.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="container3_contact">
          <div className="row4_contact">
            <div className="col6_contact">
              <h2>
                If you got any questions
                <br />
                Please do not hesitate to send us a message
              </h2>
            </div>
          </div>

          <div className="row5_contact">
            <div className="col7_contact">
              <form action="#" method="post" >
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter your first name"
                  // value={formData.first_name} 
                  // onChange={handleChange}
                  // required
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last name"
                  // value={formData.last_name} 
                  // onChange={handleChange}
                  // required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  // value={formData.email} 
                  // onChange={handleChange}
                  // required
                />

                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  // value={formData.phone} 
                  // onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  // value={formData.message} 
                  // onChange={handleChange}
                >
                </textarea>

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}