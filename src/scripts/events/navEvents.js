import { showVocabCards } from '../components/vocabulary';
// import signOut from "../helpers/signOut";
import getVocabulary from '../helpers/vocabularyData';

// NAVIGATION EVENTS
const navigationEvents = () => {
  // All VOCABULARY CARDS
  document.querySelector('#all-vocabulary cards').addEventListener('click', () => {
    getVocabulary.then(showVocabCards);
  });
};
export default navigationEvents;
