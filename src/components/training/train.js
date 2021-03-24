import './train.scss';



const Training = () => {
  const body = document.querySelector('body');

  let newTraining = `
    <section class="training-container layout">
      <article class="train-img-text">
        <div class="train-image">
          <img src="" alt="Training-image" />
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
      <div class="curved-illustration"></div>
      <div class="training-courses">
        <h2>Courses</h2>
        <div class="courses-container">
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <p>Title of the course</p>
              <button type="button" class="course-btn">
                <span class="plus-icon">+</span>
                <span class="minus-icon">-</span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <img src="" alt="image-course"/>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 ★★★★☆</p>
                </div>
                <p>
                Put your feelers out please submit the sop and uat files...Read more
                </p>
              </div>
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
        </div>
      </div>
    </section>
  `;
  return body.innerHTML += newTraining;
}
export default Training;