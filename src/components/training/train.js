import './train.scss';
import curvedIlluReverse from '../../images/curvedIlluReverse.svg'



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
        <div class="courses-container">
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <h4>Title of the course</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <div class="course-image">
                <img src="" alt="image-course"/>
              </div>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 <span class="star">★★★★☆</span></p>
                </div>
              </div>
              <p>
                Put your feelers out please submit the sop and uat files...<span class="read-more">Read more</span>
              </p>
              
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <h4>Title of the course</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <div class="course-image">
                <img src="" alt="image-course"/>
              </div>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 <span class="star">★★★★☆</span></p>
                </div>
              </div>
              <p>
                Put your feelers out please submit the sop and uat files...<span class="read-more">Read more</span>
              </p>
              
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <h4>Title of the course</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <div class="course-image">
                <img src="" alt="image-course"/>
              </div>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 <span class="star">★★★★☆</span></p>
                </div>
              </div>
              <p>
                Put your feelers out please submit the sop and uat files...<span class="read-more">Read more</span>
              </p>
              
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <h4>Title of the course</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <div class="course-image">
                <img src="" alt="image-course"/>
              </div>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 <span class="star">★★★★☆</span></p>
                </div>
              </div>
              <p>
                Put your feelers out please submit the sop and uat files...<span class="read-more">Read more</span>
              </p>
              
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <h4>Title of the course</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <div class="course-image">
                <img src="" alt="image-course"/>
              </div>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 <span class="star">★★★★☆</span></p>
                </div>
              </div>
              <p>
                Put your feelers out please submit the sop and uat files...<span class="read-more">Read more</span>
              </p>
              
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
          <!--Single course-->
          <article class="one-course">
            <!--course title-->
            <div class="course-title">
              <h4>Title of the course</h4>
              <button type="button" class="course-btn">
                <span class="plus-icon"><div>+</div></span>
                <span class="minus-icon"><div>-</div></span>
              </button>
            </div>
            <!--End course title-->
            <!--Course text-->
            <div class="course-content">
              <div class="course-image">
                <img src="" alt="image-course"/>
              </div>
              <div class="cont-price-rating">
                <div class="content-price">
                  <p>Content: 35hours</p>
                  <p>Price: 130€</p>
                </div>
                <div class="content-rating">
                  <p>4.7 <span class="star">★★★★☆</span></p>
                </div>
              </div>
              <p>
                Put your feelers out please submit the sop and uat files...<span class="read-more">Read more</span>
              </p>
              
            </div>
            <!--End Course text-->
          </article>
          <!--End Single course-->
        </div>
        <hr>
      </div>
    </section>
  `;
  return body.innerHTML += newTraining;
}
export default Training;