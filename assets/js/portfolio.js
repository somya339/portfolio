import data from "../../protfolio-details.js";
console.log(data);

const template = (info) => {
    let section = `<section id="portfolio-details" class="portfolio-details">
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">

              <div class="swiper-slide">
                <img src="${info.img1}" alt="">
              </div>

              <div class="swiper-slide">
                <img src="${info.img2}" alt="">
              </div>

              <div class="swiper-slide">
                <img src="${info.img3}" alt="">
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: ${info.category}</li>
              <li><strong>Project date</strong>: ${info.Project_Date}</li>
              <li><strong>Project URL</strong>: <a href="#"><a target="_blank" href="${info.Project_URL}">Voop Chat</a></li>
            </ul>
          </div>
          <div class="portfolio-description">
            <h2>This Project is a web based video conferencing app. </h2>
            <p>
              ${info.description}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>`
    document.querySelector("#main-portfolio").innerHTML = section;
}