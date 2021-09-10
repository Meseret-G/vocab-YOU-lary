import clearDom from '../helpers/clearDom';

const showVocabCards = (vocabArray) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add A Vocabulary Card</button>';
  vocabArray.forEach((obj) => {
    document.querySelector('#store').innerHTML += `
          <div class="card">
            <div class="card-body" style="height: 180px;">
              <h5 class="title">${obj.title}</h5>
              <h5 class="definition">${obj.definition}</h5>
                <i class="btn btn-success fas fa-eye" id="view-vocabulary-btn--${obj.firebaseKey}"></i>
                <i id="edit-vocabulary-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
                <i id="delete-vocabulary-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            </div>
          </div>`;
  });
};

const emptyVocabCards = () => {
  document.querySelector('#store').innerHTML = '<h1> No Vocabulary Cards </h1>';
};
export { showVocabCards, emptyVocabCards };
