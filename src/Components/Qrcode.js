import react from "react";
import './Qrcode.css';
import img1 from './images/logo.png';



 function Qrcode() {
     return (
    <div className="qrcode">
            <div class="container">
            <img src={img1} alt="" />
            <div className="text">
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
    </div>
          
     );

 }
  export default Qrcode;