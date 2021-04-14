import './train.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg';
import displayTraining from './displayTraining.js';



const Training = () => {
  const body = document.querySelector('body');

  let newTraining = `
    <section class="training-container layout">
      <article class="train-img-text">
        <div class="train-image">
          <img src="" alt="Training-image" title="Training"/>
        </div>
        <div class="train-text">
          <h2>The training</h2>
          <p>
            Minimize backwards overflow waste of resources, 
            and we need a paradigm shift that is a good problem 
            to have but please submit the sop and uat files by 
            next monday bench mark, or win-win-win. We've got kpis 
            for that we need more paper, turn the crank, and form 
            without content style without meaning nail jelly to the 
            hothouse wall strategic staircase. Globalize overcome 
            key issues to meet key milestones agile.
          </p>
          <button type="button">REGISTER</button>
        </div>
      </article>
      <div class="curved-illustration">
        <img src="${curvedIlluReverse}" alt="curved-illustrtion-training"/>
      </div>
      <div class="training-courses">
        <h2>Courses</h2>
        <div class="courses-container"></div>
        <hr>
      </div>
    </section>
  `;
  body.innerHTML += newTraining;

  const init = async () => {
    const courses = document.querySelector('.courses-container');
    courses.innerHTML = await displayTraining();

    const allcourses = document.querySelectorAll('.one-course');
    

    allcourses.forEach(lesson => {
      const btns = lesson.querySelector('.course-btn');
      btns.addEventListener('click', () => {
        allcourses.forEach(course => {
          if (course !== lesson) {
            course.classList.remove('show-text');
          }
        });
        lesson.classList.toggle('show-text');
      });
    });


  }

  
  window.addEventListener('load', init);
}
export default Training;