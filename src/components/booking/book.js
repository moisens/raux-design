import './book.scss';



const book = () => {
  const body = document.querySelector('body');

  let newBooking = `
    <section class="booking-container layout">
      <h2>Want to learn more about Research & Ux design?</h2>
      <h4>Choose your pass…</h4>
      <!--container pass & images-->
      <div class="pass-image-content">
        <div class="choose-pass">
          <div class="one-pass">
            <div class="pass-content">
              <div class="about-pass">
                <h3>One day pass</h3>
                <p>What about scaling component.</p>
              </div>
              <div class="purple">
                <p class="price-pass">€100</p>
              </div>
            </div>
            <div class="buy">BUY</div>
          </div>
          <div class="one-pass">
            
          </div>
          <div class="one-pass">
            
          </div>
          <div class="one-pass">
            
          </div>
          <div class="one-pass">
            
          </div>
          <div class="one-pass">
            
          </div>
        </div>
        <div class="image-pass">IMG</div>
      </div>
    <!--End container pass & images-->
    <p>Schedule a day, come and visit us <span class="rendez-vous">From Jan 13 to Jan 18</span></p>
    <!--Formulaire-->
    <div class="form-rdv-seat">
      <form>
        <input type="text" class="name" placeholder="Firstname"/>
        <input type="text" class="name" placeholder="Lastname"/>
        <input type="email" class="email" placeholder="Your email"/>
        <input type="date" class="date" placeholder="Choose a date"/>
        <button>BOOK</button>
      </form>
      <div class="seat-left">
        <p>80 seats left</p>
      </div>
    </div>
    <!--End Formulaire-->
    <div class="curved-illu-book">2</div>
    </section>
  `;
  return body.innerHTML += newBooking;
}
export default book;