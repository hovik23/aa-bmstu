function Navbar() {
  return (
    <div>
	    <nav className="navbar navbar-expand-lg sticky-top navbar-dark navbar-custom">
		  <div className="container-md">
		    <a className="navbar-brand" href="#">ААМ</a>
		    <div className="collapse navbar-collapse">
		      <ul className="navbar-nav ml-auto">
		        <li className="nav-item">
		          <a className="nav-link active" aria-current="page" href="#">Главная</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="#">Блог</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="#">Проекты</a>
		        </li>
		      </ul>

		    </div>
		    <form className="d-flex" role="search">
		      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
		      <button className="btn btn-outline-light me-1" type="button">Search</button>
		    </form>

		    <button className="btn btn-outline-light" type="button">Войти</button>
		  
		  </div>
		</nav>
    </div>
  );
}

export default Navbar;