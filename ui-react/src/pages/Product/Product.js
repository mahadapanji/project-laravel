import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import appAxios from '../../services/baseApi';
import Navbar from '../../components/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isUpdatePage = location.search !== '';
  const id = searchParams.get('id');

  const [payloadProduct, setPayloadProduct] = useState({
    product_code: '',
    name: '',
    unit_code: '',
    price: 0,
  });

  useEffect(() => {
    if (isUpdatePage) {
      appAxios
        .get(`/api/product/${id}`)
        .then((res) => {
          const detailProduct = res.data.data;

          if (!detailProduct) {
            navigate('/product');
          } else {
            setDetailData(detailProduct);
          }
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDetailData = (value) => {
    Object.keys(payloadProduct).forEach((el) => {
      Object.keys(value).forEach((val) => {
        if (el === val) {
          setPayloadProduct((prevState) => ({
            ...prevState,
            [el]: value[val],
          }));
        }
      });
    });
  };

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
    if (isUpdatePage) {
      payloadProduct.id = id;
    }

    appAxios
      .post(
        isUpdatePage ? '/api/product/update' : '/api/product/save',
        payloadProduct
      )
      .then((res) => {
        navigate('/product');
        if (isUpdatePage) {
          NotificationManager.success('Success Update Product');
        } else {
          NotificationManager.success('Success Add Product');
        }
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
                  <h1>{isUpdatePage ? 'Update Product' : 'Add Product'}</h1>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <h5>Name</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='name'
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      aria-label='Name'
                      value={payloadProduct.name}
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Price</h5>
                  <div className='input-group mb-3'>
                    <span className='input-group-text' id='basic-addon1'>
                      Rp
                    </span>
                    <input
                      name='price'
                      type='number'
                      className='form-control'
                      placeholder='Price'
                      aria-label='Price'
                      value={payloadProduct.price}
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col'>
                  <h5>Unit Code</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='unit_code'
                      type='text'
                      className='form-control'
                      placeholder='Unit Code'
                      aria-label='Unit Code'
                      value={payloadProduct.unit_code}
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Product Code</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='product_code'
                      type='text'
                      className='form-control'
                      placeholder='Product Code'
                      aria-label='Product Code'
                      value={payloadProduct.product_code}
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>

              <div className='row mt-5'>
                <div className='col d-flex justify-content-center'>
                  <PrimaryButton
                    name={isUpdatePage ? 'Update' : 'Submit'}
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

export default Product;
