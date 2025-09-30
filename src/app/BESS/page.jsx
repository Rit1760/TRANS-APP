'use client'
import Image from "next/image"
export default function BESS(){
    return(
        <>
        <div className="main1_BESS">
        <div className="container1_BESS">
            <div className="row1_BESS">
                <div className="col1_BESS">
<Image src="/images/BESS.png" width={333} height={303} alt="BESS"/>
                </div>
                <div className="col2_BESS">
                    <p>Transbolt Battery Energy Storage Systems (BESS) deliver reliable backup, peak shaving, and grid support with scalable, modular designs. ESG-compliant and future-ready, they reduce operating costs while ensuring efficient, safe, and sustainable energy optimization for industrial, commercial, and utility applications.</p>
  <li>Coverage: 120m radius (Installed 3m above highest point)</li>
               <li> Weight: 10.49 kg | Dimensions: Ø 20.8 cm x 54.9 cm</li>
               <li>Max Operating Voltage: 515.41 kV/m w/o lightning discharge</li>
               <li> Packaging: Heavy-duty galvanized metallic casing</li>
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
      .main1_BESS{
      padding:30px 0px;
      }
        .container1_BESS {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_BESS {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_BESS,
        .col2_BESS {
          width: 45%;
        }

        .col1_BESS img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_BESS p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_BESS li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }

        @media (max-width: 768px) {
          .col1_BESS,
          .col2_BESS {
            width: 100%;
          }

          .row1_BESS {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}