import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';
// API CALL FOR VOCABULARY

const dbUrl = firebaseConfig.databaseURL;
// GET VOCABULARY CARDS
const getAllVocabulary = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE VOCABULARY CARDS BY USER
const createVocabulary = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, vocabObj)
    .then((response) => {
      const content = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, content)
        .then(() => {
          getAllVocabulary(vocabObj).then(resolve);
        });
    }).catch((error) => reject(error));
});

// GET SINGLE VOCABULARY CARD
const getSingleVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// UPDATE VOCABULARY CARDS
const updateVocabCard = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getAllVocabulary().then(resolve))
    .catch(reject);
});
// DELETE VOCABULARY CARDS
const deleteVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getAllVocabulary().then(resolve);
    })
    .catch(reject);
});
// Searched Card
const getSearchedCard = (string) => new Promise((resolve, reject) => {
  getAllVocabulary(Object)
    .then((filteredCardsArray) => {
      const filteredCards = filteredCardsArray.filter((vocab) => vocab.title.toUpperCase().includes(string) || vocab.title.toUpperCase.includes(string));
      resolve(filteredCards);
    }).catch(reject);
});
// FILTER VOCABULARY CATEGORY
const filterVocab = (category) => new Promise((resolve, reject) => {
  getAllVocabulary()
    .then((vocabArray) => {
      const filteredVocab = vocabArray.filter((card) => card.category === category);
      resolve(filteredVocab);
    }).catch(reject);
});
export {
  getAllVocabulary,
  createVocabulary,
  getSingleVocabulary,
  updateVocabCard,
  deleteVocabCard,
  filterVocab,
  getSearchedCard
};
