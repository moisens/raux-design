import './about.scss';
import headersmallImg from '../../images/headersmallImg.jpg';
import cuvedForm from '../../images/cuvedForm.svg';
import Countdown from './countdown.js';


const about = () => {
  const body = document.querySelector('body');
  
  let about = `
    <section class="about-container layout">
      <div class="about-all-content">
        <div class="yellow-form-One"><div class="form-One"></div></div>
        <div class="about-text-image">
          <div class="image-about">
            <img src="${headersmallImg}" alt="about-image" alt="About"/>
          </div>
          <div>
            <h2>About</h2>
            <p>
              Conversational content this is our north 
              star design or who's the goto on this job 
              with the way forward , dunder mifflin we’
              re all in this together, even if our businesses
              function differently three-martini lunch. 
              Strategic high-level 30,000 ft view the horse 
              is out of the barn for today shall be a cloudy day, 
              thanks to blue sky thinking, we can now deploy our 
              new ui to the cloud single wringable neck for the 
              last person we talked to said this would be ready code.
            </p>
            <div class="count-down">
              <p class="count-message">The conference will start in</p>
              <div class="days-container">
                  <div class="left-days">
                    <p></p>
                    <h4>DAYS</h4>
                  </div>
                  <div class="left-hour">
                    <p></p>
                    <h4>HOURS</h4>
                  </div>
                  <div class="left-minutes">
                    <p></p>
                    <h4>MINUTES</h4>
                  </div>
                  <div class="left-seconds">
                    <p></p>
                    <h4>SECONDS</h4>
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
        <div class="yellow-form-Two"><div class="form-two"></div></div>
      </div>
      <div class="about-curved-illu">
        <img src="${cuvedForm}" alt="curved-form"/>
      </div>
      
    </section>
  `;
  body.innerHTML += about;
  let countdownActive = setInterval(Countdown,1000);
  Countdown();


}
export default about;

