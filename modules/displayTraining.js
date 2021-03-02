import { fetchTrainingData } from '../src/dataFetching.js'

const training_articles = document.querySelector('.all-courses');

const displayTraining = async () => {
  try {
    const trainings = await fetchTrainingData();
    const newTraining = trainings.map(training => {
      const { title, image, soustitle, rating, price, body } = training;
      return`
      <article class="courses-lesson">
        <!--lesson-title-->
       <div class="lesson-title">
          <p>${title}</p>
          <button type="button" class="lesson-btn">
             <span class="plus-icon">
                <i class="far fa-plus-square fa-2x"></i>
             </span>
             <span class="minus-icon">
                <i class="far fa-minus-square fa-2x"></i>
             </span>
          </button>
       </div>
       <!--lesson text-->
       <div class="lesson-text-img">
         <div class="lesson-img">
          <img src="${image}" alt="${title}">
         </div>
         <div class="hours-rating">
           <p class="content-hour">${soustitle}</p>
           <p>${rating}<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p>
         </div>
         <p class="content-hour">${price}</p>
          <p>
            ${body}<span class="read-more">READ MORE</span>
          </p>
          <button>Add to Cart</button>
       </div>
     </article>
      `;
    }).join('');
    training_articles.innerHTML = newTraining;
  } catch (error) {
    console.log('Unable to fetch training data');
  }
}

export default displayTraining;