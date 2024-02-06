import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo_img from './images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Spinner from '../Components/Spinner';

const Login = () => {
  const url = "https://pr-dental-service.onrender.com/login_user";
  const navigate = useNavigate();

  const [loader, setLoader] = useState('none');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { email, password } = values;
    if (password === '') {
      toast.error('Password is required', toastOptions);
      return false;
    } else if (email === '') {
      toast.error('email and Password is required', toastOptions);
      return false;
    }
    return true;
  };

  const PostData = async (event) => {
    setIsSubmitDisabled(true);
    event.preventDefault();

    const { email, password } = values;

    const request_login_options = { email, password };

    if (handleValidation()) {
      setLoader('flex');
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request_login_options),
      });

      const data = await res.json();

      if (data) {
        setLoader('none');
        setIsSubmitDisabled(false);
      }
      console.log(data);

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.message === 'Login Successfully') {
        localStorage.setItem('chat-app-user', data);
        navigate('/dental-clinic/user/chat_section');
      }
    }
  };

  return (
    <>
      <div className="login_form_section">
        <div className="form_container_for_login">
          <form method="POST" className="login_u_form" onSubmit={PostData}>
            <div className="brand">
              <img src={logo_img} alt="logo" />
            </div>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="Password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button className={isSubmitDisabled ? 'submit_disabled' : 'login_form_button'} type="submit" disabled={isSubmitDisabled}>
              Login
              <Spinner id="login_loder" style={loader} />
            </button>
            <span className="lower_title_login">
              Don't have an account ?
              <HashLink to={'/register'}>Register</HashLink>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
