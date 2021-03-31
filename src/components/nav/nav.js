import('./nav.scss');
import NavActive from '../nav/navActive.js';

const nav = () => {
  const body = document.querySelector('body');
  const navigation = `
    <nav class="nav-container nav-scrolled">
      <div class="logo">Raux</div>
        <ul>
          <li><a href="home.html" class="active">HOME</a></li>
          <li><a href="schedule.html">SCHEDULE</a></li>
          <li><a href="booking.html">BOOKING</a></li>
          <li><a href="training.html">TRAINING</a></li>
        </ul>
      <div class="cart-connect-container">
        <p>CART</p>
        <button>CONNECTION</button>
      </div>
    <nav/>
  `;
  
  body.innerHTML += navigation;
  NavActive();


}
export default nav;