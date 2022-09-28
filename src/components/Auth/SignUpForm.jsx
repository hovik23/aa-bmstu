function SignUpForm() {
  return (
    <div className="container auth-container">
    <form>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      </div>
      <button class="btn btn-light btn-red">Войти</button>
    </form>
    </div>
  );
}

export default SignUpForm;