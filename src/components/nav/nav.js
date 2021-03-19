import './nav.scss'



const nav = () => {
  const body = document.querySelector('body');
  const navigation = `
    <nav class="nav-container nav-scrolled">
      <div class="logo">Raux</div>
      <ul>
        <li><a href="home.html">HOME</a></li>
        <li><a href="schedule.html">SCHEDULE</a></li>
        <li><a <a href="booking.html">BOOKING</a></li>
        <li><a <a href="training.html">TRAINING</a></li>
      </ul>
      <div class="cart-connect-container">
        <p>CART</p>
        <button>CONNECTION</button>
      </div>
    <nav/>
  `;
  return body.innerHTML += navigation;


}
export default nav;