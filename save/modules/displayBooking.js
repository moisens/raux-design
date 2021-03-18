import { fetchBookingData } from '../src/dataFetching.js';

const article_booking = document.querySelector('.booking-pass');


const displayBook = async () => {
  try {
    const booking = await fetchBookingData();
    const newBooking = booking.map(book => {
      const { title, price, buy, body } = book;
      return`
        <div class="oneday">
          <div class="text">
            <div class="text-descript">
              <h3>${title}</h3>
              <p>${body}</p>
            </div>
            <div class="buy">${buy}</div>
          </div>
          <div class="colour">
            <p>${price}</p>
          </div>
        </div>
      `;
    }).join('');
    article_booking.innerHTML = newBooking;
  } catch (error) {
    console.log('Unable to fetch booking data');
  }
}

export default displayBook;