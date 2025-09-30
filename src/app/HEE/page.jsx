'use client'
import Image from "next/image"
export default function HEE(){
    return(
        <>
        <div className="main1_HEE">
     
        <div className="container1_HEE">
            <div className="row1_HEE">
                <div className="col1_HEE">
                    <Image src="/images/ser2.png" width={333} height={303} alt="ser32"/>
                </div>
                <div className="col2_HEE">
                    <p>Earthing (or grounding) simulations use electrical modeling tools to analyze how electrical currents—especially fault and lightning currents—disperse into the ground. This helps design systems that protect people, equipment, and infrastructure effectively</p>
                <li>Earthing design using simulations</li>
                <li>Earthing audits and installation</li>
                <li>Online Earthing monitoring system</li>
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
      .main1_HEE{
      padding:30px 0px;
      }
        .container1_HEE {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_HEE {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_HEE,
        .col2_HEE {
          width: 45%;
        }

        .col1_HEE img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_HEE p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_HEE li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }

        @media (max-width: 768px) {
          .col1_HEE,
          .col2_HEE {
            width: 100%;
          }

          .row1_HEE {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}