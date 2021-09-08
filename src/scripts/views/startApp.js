import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import getVocabulary from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';
import navigationEvents from '../events/navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents();
  navigationEvents();
  getVocabulary().then((vocabArray) => showVocabCards(vocabArray));
};

export default startApp;
