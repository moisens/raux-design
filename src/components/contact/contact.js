import './contact.scss';



const contact = () => {
  const body = document.querySelector('body');

  let contact = `
    <section class="contact-container layout">
      <div class="newsletter-address">
        <div class="newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form>
            <input type="text"/>
            <button>Subscribe</button>
          </form>
          <div class="social-networks">
            <div class="social">In</div>
            <div class="social">T</div>
            <div class="social">F</div>
          </div>
        </div>
        <p class="address">
          Rue Bara 175<br>
          1070 Anderlecht<br><br>
          Tel: 02/ 521.23.12.66
          www.Raux.d.be
        </p>
      </div>
      <div class="map">
        <div class="map-container">
          <div class="mapouter"><div class="gmap_canvas"><iframe width="340" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=175%20rue%20bara&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yggtorrent-fr.com">yggtorrent</a><br><style>.mapouter{position:relative;text-align:right;height:300px;width:340px;}</style><a href="https://www.embedgooglemap.net">google map iframe generator</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:340px;}</style></div></div>
        </div>
      </div>
    </section>
  `;
  return body.innerHTML += contact;
}
export default contact;