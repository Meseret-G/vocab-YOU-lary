import signOut from '../helpers/signOut';
import { getAllVocabulary, filterVocab, getSearchedCard } from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';
// import addVocabForm from '../components/addVocabForm';
// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // All VOCABULARY CARDS
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    getAllVocabulary().then(showVocabCards);
  });
  // CLICK EVENT FOR FILTERING VOCABULARY CARD BY CATEGORY
  document.querySelector('#Tech').addEventListener('click', () => {
    filterVocab('Tech').then(showVocabCards);
  });
  // SEARCH VOCABULARY CARDS
  document.querySelector('#search-btn').addEventListener('click', () => {
    const string = document.querySelector('#searchVocab').value;
    getSearchedCard(string).then(showVocabCards);
  });
};

export default navigationEvents;
