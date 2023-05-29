import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss';

function Login() {
  const navigate = useNavigate();

  const [payloadLogin, setPayloadLogin] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    setPayloadLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonSignIn();
    }
  };

  const handleButtonSignIn = () => {
    axios
      .post('http://127.0.0.1:8000/api/login', payloadLogin)
      .then((res) => {
        const user = res.data[0];
        if (user !== undefined) {
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/dashboard');
        }
      })
      .catch((err) => console.log(err));
  };

  const isDisabled = () => {
    return payloadLogin.username === '' || payloadLogin.password === '';
  };

  return (
    <>
      <div className='container-fluid custom-container'>
        <div className='row' style={{ height: '100vh' }}>
          <div className='col d-flex justify-content-center align-items-center'>
            <div className='card login-card'>
              <h3 className='text-center'>Sign In</h3>
              <div className='input-group mt-3 mb-3'>
                <input
                  type='text'
                  name='username'
                  className='form-control'
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  onChange={handleInput}
                />
              </div>

              <div className='input-group mb-5'>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='Password'
                  aria-label='Password'
                  aria-describedby='basic-addon1'
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <button
                type='button'
                disabled={isDisabled()}
                className='btn btn-primary'
                onClick={handleButtonSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
