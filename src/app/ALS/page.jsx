'use client'
import Image from "next/image"
export default function ALS(){
    return(
        <>
        <div className="main1_ALS">
        <div className="container1_ALS">
            <div className="row1_ALS">
                <div className="col1_ALS">
<Image src="/images/ltpt.jpg" width={333} height={340} alt="two22"/>
                </div>
                <div className="col2_ALS">
<p>Transbolt's advanced lightning systems are engineered to safely redirect lightning strikes and protect critical infrastructure from damage. Designed for high performance and reliability, our solutions ensure uninterrupted safety in even the most demanding environments.</p>
               <li> Advance Lightning prevention system</li>
               <li>Smart Lightning Protection system</li>
               <li>Lightning monitoring and detection system</li>
               <li> IS / IEC based Lightning Protection</li>
                </div>
            </div>
        </div>
        </div>

              <style jsx>{`
                    @font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}
      .main1_ALS{
      padding:30px 0px;
      }
        .container1_ALS {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_ALS {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_ALS,
        .col2_ALS {
          width: 45%;
        }

        .col1_ALS img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_ALS p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_ALS li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }

        @media (max-width: 768px) {
          .col1_ALS,
          .col2_ALS {
            width: 100%;
          }

          .row1_ALS {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}