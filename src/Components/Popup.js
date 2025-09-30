// components/Popup.js

export default function Popup({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
      <style jsx>{`
          .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup-content {
          background: white;
          padding: 0;
          border-radius: 8px;
          width: 90%;
          max-width: 1000px;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 30px;
          cursor: pointer;
          z-index: 10000;
        }

        @media (max-width: 480px) {
          .popup-content {
            padding: 15px;
            border-radius: 8px;
          }

          .close-button {
            font-size: 20px;
          }
        }

        @media (min-width: 481px) and (max-width: 1024px) {
          .popup-content {
            max-width: 90%;
            padding: 18px;
          }
        }

        /* Large desktops */
        @media (min-width: 1025px) {
          .popup-content {
            max-width: 1000px;
          }
        }
          @media (min-width:375px) and (max-width:667px){
                .close-button {
          position: absolute;
          top: 20rem;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 40px;
          cursor: pointer;
          z-index: 10000;
        }
                  .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: auto;
          padding: 20px;
        }
          }
          @media (min-width:414px) and (max-width:896px){
                         .close-button {
          position: absolute;
          top: 10rem;
        }}
          @media (min-width:390px) and (max-width:844px){
           .close-button {
          top: 11rem;
      }}
            @media (min-width:412px) and (max-width:915px){
             .close-button {
          top: 9.5rem;
      }}
                   @media (min-width:768px) and (max-width:1024px){
             .close-button {
          top: 0rem;
      }}

      `}</style>
    </div>
  );
}