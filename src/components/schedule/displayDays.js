import FetchData from '../Fetchdata/FetchData.js';

export const displayMonday = async () => {
  const url = 'http://localhost:3001/monday'
  const lundiAgendas = await FetchData(url);

  const newLundiAgenda = lundiAgendas.map(monday => {
    const { image, title, subtitle, hour, body } = monday;
    return `
      <div class="d-day-agenda">
        <div class="talk-day-img">
          <img src="" alt="${subtitle}" title="${subtitle}">
        </div>
        <div class="about-talk">
          <h3>${title}</h3>
          <h5>${subtitle}</h5>
          <h6>${hour}</h6>
          <p>${body}</p>
        </div>
      </div>
    `;
  }).join('');
  return newLundiAgenda;
}


export const displayTuesday = async () => {
  const url = 'http://localhost:3001/tuesday';
  const mardiAgendas = await FetchData(url);

  const newMardiAgenda = mardiAgendas.map(mardiAgenda => {
    const { image, title, subtitle, hour, body } = mardiAgenda;
    return `
      <div class="d-day-agenda">
        <div class="talk-day-img">
          <img src="" alt="${subtitle}" title="${subtitle}">
        </div>
        <div class="about-talk">
          <h3>${title}</h3>
          <h5>${subtitle}</h5>
          <h6>${hour}</h6>
          <p>${body}</p>
        </div>
      </div>
    `;
  }).join('');
  return newMardiAgenda;
}

export const displayWednesday = async () => {
  const url = 'http://localhost:3001/wednesday';
  const wednesdayAgendas = await FetchData(url);

  const newWednesdayAgenda = wednesdayAgendas.map(wednesday => {
    const { image, title, subtitle, hour, body } = wednesday;
    return `
      <div class="d-day-agenda">
        <div class="talk-day-img">
          <img src="" alt="${subtitle}" title="${subtitle}">
        </div>
        <div class="about-talk">
          <h3>${title}</h3>
          <h5>${subtitle}</h5>
          <h6>${hour}</h6>
          <p>${body}</p>
        </div>
      </div>
    `;
  }).join('');
  return newWednesdayAgenda;

}

export const displayThursday = async () => {
  const url = 'http://localhost:3001/thursday';
  const thursdayAgendas = await FetchData(url);

  const newThursdayAgenda = thursdayAgendas.map(thursday => {
    const { image, title, subtitle, hour, body } = thursday;
    return `
      <div class="d-day-agenda">
        <div class="talk-day-img">
          <img src="" alt="${subtitle}" title="${subtitle}">
        </div>
        <div class="about-talk">
          <h3>${title}</h3>
          <h5>${subtitle}</h5>
          <h6>${hour}</h6>
          <p>${body}</p>
        </div>
      </div>
    `;
  }).join('');
  return newThursdayAgenda;

}
