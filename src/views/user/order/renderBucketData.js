export default function renderBucketData(name, stock, price) {
  return `
    <div class="columns">
        <div class="column">${name}</div>
        <div class="column">${stock}</div>
        <div class="column">${stock * price}</div>
    </div>
    `;
}
