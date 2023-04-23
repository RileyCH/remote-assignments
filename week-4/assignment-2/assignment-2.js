function ajax(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("錯誤訊息: ", error);
    });
}

function render(data) {
  data.forEach((item) => {
    console.log(item);
    const product = document.querySelector(".product");
    const productHTML = `<h2>產品：${item.name} 
                            <span>價格：${item.price}</span>
                         </h2>
                         <p>產品說明：${item.description}</p>`;
    product.insertAdjacentHTML("beforeend", productHTML);
  });
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
