import selectCategory from './selectCategory';

const addVocabForm = () => {
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-vocabulary-form" class="mb-4">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="vocab-title" aria-describedby="title" placeholder="Vocabulary Title" required>
          </div>
          <div class="form-group">
            <label for="definition">Vocabulary Definition </label>
            <input type="text" class="form-control" id="vocab-definition" aria-describedby="definition" placeholder="Enter Vocabulary Definition" required>
          </div>
          </div>
          <div class="form-group" id="select-category">
         </div>
          <button type="submit" id="submit-vocabulary" class="btn btn-primary">Submit Vocabulary</button>
        </form>`;

  selectCategory();
};
export default addVocabForm;
