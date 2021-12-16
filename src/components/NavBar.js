function NavBar() {
    return (
        <div classnameName='App'>
        <nav classname="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
          <div classname="container">
            <a classname="navbar-brand" href="#"><u>Local Genérico</u></a>
            <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span classname="navbar-toggler-icon"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarsExample07">
              <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
                <li classname="nav-item">
                  <a classname="nav-link active" aria-current="page" href="#">Remeras</a>
                </li>
                <li classname="nav-item">
                  <a classname="nav-link active" href="#">Pantalones</a>
                </li>
                <li classname="nav-item">
                  <a classname="nav-link disabled">Calza2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  export default NavBar;