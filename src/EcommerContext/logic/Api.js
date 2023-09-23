const fetchProducts = (setItemsCallback) => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((ask) => ask.json())
    .then((result) => setItemsCallback(result))
    .catch((error) => console.error("Error fetching products:", error));
};

export default fetchProducts;
