const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
          <a class="navbar-brand title" href="#">vocab-YOU-lary</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" id="all-vocabulary">
                  All Vocabulary Cards <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="Tech">Tech Vocabulary Cards </a>
              </li>
            </ul>
            <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchVocab">
          <button class="btn btn-outline-success" type="submit" id="search-btn">Search Vocabulary</button>
        </form>
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </div>
        </nav>
      `;
};

export default navBar;
