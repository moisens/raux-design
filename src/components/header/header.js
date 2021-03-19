import './header.scss';

const header = () => {
  const body = document.querySelector('body');
  const textImg = `
    <section class="text-img-header header-container layout">
      <!--Header-text-container-->
      <div class="header-text-container">
        <div class="logo-header">Raux</div>
        <div class="titles-btns">
          <h1>IMAGINE AND DESIGN FOR HUMAN</h1>
          <h2>Research And Ux design conference</h2>
          <button>BOOKING</button>
          <button>TRAINING</button>
        </div>
      </div>
      <!--End Header-text-container-->
      <!--Header-images-container-->
      <div class="header-image-container">
        23456789
      </div>
      <!--End-Header-images-container-->
    </section>
  `;
  return body.innerHTML += textImg;
  
   
}

export default header;
