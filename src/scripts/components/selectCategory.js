import { getAllCategory } from '../helpers/categoryData';

const selectCategory = (categoryId) => {
  let domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category_id" required>
    <option value="">Select a Category</option>
    `;
  getAllCategory().then((categoryArray) => {
    categoryArray.forEach((category) => {
      domString += `
            <option value = "${category.firebaseKey}"
            ${categoryId === category.firebaseKey ? 'selected' : ''}>
            ${category.category_type}
            </option>
            `;
    });
    domString += '</select>';
    document.querySelector('#select-category').innerHTML = domString;
  });
};
export default selectCategory;
