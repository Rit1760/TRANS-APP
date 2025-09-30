'use client'
import Image from "next/image"
export default function PQA(){
    return(
        <>
        <div className="main1_PQA">
        <div className="container1_PQA">
            <div className="row1_PQA">
                <div className="col1_PQA">
                    <Image src="/images/ser4.png" width={333} height={303} alt="ser44"/>
                </div>
                <div className="col2_PQA">
                    <p>Power System Studies to help industries, utilities, and infrastructure projects design and maintain electrical systems that are safe, optimized, and resilient. Our studies ensure your electrical network performs reliably — even under fault or load stress conditions.</p>
                <li>Analyze and optimize electrical networks</li>
                <li> Perform load flow and protection studies</li>
                <li> Use simulations to ensure system stability</li>
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
      .main1_PQA{
      padding:30px 0px;
      }
        .container1_PQA {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_PQA {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_PQA,
        .col2_PQA {
          width: 45%;
        }

        .col1_PQA img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_PQA p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_PQA li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }

        @media (max-width: 768px) {
          .col1_PQA,
          .col2_PQA {
            width: 100%;
          }

          .row1_PQA {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}