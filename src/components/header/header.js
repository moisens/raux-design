import './header.scss';
import headerbigImg from '../../images/headerbigImg.jpg';
import headersmallImg from '../../images/headersmallImg.jpg'
import nav from '../nav/nav.js';


const header = () => {
  nav();
  const body = document.querySelector('body');
  const textImg = `
    <section class="text-img-header header-container layout">
      <!--Header-text-container-->
      <div class="header-text-container">
        <div class="logo-header">Raux</div>
        <div class="titles-btns">
          <h1>IMAGINE AND DESIGN FOR HUMAN</h1>
          <h2>Research And Ux design conference</h2>
          <button class="btn-booking">BOOKING</button>
          <button class="btn-training">TRAINING</button>
        </div>
      </div>
      <!--End Header-text-container-->
      <!--Header-images-container-->
      <div class="header-image-container">
        <div class="header-small-img">
        <img src="${headersmallImg}" alt="small image conference" alt="Conference room" />
        </div>
        <div class="header-big-img">
          <img src="${headerbigImg}" alt="small image conference" alt="Conference room" />
        </div>
      </div>
      <!--End-Header-images-container-->
    </section>
  `;
  return body.innerHTML += textImg;
  
   
}

export default header;
