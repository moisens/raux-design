import FetchData from '../Fetchdata/FetchData.js'



const displaySpeaker = async () => {
  const url = 'http://localhost:3001/speakers';

  const speakers = await FetchData(url);
  const newSpeakers = speakers.map(speaker => {
    const { title, subtitle, body, image } = speaker;
    return `
    <!--Speaker One-->
    <div class="one-speaker-image-text">
      <div class="one-speaker-image">
        <img src="" alt="${title}" title="${title}">
      </div>
      <div class="one-speaker-text">
        <h3>${title}</h3>
        <h4>${subtitle}</h4>
        <p>${body}</p>
        <button>LINKEDIN</button>
        <button>WEBSITE</button>
      </div>
    </div>
    <!--End Speaker One-->
    `;
  }).join('');
  return newSpeakers;
}
export default displaySpeaker;