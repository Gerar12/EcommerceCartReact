"use strict";

const fetchProducts = (setItemsCallback) => {
  fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
    .then((ask) => ask.json())
    .then((result) => setItemsCallback(result))
    .catch((error) => console.error("Error fetching products:", error));
};

const fetchForCategory = (setItemsCallback, category) => {
  const url = `https://api.escuelajs.co/api/v1/categories/${category}/products?offset=0&limit=20`;
  fetch(url)
    .then((ask) => ask.json())
    .then((result) => setItemsCallback(result))
    .catch((error) => console.error("Error fetching products:", error));
};

export { fetchProducts, fetchForCategory };
