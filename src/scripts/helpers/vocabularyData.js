import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';
// API CALL FOR VOCABULARY

const dbUrl = firebaseConfig.databaseURL;
// GET VOCABULARY CARDS
const getVocabulary = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// CREATE VOCABULARY CARDS
// const createVocabulary = (vocabularyObj) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/words.json`, vocabularyObj)
//     .then((response) => {
//       const body = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/words/${firebaseKey}.json`, body); 
//       .then(() => {
//           getVocabulary(vocabularyObj).then(resolve);
//       });

//     }).catch((error) => reject(error));
// });

export default getVocabulary;
