// import addVocabForm from '../components/addVocabForm';
import {
  createVocabulary, getSingleVocabulary, updateVocabCard, deleteVocabCard
} from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';
import addVocabForm from '../components/addVocabForm';
// import addCategoryForm from '../components/addCategoryForm';

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
        title: document.querySelector('#title').Value,
        definition: document.querySelector('#definition').Value,
        categoryid: document.querySelector('#category_id').Value
      };
      createVocabulary(vocabularyObj).then(showVocabCards);
    }
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
        title: document.querySelector('#title').Value,
        definition: document.querySelector('#definition').Value,
        categoryid: document.querySelector('#category_id').Value,
        firebaseKey
      };
      updateVocabCard(vocabObj).then(showVocabCards);
    }
    // CLICK EVENT FOR DELETING A VOCABULARY CARD
    if (event.target.id.includes('delete-vocabulary-btn')) {
      const [, id] = event.target.id.split('--');
      deleteVocabCard(id).then(showVocabCards);
    }
    // VOCABULARY CATEGROY CARDS
    // CLICK EVENT FOR SHOWING A CATEGORY FORM
    // if (event.target.id.includes('add-category-btn')) {
    //   addCategoryForm();
    // }
  });
};
export default domEvents;
