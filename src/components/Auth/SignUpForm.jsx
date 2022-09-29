function SignUpForm() {
  return (
    <div className="container auth-container">
    <form>
      <div class="input-group mb-3">
        <span class="input-group-text">@</span>
        <input type="text" class="form-control" placeholder="Username"/>
      </div>

      <div class="input-group mb-3">
        <input type="password" class="form-control" placeholder="Password"/>
      </div>
      <button class="btn btn-light btn-red">Войти</button>
    </form>
    </div>
  );
}

export default SignUpForm;