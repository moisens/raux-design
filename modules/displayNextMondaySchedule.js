import { fetchNextMondayData } from '../src/dataFetching.js';

const schedule_nextMonday = document.querySelector('#next-monday');

const nextMondaySchedule = async () => {
  try {
    const nextMonday = await fetchNextMondayData();
    const newNextMonday = nextMonday.map(lundi => {
    const { image, title, subtitle, hour, body } = lundi;
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
  schedule_nextMonday.innerHTML = newNextMonday;
  } catch (error) {
    console.log('Unable to fetch next monday data');
  }
}

export default nextMondaySchedule;