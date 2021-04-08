import './book.scss';
import cuvedForm from '../../images/cuvedForm.svg';
import displayBooking from './displayBooking.js';

const book = () => {
  const body = document.querySelector('body');

  let newBooking = `
    <section class="booking-container layout">
      <h2>Want to learn more about Research & Ux design?</h2>
      <h4>Choose your pass…</h4>
      <!--container pass & images-->
      <div class="pass-image-content">
        <!--ticket container-->
        <div class="choose-pass">
          
        </div>
        <!--End ticket container-->
        <div class="image-pass">IMG</div>
      </div>
    <!--End container pass & images-->
    <h4>Schedule a day, come and visit us <span class="rendez-vous">From Jan 13 to Jan 18</span></h4>
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
    <div class="curved-illu-book">
      <img src="${cuvedForm}" alt="curved illistration booking"/>
    </div>
    </section>
  `;
  body.innerHTML += newBooking;

  const init = async () => {
    const pass = document.querySelector('.choose-pass');
    pass.innerHTML = await displayBooking();
  }


  window.addEventListener('load', init);
}
export default book;