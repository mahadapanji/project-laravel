import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import appAxios from '../../services/baseApi';
import Navbar from '../../components/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isUpdatePage = location.search !== '';
  const id = searchParams.get('id');

  const [payloadPayment, setPayloadPayment] = useState({
    order_code: '',
    payment_code: '',
    payment_type: '',
    payment_note: '',
  });
  const [listOrderCode, setListOrder] = useState([]);
  const [listPaymentType, setListPaymentType] = useState([]);

  useEffect(() => {
    getListOrder();
    getListPaymentType();
  }, []);

  const getListOrder = () => {
    appAxios
      .get('/api/payment/invoice/not_pay')
      .then((res) => {
        const data = res.data.data;
        data.unshift({
          order_code: '',
        });
        setListOrder(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getListPaymentType = () => {
    appAxios
      .get('/api/payment/paymenttype/all')
      .then((res) => {
        const data = res.data.data;
        data.unshift({
          order_code: '',
        });
        setListPaymentType(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const RenderOptionListOrder = () => {
    return listOrderCode.map((el, i) => {
      return (
        <option value={el.order_code} key={i}>
          {el.order_code}
        </option>
      );
    });
  };

  const RenderOptionListPaymentType = () => {
    return listPaymentType.map((el, i) => {
      return (
        <option value={el.paymenttype_code} key={i}>
          {el.paymenttype_name}
        </option>
      );
    });
  };

  const setDetailData = (value) => {
    Object.keys(payloadPayment).forEach((el) => {
      Object.keys(value).forEach((val) => {
        if (el === val) {
          setPayloadPayment((prevState) => ({
            ...prevState,
            [el]: value[val],
          }));
        }
      });
    });
  };

  const handleInput = (e) => {
    setPayloadPayment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isDisabled = () => {
    return (
      payloadPayment.name === '' ||
      payloadPayment.product_code === '' ||
      payloadPayment.unit_code === '' ||
      payloadPayment.price === 0 ||
      payloadPayment.price === ''
    );
  };

  const handleSubmit = () => {
    if (isUpdatePage) {
      payloadPayment.id = id;
    }


    appAxios
      .post(
        isUpdatePage ? '/api/payment/update' : '/api/payment/save',
        payloadPayment, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 500
        }
      }
      )
      .then((res) => {
        if (res.status === 200) {

          console.log(res);
          navigate('/payment');
          if (isUpdatePage) {
            NotificationManager.success('Success Update Payment');
          } else {
            NotificationManager.success('Success Add Payment');
          }
        } else {
          NotificationManager.error(res.data.message);
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
                  <h1>{isUpdatePage ? 'Update Payment' : 'Create Payment'}</h1>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <h5>Payment Code</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='payment_code'
                      type='text'
                      className='form-control'
                      placeholder='Payment Code'
                      aria-label='Payment Code'
                      value={payloadPayment.payment_code}
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                      disabled={isUpdatePage}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Order Code</h5>
                  <select
                    name='order_code'
                    className='form-select'
                    placeholder='Order Code'
                    onChange={handleInput}
                    value={payloadPayment.order_code}
                  >
                    <RenderOptionListOrder />
                  </select>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col'>
                  <h5>Payment Type</h5>
                  <select
                    name='payment_type'
                    className='form-select'
                    placeholder='Payment Type'
                    onChange={handleInput}
                    value={payloadPayment.payment_type}
                  >
                    <RenderOptionListPaymentType />
                  </select>
                </div>
                <div className='col'>
                  <h5>Payment Note</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='payment_note'
                      type='text'
                      className='form-control'
                      placeholder='Product Code'
                      aria-label='Product Code'
                      value={payloadPayment.payment_note}
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

export default Payment;
