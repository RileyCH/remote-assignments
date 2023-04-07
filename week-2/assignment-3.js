function calculate(data) {
  const discount = 1 - data.discount;

  let productPrice = 0;
  for (let i = 0; i < data.products.length; i++) {
    let price = data.products[i].price;
    productPrice += price;
  }
  return (totalPrice = productPrice * discount);
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount
