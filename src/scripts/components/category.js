import clearDom from '../helpers/clearDom';

const showCategory = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-category-btn">Add A Category</button>';
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <p class="card-text bold">${item.language}</p>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-language-btn--${item.firebaseKey}"></i>
          <i id="edit-language-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-language--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
    `;
  });
};
const emptyCategory = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};
export { showCategory, emptyCategory };
