'use client'
import Image from "next/image";
export default function AES() {
  return (
    <>
    <div className="main1_AES">
      <div className="container1_AES">
        <div className="row1_AES">
          <div className="col1_AES">
            <Image src="/images/Advance-Lightning.png" width={333} height="303" alt="Earthing System" />
          </div>
          <div className="col2_AES">
            <p>
              Transbolt offers reliable and efficient earthing systems that ensure safety,
              minimize electrical risks, and protect both people and equipment. Our solutions
              are designed to meet the needs of modern infrastructure with long-term performance
              and compliance.
            </p>
            <ul>
              <li>Earthing design using CDEGS software tools</li>
              <li>Maintenance-free chemical earthing with GI/SS/Cu/Al materials</li>
              <li>Advanced True RMS Earthing monitoring system</li>
            </ul>
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
      .main1_AES{
      padding:30px 0px;
      }
        .container1_AES {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
          margin-top:30px;
          margin-bottom:30px;
        }

        .row1_AES {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_AES,
        .col2_AES {
          width: 45%;
        }

        .col1_AES img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_AES p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_AES li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
           font-family:"poppins"
        }

        @media (max-width: 768px) {
          .col1_AES,
          .col2_AES {
            width: 100%;
          }

          .row1_AES {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
    </>
  );
}