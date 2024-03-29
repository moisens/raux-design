const displaySpeaker = (speakerList) => {
  const newSpeakers = speakerList.map(speaker => {
    
    const { title, subtitle, body, image } = speaker;
    return `
    <div class="one-speaker-image-text">
      <div class="one-speaker-image">
        <img src="" alt="${title}" title="${title}"/>
      </div>
      <div class="one-speaker-text">
        <h3>${title}</h3>
        <h4>${subtitle}</h4>
        <p>${body}</p>
        <button>LINKEDIN</button>
        <button>WEBSITE</button>
      </div>
    </div>
    `;
  }).join('');
  const theSpeakers = document.querySelector('.all-speaker-content');
  theSpeakers.innerHTML += newSpeakers;
  
  
}
export default displaySpeaker;