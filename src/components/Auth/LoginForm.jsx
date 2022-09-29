function LoginForm() {
  return (
    <div className="container auth-container">
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text span-red">@</span>
        <input type="text" className="form-control" placeholder="Username"/>
      </div>

      <div className="input-group mb-3">
        <input type="email" className="form-control" placeholder="Email"/>
      </div>

      <div className="input-group mb-3">
        <button className="btn btn-red dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Факультет</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">РК</a></li>
          <li><a className="dropdown-item" href="#">ИУ</a></li>
          <li><a className="dropdown-item" href="#">СМ</a></li>
          <li><a className="dropdown-item" href="#">МТ</a></li>
        </ul>
        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
      </div>

      <div className="input-group mb-3">
        <input type="password" className="form-control" placeholder="Password"/>
      </div>
      <button className="btn btn-light btn-red">Зарегистрироваться</button>
    </form>
    </div>
  );
}

export default LoginForm;