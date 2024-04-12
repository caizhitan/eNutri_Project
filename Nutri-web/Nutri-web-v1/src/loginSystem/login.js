import './login.css';
import LoginTitle from '../Components/LoginTitle';
import logo from '../eNutriLogo.png';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    loginRequest()
  }

  async function loginRequest() {
    navigate('/patientSelect');
  }

    return(
        <>
        <LoginTitle />
        <div className='loginpadding'>
        <div className='loginwrap'>
        <div class='LoginText'>
            <h1 className='loginTextFont'>Login</h1>
        </div>
        <div className='logowrap'>
            <div className='nestedDiv'>
                    <img src={logo} className='image'/> 
            </div>
            <div className="login-wrapper">
                <form className='loginBox' onSubmit={submitHandler}>
                    <label>
                        <h3 className='text'>Username</h3>
                        <input type="text" className='textBox' onChange={usernameHandler}/>
                    </label>
                    <br />
                    <label>
                        <h3 className='text'>Password</h3>
                        <input type="password" className='textBox' onChange={passwordHandler}/>
                    </label>
                    <div className='Padding'>
                        <button type="submit" className='textButton'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Login;