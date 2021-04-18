import FetchData from '../Fetchdata/FetchData.js';



const displayTraining = async () => {
  const url = 'http://localhost:3001/trainings';
  const training = await FetchData(url);
  

  const newTraining = training.map(course => {
    const { id, title, image, soustitle, rating, price, body } = course;
    
    return `
      <!--Single course-->
      <article class="one-course" id="${id}">
        <!--course title-->
        <div class="course-title">
          <h4>${title}</h4>
          <button type="button" class="course-btn">
            <span class="plus-icon"><div>+</div></span>
            <span class="minus-icon"><div>-</div></span>
          </button>
        </div>
        <!--End course title-->
        <!--Course text-->
        <div class="course-content">
          <div class="course-image">
            <img src="" alt="${title}" title="${title}"/>
          </div>
          <div class="cont-price-rating">
            <div class="content-price">
              <p>${soustitle}</p>
              <p>${price}</p>
            </div>
            <div class="content-rating">
              <p>${rating} <span class="star">★★★★☆</span></p>
            </div>
          </div>
          <p>${body}.. <span class="read-more"><a href="/details.html?id=${course.id}">READ MORE</a></span></p>
          <button class="add-cart">ADD TO CART</button>

        </div>
        <!--End Course text-->
      </article>
    `;
  }).join('');
  return newTraining;
}
export default displayTraining;