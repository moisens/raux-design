import Fetchdata from '../Fetchdata/FetchData.js';



const displayBooking = async () => {
  const url = 'http://localhost:3001/bookings';
  const tickets = await Fetchdata(url);
  
  const newTicket = tickets.map(ticket => {
    const { title, price, buy, body } = ticket;
    return `
      <div class="one-pass">
        <div class="pass-content">
          <div class="about-pass">
            <h3>${title}</h3>
            <p class="pass-text">${body}</p>
          </div>
          <p class="price-pass">${price}</p>
          <div class="purple"></div>
        </div>
        <div class="buy">
          <p>${buy}</p>
        </div>
      </div>
    `;
  }).join('');
  return newTicket;

}
export default displayBooking;