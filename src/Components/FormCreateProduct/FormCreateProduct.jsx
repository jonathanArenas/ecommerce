import useForm from '../../hooks/useForm';
import apiEcomerce from '../../Services/apiEcomerce';
import { useNavigate } from 'react-router-dom';
import LoadingImage from '../LoadingImagen/LoadingImage';
import { AuthContext } from '../../context/Auth.jsx';
import { useContext } from 'react';
import './FormCreateProduct.css'
function FormCreateProduct() {
   
    const token = window.sessionStorage.getItem('token')
    const navigate = useNavigate();
    const sendData = async (data) => {
        
        console.log(data)
        try {
            const result = await apiEcomerce.registerItem(data, token);
            console.log(result)
            if (result.status === 200) {
                navigate('/')
            }
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    }

    const { input, handleInputChange, handleSubmit } = useForm(sendData, {
        isActive: true,
        product_name: '',
        description: '',
        price: 0,
        category: '',
        brand: '',
        sku: '',
        image: 'https://commercial.bunn.com/img/image-not-available.png'
    });
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 col-lg-6' >
                    <form className='form-height'>
                        <div className='mt-5 row'>
                            <label htmlFor='exampleFormControlInput1' className='form-label col-4'>
                                Product Name
                            </label>
                            <div className='col-8'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput1'
                                    name='product_name'
                                    onChange={handleInputChange}
                                    value={input.product_name}
                                />
                            </div>

                        </div>
                        <div className='mt-3 row'>
                            <label htmlFor='exampleFormControlInput2' className='form-label col-3'>
                                Description
                            </label>
                            <div className='col-9'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput2'
                                    name='description'
                                    onChange={handleInputChange}
                                    value={input.description}
                                />
                            </div>
                        </div>
                        <div className='mt-3 row'>
                            <label htmlFor='exampleFormControlInput3' className='form-label col-3'>
                                Price
                            </label>
                            <div className='col-3'>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='exampleFormControlInput3'
                                    name='price'
                                    onChange={handleInputChange}
                                    value={input.price}
                                />
                            </div>
                            <label htmlFor='exampleFormControlInput4' className='form-label col-2'>
                                Category
                            </label>
                            <div className='col-4'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput4'
                                    name='category'
                                    onChange={handleInputChange}
                                    value={input.category}
                                />
                            </div>
                        </div>
                        <div className='mt-3 row'>
                            <label htmlFor='exampleFormControlInput5' className='form-label col-2'>
                                Brand
                            </label>
                            <div className='col-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput5'
                                    name='brand'
                                    onChange={handleInputChange}
                                    value={input.brand}
                                />
                            </div>
                            <label htmlFor='exampleFormControlInput6' className='form-label col-1'>
                                SKU
                            </label>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput6'
                                    name='sku'
                                    onChange={handleInputChange}
                                    value={input.sku}
                                />
                            </div>

                        </div>
                        <div className='mt-3 row'>
                            <label htmlFor='exampleFormControlInput7' className='form-label col-2'>
                                Image
                            </label>
                            <div className='col-10'>
                            <input
                                type='url'
                                className='form-control'
                                id='exampleFormControlInput7'
                                name='image'
                                onChange={handleInputChange}
                                value={input.image}
                            />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-end mt-3'>
                                <button type='button' className='btn btn-danger' onClick={handleSubmit}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col- 5 col-lg-5 mt-5'>
                    <LoadingImage data={input.image} />
                </div>
            </div>
        </div>
    )
}

export default FormCreateProduct
