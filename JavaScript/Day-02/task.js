let btn = document.getElementById("getData");
let productsContainer = document.getElementById("productsContainer");

btn.addEventListener("click", function () {
  fetch("https://dummyjson.com/products")
    .then((res) => {
      console.log(res);
      return res.json();
    })

    .then((data) => {
      console.log(data);
      btn.style.display = "none";

      data.products.forEach((product) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let image = document.createElement("img");
        image.src = product.thumbnail;

        let title = document.createElement("h3");
        title.textContent = product.title;

        let description = document.createElement("p");
        description.textContent = product.description;

        let price = document.createElement("span");
        price.textContent = "$" + product.price;

        card.append(image, title, description, price);

        productsContainer.append(card);
      });
    })

    .catch((err) => {
      console.log(err);
    });
});
