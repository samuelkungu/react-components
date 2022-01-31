import react from "react";
import './Nft.css';
import img1 from './images/image-equilibrium.jpg';
import img2 from './images/icon-view.svg';
import img3 from './images/icon-ethereum.svg';
import img4 from './images/icon-clock.svg';
import img5 from './images/image-avatar.png';



 function Nft() {
     return (
<div className="nft">
  <div class="container">
      <div class="wrapper">
          <div class="img-top">
              <img src={img1} alt=""/>
            <div class="img-overlay">
              <img src={img2} alt=""/>
            </div>
          </div>
        <div class="box-text">
              <a href="">Equilibrium #3429</a>
              <p>Our Equilibrium collection promotes balance and calm.</p>
          <div class="flex">
              <div class="eth">
                  <img src={img3} alt=""/>
                  <p>0.041 ETH</p>
                </div>
              <div class="days">
                <img src={img4} alt=""/>
                <p>3 days left</p>
                <hr/>
                <div class="author">
                  <img src={img5} alt=""/>
                    <p>Creation of <a href="#" class="name">Jules Wyvern</a></p>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     );

 }
  export default Nft;