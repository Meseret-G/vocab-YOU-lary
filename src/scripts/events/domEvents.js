import {
  createVocabulary, getSingleVocabulary, updateVocabCard, deleteVocabCard, filterVocab
} from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';
import addVocabForm from '../components/addVocabForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (event) => {
    // SHOWING VOCABULARY CARD FORM
    if (event.target.id.includes('add-vocabulary-btn')) {
      addVocabForm();
    }
    //     // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY CARD
    if (event.target.id.includes('submit-vocabulary')) {
      event.preventDefault();
      const vocabularyObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        uid
        // languageid: document.querySelector('#language_id').value,
      };
      createVocabulary(vocabularyObj).then(showVocabCards);
    }
    // CREATE A NEW VOCABULARY CARD
    // document.querySelector('#submit-vocabulary').addEventListener('click', addVocabForm);
    // CLICK EVENT FOR EDITING/UPDATING A VOCABULARY CARD
    if (event.target.id.includes('edit-vocabulary-btn')) {
      const [, id] = event.target.id.split('--');
      getSingleVocabulary(id).then((vocabObj) => addVocabForm(vocabObj));
    }

    // CLICK EVENT FOR EDITING A VOCABULARY CARD

    if (event.target.id.includes('update-vocabulary')) {
      event.preventDefault();
      const [, firebaseKey] = event.target.id.split('--');
      const vocabObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        // languageid: document.querySelector('#language_id').value,
        firebaseKey
      };
      updateVocabCard(vocabObj).then(showVocabCards);
    }
    // CLICK EVENT FOR DELETING A VOCABULARY CARD
    if (event.target.id.includes('delete-vocabulary-btn')) {
      const [, id] = event.target.id.split('--');
      deleteVocabCard(id).then(showVocabCards);
    }
    // SORT BY ALL CATEGORY
    document.querySelector('#sort-container').addEventListener('click', () => {
      if (event.target.id.includes('sort')) {
        const [, category] = event.target.id.split('--');
        filterVocab(category).then(showVocabCards);
      }
    });
  });
};
export default domEvents;
