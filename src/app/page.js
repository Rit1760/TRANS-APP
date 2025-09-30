'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';     
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './globals.css'; 
import gsap from 'gsap';

export default function Home() {

useEffect(() => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);

  let currentIndex = 0;

  function updateDisplay() {
    const names = document.querySelectorAll('.name');
    const descs = document.querySelectorAll('.desc');

    names.forEach((name) => {
      name.classList.remove('active', 'visible');
      name.style.opacity = '0.3';
    });

    descs.forEach((desc) => {
      desc.classList.remove('active');
    });

    names[currentIndex].classList.add('active', 'visible');
    names[currentIndex].style.opacity = '1';

    if (currentIndex - 1 >= 0) names[currentIndex - 1].classList.add('visible');
    if (currentIndex + 1 < names.length) names[currentIndex + 1].classList.add('visible');

    descs[currentIndex].classList.add('active');
  }

  function navigate(direction) {
    const names = document.querySelectorAll('.name');
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = names.length - 1;
    if (currentIndex >= names.length) currentIndex = 0;

    updateDisplay();
  }

  window.navigate = navigate; 
  window.onload = updateDisplay;

  return () => clearInterval(slideInterval);
}, []);

useEffect(() => {
  const tl = gsap.timeline();

  tl.to(".col12_Home img", {
    y: -20,
    ease: "bounce.in",
    duration: 1,
    yoyo: true,
    repeat: -1, 
  })
  .to(".col13_Home img", {
    y: -20,
    ease: "bounce.in",
    duration: 1,
    yoyo: true,
    repeat: -1, 
  })
  .to(".col14_Home img", {
    y: -20,
    ease: "bounce.in",
    duration: 1,
    yoyo: true,
    repeat: -1, 
  });

}, []);


  const [currentIndex, setCurrentIndex] = useState(0);

  const names = [
    "Advanced Lightning Protection Solutions",
    "Smart Earthing & Grounding Systems",
    "3D Lightning Protection System Modelling",
    "Smart Over-Voltage & Surge Protection (SPD) Solutions",
    "Smart Data & Communication Line SPDs",
    "Solar & Battery Storage EPC Execution",
    "Advanced UL-Certified Fire Safety Solutions",
    "Comprehensive Electrical Safety Audits",
    "Power System & Power Quality Services",
  ];

  const descs = [
    "We provide cutting-edge lightning protection systems designed to safeguard critical infrastructure, buildings, and equipment. Our advanced technology ensures reliable earthing, rapid energy dissipation, and compliance with international safety standards. Whether for industrial, commercial, or high-risk environments, our solutions minimize downtime, reduce fire hazards, and protect your assets against extreme weather events.",
    "Our Smart Earthing & Grounding Systems combine advanced materials and intelligent design to deliver low-resistance, maintenance-free performance. Engineered for safety, durability, and efficiency, our solutions ensure effective fault current dissipation, enhance system reliability, and meet global compliance standards. Ideal for data centers, power plants, telecom sites, and critical infrastructure.",
    "We utilize advanced 3D modelling to design precision-engineered lightning protection systems. Our simulations assess structural geometry, risk zones, and optimal air terminal placement—ensuring full compliance with IEC/IS standards. This digital approach enhances accuracy, reduces design errors, and ensures maximum protection for high-value infrastructure before installation.",
    "Our Smart SPD solutions are engineered to protect sensitive equipment from transient over-voltages caused by lightning strikes, switching surges, and grid disturbances. With real-time response, thermal protection, and remote monitoring capabilities, our surge protection devices ensure operational continuity, safety, and compliance with IEC 61643 standards—making them ideal for industrial, commercial, and mission-critical applications.",
    "Our Smart SPDs for data and communication lines safeguard sensitive electronics from surges induced by lightning and electromagnetic interference. Designed for high-speed networks, these devices ensure signal integrity, minimize downtime, and protect against data loss. Compatible with Ethernet, coaxial, RS-485, and other critical communication protocols, they provide robust protection in industrial and commercial environments.",
    "We offer end-to-end EPC (Engineering, Procurement & Construction) solutions for solar power and battery energy storage systems. From site assessment and system design to installation and commissioning, our expert team ensures seamless integration, maximum efficiency, and regulatory compliance. Our turnkey approach delivers reliable, scalable, and cost-effective clean energy solutions for commercial, industrial, and utility-scale projects.",
    "We deliver UL-certified fire safety systems designed for maximum reliability and compliance. Our advanced solutions include fire detection, suppression, and alarm systems tailored to protect critical infrastructure and high-risk environments. Engineered for rapid response and minimal false alarms, our systems meet international safety standards, ensuring life safety, asset protection, and operational continuity.",
    "Our Electrical Safety Audits identify potential hazards, ensure regulatory compliance, and enhance system reliability. We assess earthing systems, wiring integrity, load distribution, and protective devices using advanced tools and standards like IEEE, NFPA, and IS codes. Our detailed reports and actionable recommendations help minimize risk, prevent downtime, and create a safer electrical environment.",
    "We offer expert Power System and Power Quality services to ensure reliable, efficient, and disturbance-free electrical performance. Our solutions include load flow analysis, harmonic studies, power factor correction, transient analysis, and voltage stability assessments. Using advanced diagnostic tools and standards-based methodologies, we help identify inefficiencies, reduce energy losses, and optimize system performance across industrial and commercial facilities.",
  ];

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      let nextIndex = prev + direction;
      if (nextIndex < 0) return names.length - 1;
      if (nextIndex >= names.length) return 0;
      return nextIndex;
    });
  };
  return (
    <>
<Head>
  <title>Transbolt | India's Trusted Lightning Protection Experts</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta name="description" content="Transbolt provides certified lightning protection, earthing systems, and surge protection services across India. We help secure buildings, industries, and infrastructure with cutting-edge LPS solutions." />

  <meta property="og:title" content="Transbolt | Lightning Protection You Can Trust" />
  <meta property="og:description" content="Trusted by industries and institutions across India, Transbolt delivers full-service lightning protection and electrical safety solutions." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.transbolt.in" />
  <meta property="og:site_name" content="Transbolt" />

  <meta name="keywords" content="lightning protection, lightning arresters India, surge protection, earthing systems, Transbolt, LPS, IEC 62305, electrical safety solutions" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="..." crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap" rel="stylesheet" />
</Head>

      <div className="main1_Home">
        <div className="slider">
          <div className="slide active" style={{ backgroundImage: "url('./images/slide1.png')" }}>
            <h2>PROTECTING PEOPLE, PLACES & ENVIRONMENT</h2>
          </div>
          <div className="slide" style={{ backgroundImage: "url('./images/slide2.png')" }}>
            <h2>POWERING SAFETY, GROUNDING TRUST.</h2>
          </div>
          <div className="slide" style={{ backgroundImage: "url('./images/slide3.png')" }}>
            <h2>BUILT TO PROTECT, ENGINEERED TO LAST.</h2>
          </div>
        </div>
       <div className="container2_Home">
            <h2>OUR<span style={{ color: '#1f90ff', borderBottom: '3px solid #1f90ff' }}> SERVICES</span></h2>
            <div className="row2_HOme">
                <div className="col4_Home">
                    <img src="./images/page1.png" width="300px"/>
                    <h3>Advance  IS/IEC Lightning Protection</h3>
                    <p>With extensive expertise, we offer 
cutting-edge lightning protection
 design to safeguard critical Infras-
tructure, such as airports, high-
speed rail and metro projects, 
refineries, telecom sites, and high
-rise buildings.</p>
                </div>
                <div className="col5_Home">
                    <img src="./images/page2.png" width="300px"/>
<h3>Smart Earthing Solutions</h3>
<p>Our experienced team provides compreh 
ensive earthing solutions tailored to your 
project's  specific needs, ensuring the 
highest standards of safety and compli-
ance</p>
                </div>
                <div className="col6_Home">
<img src="./images/page3.png" width="300px"/>
                    <h3>
Solar & Battery Storage Projects as EPC</h3>
<p>Complete Solar EPC solutions for small and 
medium scale projects across India. We 
integrate advanced engineering, efficient 
procurement, and precise construction to 
convert solar potential into reliable, high-
performance energy infrastructure</p>
                </div>
                <div className="col7_Home">
                    <img src="./images/page4.png" width="300px"/>
<h3>Advance UL certified Fire Safety solution</h3>
<p>Our commitment to enhancing fire safety is 
recognized through the implementation of 
advanced UL-approved fire suppression 
systems, educating the public, and inno 
vating new technologies to improve fire 
prevention, protection, and response 
measures.</p>
                </div>
            </div>
        </div>
        <div className="container3_Home">
            <div className="row3_Home">
                <div className="col8_Home">
<img src="./images/logo1122.png" alt='logo1122' width={520}/>
                </div>
                <div className="col9_Home">
                    <h2>
  Committed to a
  <span style={{ color: '#1f90ff' }}> Greener Future</span>
</h2>
                    <p>At Transbolt, sustainability powers every connection. Our earthing, lightning,
and surge protection solutions are designed for safety, performance, and long
-term environmental responsibility.</p>
<ul>
  <li>  <FontAwesomeIcon icon={faSquare} style={{fontSize:"20px"}}/> We use eco-friendly, corrosion-resistant materials that reduce maintenance, waste, and lifecycle costs.</li>
  <li>  <FontAwesomeIcon icon={faSquare} style={{fontSize:"20px"}}/> Our systems minimize chemical use and water consumption through ETA-approved grounding agents ensuring safer, cleaner installations.</li>
  <li>  <FontAwesomeIcon icon={faSquare} style={{fontSize:"20px"}}/> Low-resistance grounding technology improves energy efficiency and reduces the environmental footprint.</li>
  <li>  <FontAwesomeIcon icon={faSquare} style={{fontSize:"20px"}}/> We help prevent equipment damage and downtime—reducing electronic waste and extending infrastructure life.</li>
  <li>  <FontAwesomeIcon icon={faSquare} style={{fontSize:"20px"}}/> Transbolt is UL, EU, ATEX, and IECEx certified, ensuring safe operation in hazardous and high-risk environments.</li>
</ul>
<p>We strictly follow national and international environmental standards,
supporting green building codes and smart infrastructure goals.<br/>Our engineering teams actively promote sustainable practices
across sectors like energy, transport, and telecom.</p>
{/* <a href="#">Work With Us</a> */}
                </div>
            </div>
        </div>


    <div className="container4_H">
      <div className="row4_H">
        <div className="col110_Home">
          <div className="arrow" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
           <FontAwesomeIcon icon={faArrowUp} style={{ color: "#2391fb" }} />
          </div>

          {names.map((name, i) => {

            const isNext = i === (currentIndex + 1) % names.length;
            const isPrev = i === (currentIndex - 1 + names.length) % names.length;
            const isVisible = i === currentIndex || isNext || isPrev;

            if (!isVisible) return null;

            return (
              <h2
                key={i}
                className={`name ${i === currentIndex ? "active visible" : ""}`}
                style={{ opacity: i === currentIndex ? 1 : 0.3 }}
              >
                {name}
              </h2>
            );
          })}

          <div className="arrow" onClick={() => navigate(1)} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faArrowDown}  style={{ color: "#2391fb" }}/>
          </div>
        </div>

        <div className="col111_Home">
          {descs.map((desc, i) => (
            <p
              key={i}
              className="desc"
              style={{ display: i === currentIndex ? "block" : "none" }}
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>


        
        <div className="container5_Home">
            <div className="row5_Home">
                <div className="col12_Home">
                    <img src="./images/experience.png" width="100px"/>
                    <h2>45+</h2>
                    <p>Years of Collective Experience</p>
                </div>
                <div className="col13_Home">
                    <img src="./images/task.png" width="100px"/>
<h2>500+</h2>
<p>Projects Completed</p>
                </div>
                <div className="col14_Home">
                    <img src="./images/award-symbol.png" width="100px"/>
<h2>10+</h2>
<p>Industry Awards</p>
                </div>
            </div>
        </div>


      </div>
    </>
  );
}
