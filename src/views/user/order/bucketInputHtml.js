import renderBucketData from "./renderBucketData.js";

function bucketInputHtml() {
  const box = document.querySelector(".product-box");
  let totalPrice = 0;
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const item = JSON.parse(window.localStorage.getItem(key));

    totalPrice += parseInt(item.price) * parseInt(item.stock);
    if (item) {
      const htmlStr = renderBucketData(item.name, item.stock);
      // html에 추가
      let el = document.createElement("div");
      el.innerHTML = htmlStr;
      box.append(el);
    }
  }

  // 로컬 스토리지 데이터 총 결제 금액 계산 후 붙이기
  const priceEl = document.querySelectorAll(".total-price");
  console.log(totalPrice);
  priceEl.forEach((price) => (price.innerText = `${totalPrice}`));
}

bucketInputHtml();