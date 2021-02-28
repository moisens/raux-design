import { fetchTuesdayData } from '../src/dataFetching.js';

const shedule_tuesday = document.querySelector('#tuesday');

const tuesdaySchedule = async () => {
  try {
    const tuesday = await fetchTuesdayData();
    console.log(tuesday);
    const newTuesday = tuesday.map(mardi => {
      const { image, title, subtitle, hour, body } = mardi;
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
    shedule_tuesday.innerHTML = newTuesday;

  } catch (error) {
    console.log('Unable to fetch tuesday data');
  }
}

export default tuesdaySchedule;