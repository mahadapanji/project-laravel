import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import appAxios from '../../services/baseApi';
import AppTable from '../../components/AppTable';
import AppModal from '../../components/AppModal';
import PrimaryButton from '../../components/Button/PrimaryButton';

function Order() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isUpdatePage = location.search !== '';
  const id = searchParams.get('id');

  useEffect(() => {
    if (isUpdatePage) {
      appAxios
        .get(`/api/order/get/${id}`)
        .then((res) => {
          mappingDetailData(res);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mappingDetailData = (res) => {
    const detailOrder = res.data.data;
    detailOrder.shipping_cost = parseInt(detailOrder.shipping_cost);
    detailOrder.total_price = parseInt(detailOrder.total_price);
    detailOrder.details.forEach((el) => {
      el.action = 'action';
      el.qty = parseInt(el.qty);
      el.product_price = parseInt(el.product_price);
      el.product_total_price = parseInt(el.product_total_price);
    });
    getListCity(parseInt(detailOrder.province_origin), 'origin', true);
    getListCity(
      parseInt(detailOrder.province_destination),
      'destination',
      true
    );
    getListShippingFee(detailOrder);
    setPayloadOrder(detailOrder);

    if (!detailOrder) {
      navigate('/order');
    }
  };

  const [payloadOrder, setPayloadOrder] = useState({
    order_code: '',
    name: '',
    address: '',
    courier: '',
    province_origin: 0,
    regency_origin: 0,
    province_destination: 0,
    regency_destination: 0,
    weight: 0,
    shipping_cost: 0,
    total_price: 0,
    details: [],
  });

  const [payloadDetailsProduct, setPayloadDetailsProduct] = useState({
    product_code: '',
    product_name: '',
    product_unit_code: '',
    qty: 0,
    product_price: 0,
    product_total_price: 0,
    action: 'action',
  });

  const [listProvince, setListProvince] = useState([]);
  const [listCityOrigin, setListCityOrigin] = useState([]);
  const [listCityDestination, setListCityDestination] = useState([]);
  const [listCourier, setListCourier] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [listShippingFee, setListShipping] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [indexDetail, setIndexDetail] = useState(0);

  useEffect(() => {
     getListProvince();
     getListCourier();
     getListProduct();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payloadOrder.details, payloadOrder.shipping_cost]);

  const listOrderHeader = [
    {
      title: 'Code',
      value: 'product_code',
    },
    {
      title: 'Name',
      value: 'product_name',
    },
    {
      title: 'Unit Code',
      value: 'product_unit_code',
    },
    {
      title: 'Quantity',
      value: 'qty',
    },
    {
      title: 'Price',
      value: 'product_price',
    },
    {
      title: 'Total Price',
      value: 'product_total_price',
    },
    {
      title: 'Action',
      value: 'action',
    },
  ];

  const getListProvince = () => {
    appAxios
      .get('/api/order/provinces')
      .then((res) => {
        const data = res.data.data;
        data.unshift({
          province_id: 0,
          province_name: '',
        });
        setListProvince(data);
      })
      .catch((err) => console.log(err));
  };

  const getListCity = (id, place, isFirstRender) => {
    appAxios
      .get(`/api/order/cities/${id}`)
      .then((res) => {
        const data = res.data.data;
        data.unshift({
          city_id: 0,
          province_id: 0,
          city_name: '',
          postal_code: 0,
        });
        if (place.includes('origin')) {
          if (!isFirstRender) {
            setPayloadOrder((prevState) => ({
              ...prevState,
              regency_origin: 0,
            }));
          }
          setListCityOrigin(data);
        } else if (!place.includes('origin')) {
          if (!isFirstRender) {
            setPayloadOrder((prevState) => ({
              ...prevState,
              regency_destination: 0,
            }));
          }
          setListCityDestination(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const getListProduct = () => {
    appAxios
      .get('/api/product/all')
      .then((res) => {
        setListProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getListCourier = () => {
    appAxios
      .get('/api/order/couriers')
      .then((res) => {
        const data = res.data.data;
        data.unshift({
          id: 0,
          code_courier: '',
          name_courier: '',
        });
        setListCourier(data);
      })
      .catch((err) => console.log(err));
  };

  const getListShippingFee = (val) => {
    const payloadShipping = {
      origin: val.regency_origin,
      destination: val.regency_destination,
      weight: val.weight,
      courier: val.courier,
    };
    appAxios
      .post('/api/order/ongkir', payloadShipping)
      .then((res) => {
        const data = res.data.data.results[0].costs;
        data.unshift({
          cost: [{ value: 0 }],
          service: '',
        });
        setListShipping(data);
      })
      .catch((err) => console.log(err));
  };

  const RenderOptionProvince = () => {
    return listProvince.map((el, i) => {
      return (
        <option value={el.province_id} key={i}>
          {el.province_name}
        </option>
      );
    });
  };

  const RenderOptionCityOrigin = () => {
    return listCityOrigin.map((el, i) => {
      return (
        <option value={el.city_id} key={i}>
          {el.city_name}
        </option>
      );
    });
  };

  const RenderOptionCityDestination = () => {
    return listCityDestination.map((el, i) => {
      return (
        <option value={el.city_id} key={i}>
          {el.city_name}
        </option>
      );
    });
  };

  const RenderOptionCourier = () => {
    return listCourier.map((el, i) => {
      return (
        <option value={el.name_courier} key={i}>
          {el.name_courier.toUpperCase()}
        </option>
      );
    });
  };

  const RenderOptionShippingFee = () => {
    return listShippingFee.map((el, i) => {
      return (
        <option value={el?.cost[0].value} key={i}>
          {el.service !== ''
            ? `JNE - ${el.service} | Rp${el?.cost[0].value} `
            : ''}
        </option>
      );
    });
  };

  const handleInput = (e) => {
    setPayloadOrder((prevState) => ({
      ...prevState,
      [e.target.name]: !isNaN(parseInt(e.target.value))
        ? parseInt(e.target.value)
        : e.target.value,
    }));

    if (e.target.name.includes('province')) {
      getListCity(e.target.value, e.target.name, false);
    }
  };

  const handleDisableSelectCity = (val) => {
    return payloadOrder[val] === 0;
  };

  const handleDisableCheckShippingFee = () => {
    return (
      payloadOrder.province_origin === 0 ||
      payloadOrder.regency_origin === 0 ||
      payloadOrder.province_destination === 0 ||
      payloadOrder.regency_destination === 0 ||
      payloadOrder.weight === 0 ||
      payloadOrder.weight === '' ||
      payloadOrder.courier === ''
    );
  };

  const handleDisableSubmitOrder = () => {
    return (
      handleDisableCheckShippingFee() ||
      payloadOrder.details.length === 0 ||
      payloadOrder.name === '' ||
      payloadOrder.address === '' ||
      payloadOrder.order_code === ''
    );
  };

  const handleDisableSelectShippingCost = () => {
    if (isUpdatePage) {
      return false;
    }
    return listShippingFee.length === 0;
  };

  const handleAddProduct = () => {
    if (isEdit) {
      const copyDetails = [...payloadOrder.details];
      copyDetails[indexDetail] = payloadDetailsProduct;
      setPayloadOrder((prevState) => ({
        ...prevState,
        details: copyDetails,
      }));
    } else {
      setPayloadOrder((prevState) => ({
        ...prevState,
        details: [...prevState.details, payloadDetailsProduct],
      }));
    }
    setIsEdit(false);
    setShowModal(false);
    resetInputProduct();
  };

  const calculateTotalPrice = () => {
    let result = 0;
    for (let i = 0; i < payloadOrder.details.length; i++) {
      result += parseInt(payloadOrder.details[i].product_total_price);
    }
    setPayloadOrder((prevState) => ({
      ...prevState,
      total_price: (result += payloadOrder.shipping_cost),
    }));
  };

  const resetInputProduct = () => {
    setPayloadDetailsProduct((prevState) => ({
      ...prevState,
      product_code: '',
      product_name: '',
      product_unit_code: '',
      qty: 0,
      product_price: 0,
      product_total_price: 0,
    }));
  };

  const closeModalProduct = () => {
    setIsEdit(false);
    setShowModal(false);
    resetInputProduct();
  };

  const openModalProduct = () => {
    setShowModal(true);
  };

  const handleEditDetailProduct = (id) => {
    const copyDetails = [...payloadOrder.details];
    const findIndex = copyDetails.findIndex((el) => el?.id === id);

    setIndexDetail(isUpdatePage ? findIndex : id);

    setPayloadDetailsProduct(
      payloadOrder.details[isUpdatePage ? findIndex : id]
    );
    setIsEdit(true);
    setShowModal(true);
  };

  const handleDeleteDetailProduct = (id) => {
    const copyDetails = [...payloadOrder.details];
    const findIndex = copyDetails.findIndex((el) => el?.id === id);
    copyDetails.splice(isUpdatePage ? findIndex : id, 1);
    setPayloadOrder((prevState) => ({
      ...prevState,
      details: copyDetails,
    }));
  };

  const handleSubmitOrder = () => {
    const payload = JSON.parse(JSON.stringify(payloadOrder));

    for (let i = 0; i < payload.details.length; i++) {
      delete payload.details[i]['action'];
    }
    appAxios
      .post(isUpdatePage ? '/api/order/update' : '/api/order/save', payload, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 500
        }
      })
      .then((res) => {
        
        if (res.status === 200) {

        NotificationManager.success(
          isUpdatePage ? 'Success Update Order' : 'Success Create Order'
        );
        navigate('/order');
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
              <AppModal
                showModal={showModal}
                closeModal={closeModalProduct}
                setDetailData={setPayloadDetailsProduct}
                detailData={payloadDetailsProduct}
                handleSubmit={handleAddProduct}
                optionProduct={listProduct}
                isEdit={isEdit}
              />
              {/* FIRST ROW */}
              <div className='row'>
                <div className='col'>
                  <h5>Order Code</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='order_code'
                      type='text'
                      className='form-control'
                      placeholder='Order Code'
                      aria-label='Order Code'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                      value={payloadOrder.order_code}
                      disabled={isUpdatePage}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Name</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='name'
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      aria-label='Name'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                      value={payloadOrder.name}
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Address</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='address'
                      type='text'
                      className='form-control'
                      placeholder='Address'
                      aria-label='Address'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                      value={payloadOrder.address}
                    />
                  </div>
                </div>
              </div>
              {/* END FIRST ROW */}

              {/* SECOND ROW */}
              <div className='row mt-5'>
                <div className='col'>
                  <h5>Province Origin</h5>
                  <select
                    name='province_origin'
                    className='form-select'
                    placeholder='Province Origin'
                    onChange={handleInput}
                    value={payloadOrder.province_origin}
                  >
                    <RenderOptionProvince />
                  </select>
                </div>
                <div className='col'>
                  <h5>Regency Origin</h5>
                  <select
                    name='regency_origin'
                    className='form-select'
                    placeholder='Regency Origin'
                    onChange={handleInput}
                    value={payloadOrder.regency_origin}
                    disabled={handleDisableSelectCity('province_origin')}
                  >
                    <RenderOptionCityOrigin />
                  </select>
                </div>
                <div className='col'>
                  <h5>Weight</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='weight'
                      type='number'
                      className='form-control'
                      placeholder='Weight'
                      aria-label='Weight'
                      aria-describedby='basic-addon1'
                      onChange={handleInput}
                      value={payloadOrder.weight}
                    />
                  </div>
                </div>
              </div>
              {/* END ROW */}

              {/* THIRD ROW */}
              <div className='row'>
                <div className='col'>
                  <h5>Province Destination</h5>
                  <select
                    name='province_destination'
                    className='form-select'
                    placeholder='Province Destination'
                    onChange={handleInput}
                    value={payloadOrder.province_destination}
                  >
                    <RenderOptionProvince />
                  </select>
                </div>
                <div className='col'>
                  <h5>Regency Destination</h5>
                  <select
                    name='regency_destination'
                    className='form-select'
                    placeholder='Regency Destination'
                    onChange={handleInput}
                    value={payloadOrder.regency_destination}
                    disabled={handleDisableSelectCity('province_destination')}
                  >
                    <RenderOptionCityDestination />
                  </select>
                </div>
                <div className='col'>
                  <h5>Courier</h5>
                  <select
                    name='courier'
                    className='form-select'
                    placeholder='courier'
                    onChange={handleInput}
                    value={payloadOrder.courier}
                  >
                    <RenderOptionCourier />
                  </select>
                </div>
              </div>
              {/* END THIRD ROW */}

              {/* FOURTH ROW */}
              <div className='row mt-3'>
                <div className='col-6'>
                  <h5>Shipping Cost</h5>
                  <select
                    name='shipping_cost'
                    className='form-select mb-3'
                    placeholder='Shipping Cost'
                    onChange={handleInput}
                    value={payloadOrder.shipping_cost}
                    disabled={handleDisableSelectShippingCost()}
                  >
                    <RenderOptionShippingFee />
                  </select>
                  <PrimaryButton
                    name='Check'
                    handleClick={() => getListShippingFee(payloadOrder)}
                    handleDisable={handleDisableCheckShippingFee()}
                  />
                </div>
              </div>
              {/*END FOURTH ROW */}

              <div className='row mt-5'>
                <div className='col'>
                  <h5>List Product</h5>
                  <AppTable
                    title={listOrderHeader}
                    data={payloadOrder.details}
                    dataPerPage={3}
                    editButton={handleEditDetailProduct}
                    deleteButton={handleDeleteDetailProduct}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <PrimaryButton
                    name='Add Product'
                    handleClick={openModalProduct}
                  />
                </div>
              </div>

              <div className='row mt-5'>
                <div className='col-6'>
                  <h5>Total Price</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='total_price'
                      type='number'
                      className='form-control'
                      placeholder='Total Price'
                      aria-label='Total Price'
                      aria-describedby='basic-addon1'
                      disabled={true}
                      value={payloadOrder.total_price}
                    />
                  </div>
                </div>
              </div>

              <div className='row mt-5'>
                <div className='col d-flex justify-content-center'>
                  <PrimaryButton
                    name='Submit'
                    handleClick={handleSubmitOrder}
                    handleDisable={handleDisableSubmitOrder()}
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

export default Order;
