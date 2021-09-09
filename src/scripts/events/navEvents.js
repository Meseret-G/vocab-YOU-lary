import signOut from '../helpers/signOut';
import { getAllVocabulary } from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';
import addVocabForm from '../components/addVocabForm';

// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // All VOCABULARY CARDS
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    getAllVocabulary().then(showVocabCards);
  });

  // CREATE A NEW VOCABULARY CARD
  document.querySelector('#submit-vocabulary').addEventListener('click', addVocabForm);
};
export default navigationEvents;
