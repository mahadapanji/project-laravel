import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import appAxios from '../../services/baseApi';

function Order() {
  const [payloadOrder, setPayloadOrder] = useState({
    order_code: '',
    name: '',
    address: '',
    province_origin: 0,
    regency_origin: 0,
    province_destination: 0,
    regency_destination: 0,
    courier: 0,
  });
  const [listProvince, setListProvince] = useState([]);
  const [listCityOrigin, setListCityOrigin] = useState([]);
  const [listCityDestination, setListCityDestination] = useState([]);
  const [listCourier, setListCourier] = useState([]);

  useEffect(() => {
    getListProvince();
    getListCourier();
  }, []);

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
        <option value={el.id} key={i}>
          {el.name_courier}
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
    console.log(val);
    return payloadOrder[val] === 0;
  };

  console.log(payloadOrder);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='custom-card mt-5'>
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
              <div className='row'>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
