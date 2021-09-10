import clearDom from '../helpers/clearDom';

const addCategoryForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-author-form" class="mb-4">
        <div class="form-group">
          <label for="language">Language</label>
          <input type="text" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
        </div>
        <div class="form-group">
          <label for="specification">Specification</label>
          <input type="text" class="form-control" id="specification" placeholder="Specification" value="${obj.specification || ''}" required>
        </div>
        <button type="submit"
          id="${obj.firebaseKey ? `update-category--${obj.firebaseKey}` : 'submit-category'}"
          class="btn btn-primary">Submit Category </button>
      </form>`;
};

export default addCategoryForm;
