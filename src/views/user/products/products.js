import renderData from "./renderData.js";
import renderDetailData from "./renderDetailData.js";

let contentEl = document.getElementById("input-data");
let detailEl = document.getElementById("detail-data");
async function handleData() {
  await fetch("../tempData.json")
    .then((res) => res.json())
    .then((data) => {
      const temp = data[0];
      console.log(temp);
      const [img, name, price, des, des_img] = [
        temp.imgTitle,
        temp.name,
        temp.price,
        temp.description[0],
        temp.description[1],
      ];
      const htmlEl = renderData(img, name, price, des);
      contentEl.innerHTML = htmlEl;

      const html2El = renderDetailData(des_img);
      detailEl.innerHTML = html2El;
    });
}

window.onload = function () {
  handleData();
};