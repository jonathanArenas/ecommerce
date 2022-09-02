import { useNavigate } from 'react-router-dom'
import apiEcomerce from '../Services/apiEcomerce';
import useForm from '../hooks/useForm';
function Register() {
  // Usamos el hook navigate para navegar hacia login
  const navigate = useNavigate()

  // Funcion que envia los datos
  const sendData = async (data) => {
    console.log(data)
    try {
      const result = await apiEcomerce.registerUser(data);

      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
  };

  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'Select a gender',
    email: '',
    password: '',
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 offset-3'>
          <form>
            <div className='mt-5 mb-3 row'>
              <label htmlFor='name' className='form-label col-12 col-lg-2 col-md-2 col-sm-12 '>
                Name
              </label>
              <div className='col-12 col-10 col-lg-10 col-md-10 col-sm-12'>
                <input
                  type='text'
                  name='first_name'
                  onChange={handleInputChange}
                  value={input.first_name}
                  className='form-control'
                  id='name'
                  placeholder='John'
                />
              </div>

            </div>
            <div className='mb-3 row'>
              <label htmlFor='last-name' className='form-label col-lg-2 col-md-2 col-sm-12 col-12'>
                Last name
              </label>
              <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
                <input
                  type='text'
                  name='last_name'
                  onChange={handleInputChange}
                  value={input.last_name}
                  className='form-control'
                  id='last-name'
                  placeholder='Doe'
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='birth' className='form-label  col-lg-2 col-md-2 col-sm-12 col-12'>
                Birthday
              </label>
              <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
                <input
                  type='date'
                  className='form-control'
                  id='birth'
                  name='birth_date'
                  onChange={handleInputChange}
                  value={input.birth_date}
                />
              </div>

            </div>
            <div className='mb-3 row'>
              <label htmlFor='last-name' className='form-label col-lg-2 col-md-2 col-sm-12 col-12'>
                Gender
              </label>
              <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
              <select
                className='form-select'
                name='gender'
                onChange={handleInputChange}
                value={input.gender}>
                <option value='Select a gender' disabled>
                  Select a gender
                </option>
                <option value='M'>M</option>
                <option value='F'>F</option>
              </select>
              </div>
              
            </div>
            <div className='mb-3 row'>
              <label htmlFor='exampleFormControlInput1' className='form-label col-lg-2 col-md-2 col-sm-12 col-12'>
                Email address
              </label>
              <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
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
              
            </div>
            <div className='mb-3 row'>
              <label htmlFor='inputPassword' className='form-label col-lg-2 col-md-2 col-sm-12 col-12'>
                Password
              </label>
              <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
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
                <button type='button' className='btn btn-danger w-50' onClick={handleSubmit}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
