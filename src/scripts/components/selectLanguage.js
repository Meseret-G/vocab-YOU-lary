import getCategory from '../helpers/categoryData';

const selectLanguage = (user, languageId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>
    `;
  getCategory(user).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
            <option value = "${language.firebaseKey}"
            ${languageId === language.firebaseKey ? 'selected' : ''}>
            ${language.language_type}
            </option>
            `;
    });
    domString += '</select>';
    document.querySelector('#select-language').innerHTML = domString;
  });
};
export default selectLanguage;
