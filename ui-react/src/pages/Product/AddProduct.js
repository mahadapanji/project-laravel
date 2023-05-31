import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appAxios from '../../services/baseApi';
import Navbar from '../../components/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';

function AddProduct() {
  const navigate = useNavigate();
  const [payloadProduct, setPayloadProduct] = useState({
    product_code: '',
    name: '',
    unit_code: '',
    price: 0,
  });

  const handleInput = (e) => {
    setPayloadProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isDisabled = () => {
    return (
      payloadProduct.name === '' ||
      payloadProduct.product_code === '' ||
      payloadProduct.unit_code === '' ||
      payloadProduct.price === 0 ||
      payloadProduct.price === ''
    );
  };

  const handleSubmit = () => {
    appAxios
      .post('/api/product/save', payloadProduct)
      .then((res) => {
        console.log(res);
        navigate('/product');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='custom-card mt-5'>
              <div className='row mb-5'>
                <div className='col'>
                  <h1>Add Product</h1>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <h5>Name</h5>
                  <div class='input-group mb-3'>
                    <input
                      name='name'
                      type='text'
                      class='form-control'
                      placeholder='Name'
                      aria-label='Name'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Price</h5>
                  <div class='input-group mb-3'>
                    <span class='input-group-text' id='basic-addon1'>
                      Rp
                    </span>
                    <input
                      name='price'
                      type='number'
                      class='form-control'
                      placeholder='Price'
                      aria-label='Price'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col'>
                  <h5>Unit Code</h5>
                  <div class='input-group mb-3'>
                    <input
                      name='unit_code'
                      type='text'
                      class='form-control'
                      placeholder='Unit Code'
                      aria-label='Unit Code'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Product Code</h5>
                  <div class='input-group mb-3'>
                    <input
                      name='product_code'
                      type='text'
                      class='form-control'
                      placeholder='Product Code'
                      aria-label='Product Code'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>

              <div className='row mt-5'>
                <div className='col d-flex justify-content-center'>
                  <PrimaryButton
                    name='Submit'
                    handleDisable={isDisabled()}
                    handleClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
