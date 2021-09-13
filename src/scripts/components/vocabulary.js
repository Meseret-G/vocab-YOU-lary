import clearDom from '../helpers/clearDom';

const showVocabCards = (vocabArray) => {
  clearDom();
  // FILTER BY CATEGORY BUTTONs
  document.querySelector('#sort-container').innerHTML = `
    <button type="button" class="btn btn-primary" id="sort--Tech">Technology</button>
    <button type="button" class="btn btn-primary" id="sort--Economics">Economics</button>
    <button type="button" class="btn btn-primary" id="sort--Politics">Politics</button>
`;
  // SORT DROPDOWN MENU
  document.querySelector('#sort').innerHTML = `
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="sort-button">
    Sort by
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" id="sort-name">Order By Name</a></li>
  </ul>
</div>
`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add A Vocabulary Card</button>';
  vocabArray.forEach((obj) => {
    document.querySelector('#store').innerHTML += `
          <div class="card">
            <div class="card-body" style="height: 180px;">
              <h5 class="title">${obj.title}</h5>
              <h5 class="card-text bold">${obj.category ? `${obj.category}` : `${obj.category}`}</p>
              <h5 class="card-subtitle mb-2 text-muted">${obj.language}</h5>
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
