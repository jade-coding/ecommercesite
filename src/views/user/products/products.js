import renderDetailData from "./renderDetailData.js";
import productDesData from "./productDesData.js";
import { getImageUrl } from "/aws-s3.js";

let contentEl = document.getElementById("input-data");
let detailEl = document.getElementById("detail-data");

async function handleData() {
  const url = window.location.pathname;
  const product_id = url.split("/")[3];

  const [temp] = await Promise.all([getImageUrl("1/9l62l_스크린샷(3).png")]);
  console.log("temp:", temp);

  fetch(`/products/${product_id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const [id, name, price, des, stock] = [
        product_id,
        data.name,
        data.price,
        data.description,
        data.stock,
      ];

      const koprice = price.toLocaleString("ko-KR");

      const htmlEl = renderDetailData(id, temp, name, koprice, des);
      contentEl.innerHTML = htmlEl;

      //const html2El = productDesData(des_img1, des_img2, des_img3);
      //detailEl.innerHTML = html2El;

      const scrollEl = document.createElement("script");
      scrollEl.setAttribute("src", "tabClickScroll.js");
      document.querySelector("body").appendChild(scrollEl);

      if (stock > 0) {
        const counterEl = document.createElement("script");
        counterEl.setAttribute("src", "saveItemLocal.js");
        document.querySelector("body").appendChild(counterEl);

        const directEl = document.createElement("script");
        directEl.setAttribute("src", "directPay.js");
        document.querySelector("body").appendChild(directEl);
      } else {
        const soldOutEl = document.createElement("script");
        soldOutEl.setAttribute("src", "handleSoldOut.js");
        document.querySelector("body").appendChild(soldOutEl);
      }
    });
}

window.onload = handleData;
