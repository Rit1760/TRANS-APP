import Link from "next/link"
import "../../Styles/AES.css"
import Image from "next/image"

export default function AES(){
  return(
    <>
    <div className="main1_AES">
      <div className="container1_AES">
        <div className="row1_AES">
          <div className="col1_AES">
            <h2><span style={{color:"#2290f9"}}>NIVARAK</span> -Advanced Lightning Prevention System</h2>
            <p> Certified Protection You Can Trust
 Our UL-Certified Lightning Prevention System
 offers state-of-the-art electrostatic field
 compensation technology — designed to
 proactively protect critical infrastructure, assets,
 and human life across industrial, commercial, and
 high-risk environments.</p>
          </div>
          <div className="col2_AES">
{/* <Image src="/images/Advance-Lightning.png" width={300} height={300} alt="Advance-Lightning" /> */}
<Image src="/images/ALS11.jpeg" width={300} height={300} alt="Advance-Lightning" />
          </div>
        </div>
      </div>
      <div className="container2_AES">
        <div className="row2_AES">
          <div className="col3_AES">
            <h3> Why Choose Our Lightning Prevention System?</h3>
            <h2>99% Lightning Risk Reduction</h2>
            <p> Neutralizes electrostatic charges, preventing the
 formation of lightning within its coverage area
 (radius up to 120 meters).
 In the rare event of a direct strike, the system
 acts as a thermal fuse, absorbing and
 dissipating energy safely.</p>
 <ul>
  <li>Tested & Certified for Global Standards</li>
  <li><span style={{color:"#2290f9"}}> ✓</span> UL 96 Cerified</li>
  <li><span style={{color:"#2290f9"}}> ✓</span> UNE 21186:2011 / NF C17-102:2011</li>
  <li><span style={{color:"#2290f9"}}> ✓</span> ISO 9001 & ISO 14001 </li>
  <li><span style={{color:"#2290f9"}}> ✓</span> NATO NOC Registered | CE & UKCA Marked</li>
 </ul>
 <h2> Optimisation of Down-Conductor</h2>
 <p> it minimizes lightning protection complexity by
 using just two down-conductors per system,
 regardless of height or area. This eliminates
 multiple conductor runs required every 10–20
 meters in conventional IS/IEC 62305-3 designs</p>
 <h2>Proven High Current Withstand Capability</h2>
 <p> Validated upto 100 kA (10/350 µs) discharge
 cycles without material deterioration (as per IEC
 62305 standards), ensuring reliable protection
 against severe storm events.</p>
 <h2>No Overvoltage Induction | No Fire Hazard</h2>
 <p> Unlike traditional lightning rods that attract
 discharges, our system prevents formation —
 eliminating over voltages, sparking risks, or
 electromagnetic disturbances.</p>
          </div>
          <div className="col4_AES">
            <Image src="/images/AES1.jpg" width={300} height={300} alt="AES1" />
          </div>
        </div>
      </div>
      <div className="container3_AES">
        <div className="row3_AES">
          <div className="col5_AES">
            <h3>Key Specifications</h3>
            <ul>
              <li>Coverage: 120m radius
 (Installed 3m above highest
 point)</li>
              <li>Weight: 9.45 kg | </li>
              <li>Dimensions: Ø 24 cm x 36.4 cm</li>
              <li> Max Voltage (no lightning
 formation) : 840KV</li>
 <li>Material: Aluminium</li>
            </ul>
          </div>
          <div className="col6_AES">
            <Image src="/images/OPD.png" width={500} height={300} alt="OPD" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}



// 'use client'
// import Image from "next/image";
// export default function AES() {
//   return (
//     <>
//     <div className="main1_AES">
//       <div className="container1_AES">
//         <div className="row1_AES">
//           <div className="col1_AES">
//             <Image src="/images/Advance-Lightning.png" width={333} height="303" alt="Earthing System" />
//           </div>
//           <div className="col2_AES">
//             <p>
//               Transbolt offers reliable and efficient earthing systems that ensure safety,
//               minimize electrical risks, and protect both people and equipment. Our solutions
//               are designed to meet the needs of modern infrastructure with long-term performance
//               and compliance.
//             </p>
//             <ul>
//               <li>Earthing design using CDEGS software tools</li>
//               <li>Maintenance-free chemical earthing with GI/SS/Cu/Al materials</li>
//               <li>Advanced True RMS Earthing monitoring system</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       </div>

//       <style jsx>{`
//       @font-face {
//   font-family: 'Lato';
//   src: url('/fonts/Lato/Lato-Regular.ttf') format('truetype');
//   font-weight: normal;
//   font-style: normal; 
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
//   font-weight: normal;
//   font-style: normal; 
// }
//       .main1_AES{
//       padding:30px 0px;
//       }
//         .container1_AES {
//           width: 100%;
//           margin: 0 auto;
//           padding: 20px;
//           margin-top:30px;
//           margin-bottom:30px;
//         }

//         .row1_AES {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           column-gap: 30px;
//           flex-wrap: wrap;
//         }

//         .col1_AES,
//         .col2_AES {
//           width: 45%;
//         }

//         .col1_AES img {
//           width: 50%;
//           height: auto;
//           display: block;
//         }

//         .col2_AES p {
//           font-size: 16px;
//           margin-bottom: 10px;
//           line-height: 1.6;
//           font-family:"poppins"
//         }

//         .col2_AES li {
//           font-size: 15px;
//           line-height: 1.5;
//           margin-bottom: 5px;
//            font-family:"poppins"
//         }

//         @media (max-width: 768px) {
//           .col1_AES,
//           .col2_AES {
//             width: 100%;
//           }

//           .row1_AES {
//             flex-direction: column;
//             row-gap: 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }