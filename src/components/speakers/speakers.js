import './speakers.scss';



const speakers = () => {
  const body = document.querySelector('body');
  let speaker = `
    <section class="speaker-container layout">
      <h2>Speakers</h2>
      <!--Speaker One-->
      <div class="one-speaker-image-text">
        <div class="one-speaker-image">IMG</div>
        <div class="one-speaker-text">
          <h3>LEOPOLDE OUELLET</h3>
          <h4>Senior Ux designer and Front-end developer</h4>
          <p>
            Overcome key issues to meet key milestones gain traction 
            we need to aspirationalise our offerings for touch base or 
            loop back, and idea shower. Knowledge process outsourcing 
            open door policy I have zero cycles for this, so get buy-in.
          </p>
          <button>LINKEDIN</button>
          <button>WEBSITE</button>
        </div>
      </div>
      <!--End Speaker One-->
      <!--Speaker Two-->
      <div class="one-speaker-image-text">
        <div class="one-speaker-text">
          <h3>LEOPOLDE OUELLET</h3>
          <h4>Senior Ux designer and Front-end developer</h4>
          <p>
            Overcome key issues to meet key milestones gain traction 
            we need to aspirationalise our offerings for touch base or 
            loop back, and idea shower. Knowledge process outsourcing 
            open door policy I have zero cycles for this, so get buy-in.
          </p>
          <button>LINKEDIN</button>
          <button>WEBSITE</button>
        </div>
        <div class="one-speaker-image">IMG</div>
      </div>
      <!--End Speaker Two-->
      <!--Speaker Thee-->
      <div class="one-speaker-image-text">
        <div class="one-speaker-image">IMG</div>
        <div class="one-speaker-text">
          <h3>LEOPOLDE OUELLET</h3>
          <h4>Senior Ux designer and Front-end developer</h4>
          <p>
            Overcome key issues to meet key milestones gain traction 
            we need to aspirationalise our offerings for touch base or 
            loop back, and idea shower. Knowledge process outsourcing 
            open door policy I have zero cycles for this, so get buy-in.
          </p>
          <button>LINKEDIN</button>
          <button>WEBSITE</button>
        </div>
      </div>
      <!--End Speaker Three-->
    </section>
  `;
  return body.innerHTML += speaker;
}
export default speakers;