async function Products() {
  let products = "";
  try {
    let data = await fetch(
      "https://6624d25904457d4aaf9d0adb.mockapi.io/products"
    );
    let res = await data.json();
    products = res.map((elem) => {
      return ` <div class="col-5">
            <h3>title:${elem.title}</h3>
            <p class="text-truncate">description:${elem.description}</p>
            <img src=${elem.image} class="img-fluid" alt="" />
            <div class="d-flex justify-content-between">
              <p>price:${elem.price}</p>
              <p>rate:${elem.rate}</p>
            </div>
          </div>`;
    });
    document
      .querySelector(".products")
      .insertAdjacentHTML("afterbegin", products.join(""));
  } catch (error) {
    console.log(error.message);
  }
}
export default Products;
