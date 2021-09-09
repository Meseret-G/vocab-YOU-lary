import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';
// API CALLS FOR VOCABULARY CATEGORY

const dbUrl = firebaseConfig.databaseURL;

// GET ALL CATEGORIES
const getAllCategory = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/category.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET A SINGLE CATEGORY
const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/category/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export { getAllCategory, getSingleCategory };
