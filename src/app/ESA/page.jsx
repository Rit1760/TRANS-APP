'use client'
import Image from "next/image"
export default function ESA(){
    return(
        <>
        <div className="main1_ESA">
        <div className="container1_ESA">
            <div className="row1_ESA">
                <div className="col1_ESA">
<Image src="/images/ser3.png" width={333} height={303} alt="ser33"/>
                </div>
                <div className="col2_ESA">
                    <p>An Electrical Safety Audit is a systematic evaluation of your electrical infrastructure — from wiring and earthing to panels and surge protection — to identify potential risks, non-compliance, or inefficiencies. It helps reduce the chances of electrical fires, equipment failures, or fatal accidents</p>
               <li>Identify and eliminate electrical hazards</li>
               <li> Ensure compliance with safety standards</li>
               <li>Detect faults with thermal imaging</li>
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
  
      .main1_ESA{
      padding:30px 0px;
      }

        .container1_ESA {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_ESA {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_ESA,
        .col2_ESA {
          width: 45%;
        }

        .col1_ESA img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_ESA p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_ESA li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"
        }

        @media (max-width: 768px) {
          .col1_ESA,
          .col2_ESA {
            width: 100%;
          }

          .row1_ESA {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}
