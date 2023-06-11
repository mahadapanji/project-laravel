import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import Navbar from '../../components/Navbar';
import AppTable from '../../components/AppTable';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { useState, useEffect } from 'react';
import appAxios from '../../services/baseApi';

function ListProduct() {
  const [keyword, setKeyword] = useState('');
  const [listProduct, setListProduct] = useState([]);
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
      title: 'Product Code',
      value: 'product_code',
    },
    {
      title: 'Unit Code',
      value: 'unit_code',
    },
    {
      title: 'Price',
      value: 'price',
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
    getListProduct();
  }, []);

  const getListProduct = () => {
    appAxios
      .get('/api/product/all')
      .then((res) => {
        const data = res.data.data;
        data.forEach((el) => (el.action = 'action'));
        setListProduct(data);
      })
      .catch((err) => console.log(err));
  };

  const handleAddProduct = () => {
    navigate('/product/add');
  };

  const handleDeleteProduct = (id) => {
    appAxios
      .get(`/api/product/delete/${id}`)
      .then((res) => {
        getListProduct();
        NotificationManager.success('Success Delete Product');
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
    return listProduct.filter((el) => el.name.toLowerCase().includes(keyword));
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
                      name='Add Product'
                      handleClick={handleAddProduct}
                    />
                  </div>
                </div>
              </div>

              <AppTable
                title={ListProductTitle}
                data={filteredData()}
                dataPerPage={3}
                deleteButton={handleDeleteProduct}
                editButton={handleEditProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
