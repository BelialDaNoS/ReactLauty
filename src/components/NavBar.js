import CartWidget from "./CartWidget"



function NavBar() {
    return (


    <div className='App'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Local Genérico</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse show" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown05">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <CartWidget/>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </form>
      </div>
    </div>
  </nav>
          









      </div>
    );
  }

  export default NavBar;