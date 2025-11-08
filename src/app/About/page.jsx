'use client'

import { useState } from 'react';
import Popup from '../../Components/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import Head from 'next/head';
import '../../Styles/About.css';
import Image from 'next/image';
import Link from 'next/link';



export default function About() {
  const [showPopup, setShowPopup] = useState(false);
   const [showPopup1, setShowPopup1] = useState(false);
   const [showPopup2, setShowPopup2] = useState(false);
   const [showPopup3, setShowPopup3] = useState(false);



  const handleReadMoreClick = (e) => {
    e.preventDefault(); 
    setShowPopup(true);
  };

      const handleReadMoreClick1 = (e) => {
    e.preventDefault(); 
    setShowPopup1(true);
  };

        const handleReadMoreClick2 = (e) => {
    e.preventDefault(); 
    setShowPopup2(true);
  };

          const handleReadMoreClick3 = (e) => {
    e.preventDefault(); 
    setShowPopup3(true);
  };
  return (
    <>
      <Head>
        <title>About Us | Transbolt Lightning Protection Experts</title>
        <meta
          name="description"
          content="Learn more about Transbolt – India&apos;s trusted provider of lightning protection systems, earthing solutions, and surge protection. Experience. Innovation. Safety."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="About Transbolt | Lightning Protection Specialists" />
        <meta
          property="og:description"
          content="Transbolt is a leading lightning protection company in India, offering advanced earthing, surge protection, and LPS installation services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transbolt.in/About" />
        <meta property="og:site_name" content="Transbolt" />

        <meta
          name="keywords"
          content="about Transbolt, lightning protection company India, surge protection experts, earthing specialists, lightning arresters, LPS India"
        />
      </Head>

<div className="main1_About">
  <div className="container1_About">
    <div className="row1_About">
      <div className="about-column1 about-column">
        <Image src="/images/Brijesh1.jpg" width={299} height={405} alt="Arnav" />
        <h3>Brijesh Singh Malik</h3>
        <h4>Chief Executive Officer (CEO)</h4>
        <a href='#' className="read-more" onClick={handleReadMoreClick}>Read more</a>
      </div>
      <div className="about-column2 about-column">
        <Image src="/images/devesh1.jpg" width={290} height={390} alt="devesh" />
        <h3>Devesh Kr Jaiswal</h3>
        <h4>CTO & COO</h4>
        <a href='#' className="read-more" onClick={handleReadMoreClick1}>Read more</a>
      </div>
    </div>

{/* start popup setting */}
{/* 1 */}
<Popup show={showPopup} onClose={() => setShowPopup(false)}>
    <div className='cont1_About_Popup'>
      <div className='row1_About_Popup'>
        <div className='col1_About_Popup'>
           <Image src="/images/Brijesh1.jpg" width={299} height={405} alt="Arnav" />
        </div>
        <div className='col2_About_Popup'>
       <h3>Brijesh Singh Malik</h3><Link href="https://www.linkedin.com/in/brijesh-singh-malik-5356011b/?originalSubdomain=de"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px",color:"#1f90ff",marginBottom:"10px",cursor:"pointer"}}/></Link>
        <h4>Chief Executive Officer (CEO)</h4>
        </div>
      </div>
      <div className='row2_About_Popup'>
        <div className='col3_About_Popup'>
<p>Brijesh Singh Malik is a seasoned leader with over 25 years of experience in lightning protection, earthing systems, surge protection, and power quality services. His career includes a significant tenure in Germany, where he worked in global business development, bringing international perspective, strategic insight, and a strong commitment to excellence. A Chartered Engineer and Fellow of the Institution of Engineers (India), Brijesh has played a pivotal role in major infrastructure projects across India—ranging from airports to high-speed rail to critical energy installations. His technical expertise, and visionary leadership continue to drive Transbolt's mission to deliver innovative and dependable electrical safety solutions worldwide.</p>
        </div>
      </div>
    </div>
    </Popup>
{/* end 1 */}
{/* 2 */}
<Popup show={showPopup1} onClose={() => setShowPopup1(false)}>
    <div className='cont2_About_Popup'>
      <div className='row3_About_Popup'>
        <div className='col4_About_Popup'>
          <Image src="/images/devesh1.jpg" width={290} height={390} alt="devesh" />
        </div>
        <div className='col5_About_Popup'>
       <h3>Devesh Kr Jaiswal</h3><Link href="https://www.linkedin.com/in/devesh-jaiswal-abab9925/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px",color:"#1f90ff",marginBottom:"10px",cursor:"pointer"}}/></Link>
        <h4>CTO & COO</h4>
        </div>
      </div>
      <div className='row4_About_Popup'>
        <div className='col6_About_Popup'>
