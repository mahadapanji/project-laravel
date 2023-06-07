import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import appAxios from '../../services/baseApi';
import AppTable from '../../components/AppTable';
import AppModal from '../../components/AppModal';
import PrimaryButton from '../../components/Button/PrimaryButton';

function Order() {
  const [payloadOrder, setPayloadOrder] = useState({
    order_code: '',
    name: '',
    address: '',
    province_origin: 0,
    regency_origin: 0,
    province_destination: 0,
    regency_destination: 0,
    weight: 0,
    shipping_cost: 0,
    courier: '',
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

  const getListCity = (id, place) => {
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
          setPayloadOrder((prevState) => ({
            ...prevState,
            regency_origin: 0,
          }));
          setListCityOrigin(data);
        } else {
          setPayloadOrder((prevState) => ({
            ...prevState,
            regency_destination: 0,
          }));
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

  const getListShippingFee = () => {
    const payloadShipping = {
      origin: payloadOrder.regency_origin,
      destination: payloadOrder.regency_destination,
      weight: payloadOrder.weight,
      courier: payloadOrder.courier,
    };
    appAxios
      .post('/api/order/ongkir', payloadShipping)
      .then((res) => {
        console.log(res.data.data.results[0].costs);
        setListShipping(res.data.data.results[0].costs);
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
        <option value={el.cost[0].value} key={i}>
          JNE - {el.service} | Rp{el.cost[0].value}
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
      getListCity(e.target.value, e.target.name);
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
      payloadOrder.weight === ''
    );
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
    setIndexDetail(id);
    setIsEdit(true);
    setShowModal(true);
    setPayloadDetailsProduct(payloadOrder.details[id]);
  };

  const handleDeleteDetailProduct = (id) => {
    const copyDetails = [...payloadOrder.details];
    copyDetails.splice(id, 1);
    setPayloadOrder((prevState) => ({
      ...prevState,
      details: copyDetails,
    }));
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
                      name='name'
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      aria-label='Name'
                      aria-describedby='basic-addon1'
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
                    />
                  </div>
                </div>
                <div className='col'>
                  <h5>Address</h5>
                  <div className='input-group mb-3'>
                    <input
                      name='name'
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      aria-label='Name'
                      aria-describedby='basic-addon1'
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

              <div className='row mt-3'>
                <div className='col-6'>
                  <h5>Shipping Cost</h5>
                  <select
                    name='shipping_cost'
                    className='form-select mb-3'
                    placeholder='Shipping Cost'
                    onChange={handleInput}
                    value={payloadOrder.shipping_cost}
                  >
                    <RenderOptionShippingFee />
                  </select>
                  <PrimaryButton
                    name='Check'
                    handleClick={getListShippingFee}
                    handleDisable={handleDisableCheckShippingFee()}
                  />
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
