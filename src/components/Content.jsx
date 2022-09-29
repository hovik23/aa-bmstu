import SignUpForm from './Auth/SignUpForm.jsx'
import LoginForm from './Auth/LoginForm.jsx'
import loop from '../assets/loop.mp4'

function Content() {
  return (
    <div className="container-md content">
      <h1>Добро пожаловать в Армянскую Ассоциацию МГТУ!</h1>
      {/*<SignUpForm/>*/}
      <LoginForm/>
    </div>
  );
}

export default Content;