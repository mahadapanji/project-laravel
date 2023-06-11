import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import appAxios from '../../services/baseApi';
import Navbar from '../../components/Navbar';
import AppTable from '../../components/AppTable';
import PrimaryButton from '../../components/Button/PrimaryButton';

function ListOrder() {
  const [keyword, setKeyword] = useState('');
  const [listOrder, setListOrder] = useState([]);
  const navigate = useNavigate();

  const ListProductTitle = [
    {
      title: 'ID',
      value: 'id',
    },
    {
      title: 'Name',
      value: 'name',
    },
    {
      title: 'Order Code',
      value: 'order_code',
    },
    {
      title: 'Regency Origin',
      value: 'regency_origin',
    },
    {
      title: 'Province Origin',
      value: 'province_origin',
    },
    {
      title: 'Total Price',
      value: 'total_price',
    },
    {
      title: 'Created At',
      value: 'created_at',
    },
    {
      title: 'Updated At',
      value: 'updated_at',
    },
    {
      title: 'Action',
      value: 'action',
    },
  ];

  useEffect(() => {
    getListOrder();
  }, []);

  const getListOrder = () => {
    appAxios
      .get('/api/order/all')
      .then((res) => {
        const data = res.data.data;
        data.forEach((el) => (el.action = 'action'));
        setListOrder(data);
      })
      .catch((err) => console.log(err));
  };

  console.log(listOrder);

  const handleAddOrder = () => {
    navigate('/order/add');
  };

  const handleInputSearch = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const filteredData = () => {
    return listOrder.filter((el) => el.name.toLowerCase().includes(keyword));
  };

  const handleEditOrder = (id) => {
    navigate(`/order/update?id=${id}`);
  };

  const handleDeleteOrder = (id) => {
    appAxios
      .get(`/api/order/delete/${id}`)
      .then((res) => {
        console.log(res);
        getListOrder();
        NotificationManager.success('Success Delete Order');
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
              <div className='row'>
                <div className='col'>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search'
                      aria-label='Search'
                      aria-describedby='basic-addon1'
                      onChange={handleInputSearch}
                    />
                    <span className='input-group-text' id='basic-addon1'>
                      <i className='bi bi-search'></i>
                    </span>
                  </div>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse mb-2'>
                    <PrimaryButton
                      name='Create Order'
                      handleClick={handleAddOrder}
                    />
                  </div>
                </div>
              </div>

              <AppTable
                title={ListProductTitle}
                data={filteredData()}
                editButton={handleEditOrder}
                deleteButton={handleDeleteOrder}
                dataPerPage={3}
              />
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  );
}

export default ListOrder;
