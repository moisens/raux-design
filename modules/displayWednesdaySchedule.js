import { fetchWednesdayData } from '../src/dataFetching.js';

const schedule_wednesday = document.querySelector('#wednesday');

const Wednesday_schedule = async () => {
  try {
    const wednesday = await fetchWednesdayData();
    const newWednesday = wednesday.map(wedShedule => {
      console.log(wedShedule);
      const { image, title, subtitle, hour, body } = wedShedule;
      return`
      <div class="image-text">
      <img src="${image}" alt="${title}" title="${title}">
      <article class="schedule-texts">
        <h3>${title}</h3>
        <h4>${subtitle}</h4>
        <h4>${hour}</h4>
        <p>${body}</p>
      </article>
    </div>
      `;
    }).join('');
    schedule_wednesday.innerHTML = newWednesday;
  } catch (error) {
    console.log('Unable to fetch wednesday data');
  }

}

export default Wednesday_schedule;