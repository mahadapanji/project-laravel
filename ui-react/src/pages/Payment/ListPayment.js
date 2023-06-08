import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import Navbar from '../../components/Navbar';
import AppTable from '../../components/AppTable';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { useState, useEffect } from 'react';
import appAxios from '../../services/baseApi';

function ListPayment() {
  const [keyword, setKeyword] = useState('');
  const [listPayment, setListPayment] = useState([]);
  const navigate = useNavigate();
  const ListProductTitle = [
    {
      title: 'ID',
      value: 'id',
    },
    {
      title: 'Payment Code',
      value: 'payment_code',
    },
    {
      title: 'Order Code',
      value: 'order_code',
    },
    {
      title: 'Payment Type',
      value: 'payment_type',
    },
    {
      title: 'Payment Note',
      value: 'payment_note',
    },
    {
      title: 'Created at',
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
    getListPayment();
  }, []);

  const getListPayment = () => {
    appAxios
      .get('/api/payment/all')
      .then((res) => {
        const data = res.data.data;
        data.forEach((el) => (el.action = 'action'));
        setListPayment(data);
      })
      .catch((err) => console.log(err));
  };

  const handleAddProduct = () => {
    navigate('/payment/add');
  };

  const handleDeletePayment = (id) => {
    appAxios
      .get(`/api/payment/delete/${id}`)
      .then((res) => {
        getListPayment();
        NotificationManager.success('Success Delete Payment');
      })
      .catch((err) => console.log(err));
  };

  const handleEditProduct = (id) => {
    navigate(`/product/update?id=${id}`);
  };

  const handleInputSearch = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const filteredData = () => {
    return listPayment.filter((el) =>
      el.payment_code.toLowerCase().includes(keyword)
    );
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
                      name='Create Payment'
                      handleClick={handleAddProduct}
                    />
                  </div>
                </div>
              </div>

              <AppTable
                title={ListProductTitle}
                data={filteredData()}
                dataPerPage={3}
                deleteButton={handleDeletePayment}
                editButton={handleEditProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPayment;
