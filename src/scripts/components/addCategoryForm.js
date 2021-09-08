import clearDom from '../helpers/clearDom';

const addCategoryForm = () => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-category-form" class="mb-4">
        <div class="form-group">
          <label for="category-type"> Vocabulary Category Type</label>
          <input type="text" class="form-control" id="category_type" aria-describedby="category" placeholder="Category Type" required>
        </div>
        <div class = "form-group">
        <input type= "checkbox" class="form-check-input" id="favorite">
        <label class="form-check-label" for="favorite">Favorite Category </label>
      </div>
        <div class="form-group">
          <label for="specification"> Category Specification</label>
          <input type="text" class="form-control" id="category_specification" aria-describedby="Specify the Category" placeholder="Vocabulary Category Specification" required>
        </div>
        <button type="submit" id="submit_category" class="btn btn-primary">Submit Category</button>
      </form>`;
};
export default addCategoryForm;
