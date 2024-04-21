async function Menu() {
  let menu = "";
  try {
    let data = await fetch("https://turajarmin.github.io/json_1/db.json");
    let res = await data.json();
    menu = res.menu.map((elem) => {
      return `
        <li class="nav-item">
          <a class="nav-link text-white text-capitalize" href=${elem.link}>${elem.name}</a>
        </li>`;
    });
    document
      .querySelector(".navbar-nav")
      .insertAdjacentHTML("afterbegin", menu.join(""));
  } catch (error) {
    console.log(error.message);
  }
}
export default Menu;
