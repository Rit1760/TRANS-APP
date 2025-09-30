'use client'
import Image from "next/image"
export default function SOV(){
    return(
      
        <>
        <div className="mainm1_SOV">
        <div className="container1_SOV">
            <div className="row1_SOV">
                <div className="col1_SOV">
                    <Image src="/images/three3.png" width={333} height={303} alt="three33"/>
                </div>
                <div className="col2_SOV">
                    <p>Transbolt's smart over-voltage protection systems are designed to detect and neutralize voltage spikes instantly, safeguarding sensitive equipment and infrastructure. With real-time response and advanced technology, we ensure continuous protection against power surges and electrical faults.</p>
                <li> Smart Surge Protection for low voltage power system</li>
                <li> Surge protection for communication & signaling systems</li>
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

      .main1_SOV{
      padding:30px 0px;
      }
        .container1_SOV {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_SOV {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_SOV,
        .col2_SOV {
          width: 45%;
        }

        .col1_SOV img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_SOV p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_SOV li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"
        }

        @media (max-width: 768px) {
          .col1_SOV,
          .col2_SOV{
            width: 100%;
          }

          .row1_SOV {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}




