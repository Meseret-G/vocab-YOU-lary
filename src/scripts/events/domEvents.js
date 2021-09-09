// import addVocabForm from '../components/addVocabForm';
import { createVocabulary } from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';
import addVocabForm from '../components/addVocabForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (event) => {
    // SHOWING VOCABULARY CARD FORM
    if (event.target.id.includes('add-vocabulary-btn')) {
      addVocabForm();
    }
    //     // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY CARD
    if (event.target.id.includes('submit-vocabulary')) {
      event.preventDefault();
      const vocabularyObj = {
        title: document.querySelector('#vocab-title').Value,
        definition: document.querySelector('#vocab-definition').Value,
        categoryid: document.querySelector('#category_id').Value
      };
      createVocabulary(vocabularyObj).then(showVocabCards);
    }
    // CLICK EVENT EDITING/UPDATING A BOOK
    // if (event.target.id.include('edit-vocabulary-btn')) {
    //   const [, id] = event.target.id.split('--');
    //   getSingleVocabulary(id).then((vocabObj) => addVocabForm(vocabObj));
    // }
  });
};
export default domEvents;
