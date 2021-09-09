import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import { getAllVocabulary } from '../helpers/vocabularyData';
import { showVocabCards } from '../components/vocabulary';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  logoutButton();
  navigationEvents();
  getAllVocabulary().then(showVocabCards);
};

export default startApp;
