function NavBar() {
    return (
        <div className='App'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
          <div class="container">
            <a class="navbar-brand" href="#"><u>Local Genérico</u></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample07">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Remeras</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Pantalones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Calza2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  export default NavBar;