import react from "react";
import './Nft.css';



 function Nft() {
     return (
    <div className="nft">
            <div class="card">
                <div class="image">
                    <img src="images/image-equilibrium.jpg" alt="" class="mainImg" />
                <div>
                <img src="images/icon-view.svg" alt="" />
                </div>
                </div>
                <h3>Equilibrium #3429</h3>
                <div class="description">
        Our Equilibrium collection promotes balance and calm.
      </div>
      <div class="price-days">
        <div class="price">
          <img src="images/icon-ethereum.svg" alt="" />
          0.041 ETH
        </div>
        <div class="days">
          <img src="images/icon-clock.svg" alt="" />
          3 days left
        </div>
      </div>
      <div class="creator">
        <img src="images/image-avatar.png" alt="" width="30px" class="avatar" />

        Creation of <span>Jules Wyvern</span>
      </div>
    </div>
    </div>
     );

 }
  export default Nft;