<p>With over 20 years of experience in lightning protection, surge protection, and earthing systems, he brings deep technical expertise and a strong execution mindset to TransBolt. A former Air Force communication specialist, he applies a disciplined, solutions-driven approach to every project. His unique blend of engineering acumen, operational insight, and attention to detail ensures Transbolt consistently delivers innovative, high-performance safety solutions for critical infrastructure across diverse sectors and challenging environments. His leadership has been instrumental in executing complex, large-scale projects with precision, shows commitment to excellence in electrical safety.</p>
        </div>
      </div>
    </div>
</Popup>
{/* end 2 */}


{/* 3 */}
<Popup show={showPopup2} onClose={() => setShowPopup2(false)}>

    <div className='cont3_About_Popup'>
      <div className='row5_About_Popup'>
        <div className='col7_About_Popup'>
        <Image src="/images/Arnav.png" width={290} height={405} alt="Arnav" />
        </div>
        <div className='col8_About_Popup'>
   <h3>Arnav Malik</h3><Link href="https://www.linkedin.com/in/arnav-malik-/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px",color:"#1f90ff",marginBottom:"10px",cursor:"pointer"}}/></Link>
        <h4>Marketing Strategist</h4>
        </div>
      </div>
      <div className='row6_About_Popup'>
        <div className='col9_About_Popup'>
<p>Arnav Malik brings fresh insight and global perspective to Transbolt’s marketing and strategy team as he embarks on his new journey after graduating from the University of Glasgow. With a strong academic foundation and a passion for strategic communication, Arnav is focused on elevating Transbolt’s brand presence across India and globe. He plays a key role in positioning the company as a trusted leader in earthing, lightning protection, and over-voltage solutions. Supporting projects across critical infrastructure sectors such as airports, metros, PV plants, and telecom networks.Arnav is applying his experience across the startup ecosystems of India and the UK—gaining hands-on insight into diverse entrepreneurial landscapes while contributing to real-world business growth.</p>
        </div>
      </div>
    </div>
</Popup>
{/* end 3 */}

{/* 4 */}
<Popup show={showPopup3} onClose={() => setShowPopup3(false)}>
    <div className='cont4_About_Popup'>
      <div className='row7_About_Popup'>
        <div className='col10_About_Popup'>
        
          <Image src="/images/himanshu.png" width={290} height={390} alt="himanshu" />
        
        </div>
        <div className='col11_About_Popup'>
<h3>Himanshu Singh</h3><Link href="https://www.linkedin.com/in/himanshu-singh-691a79129/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px",color:"#1f90ff",marginBottom:"10px",cursor:"pointer"}}/></Link>
        <h4>Fire Safety & Industrial Solutions AM</h4>
        </div>
      </div>
      <div className='row8_About_Popup'>
        <div className='col12_About_Popup'>
<p>Himanshu brings a multidisciplinary approach to his role as Assistant Manager of Fire and Industrial Solutions at Transbolt. With a background in Electrical and Electronics Engineering, he combines technical expertise with practical experience across electrical systems, mechanical operations and sales.Himanshu is always looking for innovative ways to optimize time, cost, and efficiency on-site. From planning fire safety system layouts to managing site execution and maintenance, he ensures that every solution is well-planned, effective, and future-ready.</p>
        </div>
      </div>
    </div>
</Popup>

{/* end 4 */}

{/* end popup seting */}


    <div className="row2_About">
      <div className="about-column3 about-column">
        <Image src="/images/Arnav.png" width={290} height={405} alt="Arnav" />
        <h3>Arnav Malik</h3>
        <h4>Marketing Strategist</h4>
        <a href='#' className="read-more" onClick={handleReadMoreClick2}>Read more</a>
      </div>
      <div className="about-column4 about-column">
        <Image src="/images/himanshu.png" width={290} height={390} alt="himanshu" />
        <h3>Himanshu Singh</h3>
        <h4>Fire Safety & Industrial Solutions AM</h4>
        <a href='#' className="read-more" onClick={handleReadMoreClick3}>Read more</a>
      </div>
    </div>
  </div>
</div>
    </>
  );
}


