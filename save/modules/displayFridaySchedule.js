import { fechtFridayData } from '../src/dataFetching.js';

const friday_schedule = document.querySelector('#friday');


const fridaySchedule = async () => {
  try {
    const friday = await fechtFridayData();
    const newFriday = friday.map(vendredi => {
      const { image, title, subtitle, hour, body } = vendredi;
      return `
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
    friday_schedule.innerHTML = newFriday;
  } catch (error) {
    console.log('Unable to fetch friday data');
  }
  
}

export default fridaySchedule;