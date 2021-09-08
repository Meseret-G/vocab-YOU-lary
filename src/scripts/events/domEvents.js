import addVocabForm from '../components/addVocabForm';
import getVocabulary from '../helpers/vocabularyData';
// import { showVocabCards } from '../components/vocabulary';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (event) => {
    // SHOWING VOCABULARY CARD FORM
    if (event.target.id.includes('add-vocabulary-btn')) {
      addVocabForm();
    }

    //     // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    // if (event.target.id.includes('submit-vocabulary')) {
    //   event.preventDefault();
    //   const vocabularyObj = {
    //     categoryid: document.querySelector('#category_id').Value,
    //     definition: document.querySelector('#vocab-definition').Value,
    //     // timeSubmitted: "datetime",
    //     title: document.querySelector('#vocab-title').Value
    //   };
    //   createVocabulary(vocabularyObj).then((vocabArray) => showVocabCards(vocabArray));
    // }
  });
};
export default domEvents;
