import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8800/api/auth/register', inputs);
      console.log(res);
    } catch (err) {
      setErr(err.response ? err.response.data : { message: 'An error occurred', details: err });
    }
  };

  console.log(inputs);
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange} />
        <input required type='text' placeholder='email' name='email' onChange={handleChange} />
        <input required type='password' placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{typeof err === 'string' ? err : err.message}</p>}
        <span>
          Do have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;