import './Login.css'
import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import apiEcomerce from '../../Services/apiEcomerce';
import { AuthContext } from '../../context/Auth.jsx'
import { useNavigate, Link } from 'react-router-dom'


function Login() {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate();
  // Funcion que envia los datos
  const sendData = async (data) => {
    try {
      const result = await apiEcomerce.login(data);

      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
  };

  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: '',
  });

  return (
    
    <div className='container'>
      <div className='row'>
      <div className='col-6'>
      <form>
      <div className='mt-5 mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
          name='email'
          onChange={handleInputChange}
          value={input.email}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPassword' className='col-sm-2 col-form-label'>
          Password
        </label>
        <div>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            name='password'
            onChange={handleInputChange}
            value={input.password}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-end'>
          <button type='button' className='btn btn-danger' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </form>
      </div>
      <div className='col-6 mt-5'>
          <div className='DontAccount'>

              <h2>Welcome to login</h2>
              <p className='justify-center'>Don't have an account?</p>
            <div>
              <Link to='/signup' className='signup'>Sign Up</Link>
            </div>
          </div>
      </div>
      </div>
    </div>
    
  );
}

export default Login;
 