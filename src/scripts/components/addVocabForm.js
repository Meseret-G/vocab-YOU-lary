// import selectLanguage from './selectLanguage';
import clearDom from '../helpers/clearDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-vocabulary-form" class="mb-4">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="VocabularyTitle" placeholder="Enter A Vocabulary" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
            <label for="definition">Definition</label>
            <textarea class="form-control" placeholder="Enter A Definition" id="definition"required>${obj.definition || ''}</textarea>
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <textarea class="form-control" placeholder="Enter A Category" id="category">${obj.category || ''}</textarea>
        </div>
        <div class="form-group" id="select-language">
        <label for="category">Language</label>
        <select class="form-control form-select" id="language" required>
          <option value="" disabled selected>${obj.language || 'Select A Language'}</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="N/A">N/A</option>
        </select>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-vocabulary--${obj.firebaseKey}` : 'submit-vocabulary'}" class="btn btn-primary">Submit Vocabulary</button>
        </form>
        `;

  // selectLanguage(`${obj.language_id || ''}`);
};

export default addVocabForm;
