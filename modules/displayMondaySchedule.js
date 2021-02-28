import { fetchMondayData } from '../src/dataFetching.js';

const shedule_monday = document.querySelector('#monday');


const mondaySchedule = async () => {
  try{
    const mondays = await fetchMondayData();
    const newMonday = mondays.map(monday => {
      const { image, title, subtitle, hour, body } = monday;
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
   shedule_monday.innerHTML = newMonday;
    
  }catch(error){
    console.log('Unable to fetch monday datas');
  }
}

export default mondaySchedule;