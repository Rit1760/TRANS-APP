'use client'
import Image from "next/image"
export default function AUC(){
    return(
        <>
        <div className="main1_AUC">
        <div className="container1_AUC">
            <div className="row1_AUC">
                <div className="col1_AUC">
<Image src="/images/Fire-Safety.png" width={333} height={303} alt="Fire-Safety"/>
                </div>
                <div className="col2_AUC">
                    <p>Transbolt offers advanced, UL-certified fire safety solutions designed to meet global safety standards. Our systems are engineered to detect, respond, and prevent fire hazards in high-risk electrical and industrial environments — ensuring maximum protection and compliance.</p>
               <li>Eco-friendly: ETA-approved agents</li>
               <li> Certified: UL, EU, ATEX, IECEx for hazardous areas</li>
               <li>Sustainable green technology reducing impact</li>
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
      .main1_AUC{
      padding:30px 0px;
      }
        .container1_AUC {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_AUC {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_AUC,
        .col2_AUC {
          width: 45%;
        }

        .col1_AUC img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_AUC p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_AUC li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }

        @media (max-width: 768px) {
          .col1_AUC,
          .col2_AUC {
            width: 100%;
          }

          .row1_AUC {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}