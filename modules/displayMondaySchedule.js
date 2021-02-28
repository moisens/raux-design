import { fetchMondayData } from '../src/dataFetching.js';

const image_text = document.querySelector('.image-text');


const mondaySchedule = async () => {
  try{
    const mondays = await fetchMondayData();
    const newMonday = mondays.map(monday => {
      const { image, title, subtitle, hour, body } = monday;
      return `
      <img src="${image}" alt="${title}" title="${title}">
      <article class="schedule-texts">
        <h3>${title}</h3>
        <h4>${subtitle}</h4>
        <h4>${hour}</h4>
        <p>${body}</p>
      </article>
      `;
    }).join('');
   image_text.innerHTML = newMonday;
    
  }catch(error){
    console.log('Unable to fetch monday datas');
  }
}

export default mondaySchedule;