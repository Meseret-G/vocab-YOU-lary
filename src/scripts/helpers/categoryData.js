import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';
// API CALLS FOR VOCABULARY CATEGORY

const dbUrl = firebaseConfig.databaseURL;

// GET CATEGORY
const getCategory = new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/category.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});
export default getCategory;
