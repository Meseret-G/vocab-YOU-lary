import clearDom from '../helpers/clearDom';

const showVocabCards = (vocabArray) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add A Vocabulary Card</button>';
  vocabArray.forEach((obj) => {
    document.querySelector('#store').innerHTML += `
          <div class="card">
            <div class="card-body" style="height: 180px;">
              <h5 class="card-title">${obj.definition}</h5>
              <h5 class="time-submitted">${obj.timesubmitted}</h5>
                <hr>
                <i class="btn btn-success fas fa-eye" id="view-vocabulary-btn"></i>
                <i id="edit-vocabulary-btn" class="fas fa-edit btn btn-info"></i>
                <i id="delete-vocabulary-btn" class="btn btn-danger fas fa-trash-alt"></i>
            </div>
          </div>`;
  });
};

const emptyVocabCards = () => {
  document.querySelector('#store').innerHTML = '<h1> No Items </h1>';
};
export { showVocabCards, emptyVocabCards };
