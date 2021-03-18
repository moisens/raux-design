import { fetchThursdayData } from '../src/dataFetching.js';

const thursday_shedule = document.querySelector('#thursday');

const thursdaySchedule = async () => {
  try {
    const thursday = await fetchThursdayData();
    const newThursday = thursday.map(jeudi => {
      const { image, title, subtitle, hour, body } = jeudi;
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
    thursday_shedule.innerHTML = newThursday;
  } catch (error) {
      console.log('Unable to fetch thursday data');
  }
}

export default thursdaySchedule;