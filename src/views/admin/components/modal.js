export const categoryModal = `
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">카테고리 추가하기</p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <label>카테고리 이름</label>
        <input class="category-input input" placeholder="카테고리 이름" />
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success category-append">추가하기</button>
      <button class="button close-button">취소하기</button>
    </footer>
  </div>
`;

export function productModal(categories) {
  return ` <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">상품 추가하기</p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">상품명</label>
            <div class="control">
              <input
                class="input"
                type="text"
                id="productName"
                placeholder="상품명을 입력해주세요"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">카테고리</label>
            <div class="control">
              <div class="select">
                <select id="category" required>
                  ${categories
                    .map(
                      ({ id, category_name }) =>
                        `<option value=${category_name}>${category_name}</option>`,
                    )
                    .join("")}
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">상품명</label>
            <div class="control">
              <input
                class="input"
                type="text"
                id="companyName"
                placeholder="제조사를 입력해주세요"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">제품 설명</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="제품 설명을 입력해주세요"
                id="description"
                required
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">제품 이미지</label>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" id="file" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">컴퓨터에서 선택</span>
                </span>
              </label>
            </div>
            <figure></figure>
          </div>
          

          <div class="field">
            <label class="label">상품명</label>
            <div class="control">
              <input
                class="input"
                id="stock"
                placeholder="재고량을 입력해주세요"
                type="number"
                required
              />
            </div>
          </div>

          <div class="field">
            <label class="label">상품명</label>
            <div class="control">
              <input
                class="input"
                id="price"
                placeholder="가격을 입력해주세요"
                type="number"
                required
              />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success append-button" data-type="submit">
            추가하기
          </button>
          <button class="button close-button" data-type="close">
            닫기
          </button>
        </footer>
      </div>
   `;
}

export function closeModal() {
  document
    .querySelector("body")
    .removeChild(document.querySelector("body").firstChild);
}
