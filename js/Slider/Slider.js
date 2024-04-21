async function Slider() {
  let slider = "";
  try {
    let data = await fetch("https://turajarmin.github.io/json_1/db.json");
    let res = await data.json();
    slider = res.slider.map((elem) => {
      return `
            <div class="swiper-slide">
                <img src=${elem.image} alt=${elem.alt} />
            </div>`;
    });
    document
      .querySelector(".swiper-wrapper")
      .insertAdjacentHTML("afterbegin", slider.join(""));
  } catch (error) {
    console.log(error.message);
  }
}
export default Slider;
