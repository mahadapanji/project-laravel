import './AppModal.scss';
import PrimaryButton from './Button/PrimaryButton';

function AppModal({
  showModal,
  isEdit,
  setDetailData,
  handleSubmit,
  detailData,
  optionProduct,
  closeModal,
}) {
  const handleInput = (e) => {
    if (e.target.name === 'product_name') {
      const index = optionProduct.findIndex((el) => el.name === e.target.value);
      const selectedProduct = optionProduct[index];
      setDetailData((prevState) => ({
        ...prevState,
        product_code: selectedProduct.product_code,
        product_name: selectedProduct.name,
        product_unit_code: selectedProduct.unit_code,
        product_price: parseInt(selectedProduct.price),
        product_total_price:
          checkIsNumber(prevState.qty) * parseInt(selectedProduct.price),
      }));
    }

    if (e.target.name === 'qty') {
      setDetailData((prevState) => ({
        ...prevState,
        product_total_price:
          checkIsNumber(e.target.value) * prevState.product_price,
        qty: e.target.value,
      }));
    }
  };

  const checkIsNumber = (val) => {
    return !isNaN(parseInt(val)) ? parseInt(val) : 0;
  };

  const RenderOptionProduct = () => {
    return optionProduct.map((el, i) => {
      return (
        <option value={el.name} key={i}>
          {el.name}
        </option>
      );
    });
  };

  const handleDisableButton = () => {
    return (
      detailData.product_name === '' || detailData.product_total_price === 0
    );
  };

  return (
    <>
      {showModal ? (
        <div className='modal-container'>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-8 modalAddProduct'>
                <div className='custom-card mt-5'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col'>
                        <h5>Name</h5>
                        <select
                          name='product_name'
                          className='form-select'
                          placeholder='Name'
                          onChange={handleInput}
                          value={detailData.product_name}
                        >
                          <RenderOptionProduct />
                        </select>
                      </div>
                      <div className='col'>
                        <h5>Code</h5>
                        <input
                          name='product_code'
                          type='text'
                          className='form-control'
                          placeholder='Code'
                          aria-label='Code'
                          aria-describedby='basic-addon1'
                          disabled={true}
                          value={detailData.product_code}
                        />
                      </div>
                      <div className='col'>
                        <h5>Unit Code</h5>
                        <input
                          name='product_unit_code'
                          type='text'
                          className='form-control'
                          placeholder='Unit Code'
                          aria-label='Unit Code'
                          aria-describedby='basic-addon1'
                          disabled={true}
                          value={detailData.product_unit_code}
                        />
                      </div>
                    </div>

                    <div className='row mt-5'>
                      <div className='col'>
                        <h5>Quantity</h5>
                        <input
                          name='qty'
                          type='number'
                          className='form-control'
                          placeholder='Quantity'
                          aria-label='Quantity'
                          aria-describedby='basic-addon1'
                          onChange={handleInput}
                          value={detailData.qty}
                        />
                      </div>
                      <div className='col'>
                        <h5>Price</h5>
                        <input
                          name='product_price'
                          type='number'
                          className='form-control'
                          placeholder='Price'
                          aria-label='Price'
                          aria-describedby='basic-addon1'
                          disabled={true}
                          value={detailData.product_price}
                        />
                      </div>
                      <div className='col'>
                        <h5>Total Price</h5>
                        <input
                          name='product_total_price'
                          type='number'
                          className='form-control'
                          placeholder='Total Price'
                          aria-label='Total Price'
                          aria-describedby='basic-addon1'
                          value={detailData.product_total_price}
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div className='row mt-5 '>
                      <div className='col d-flex justify-content-start'>
                        <PrimaryButton name='Cancel' handleClick={closeModal} />
                      </div>
                      <div className='col d-flex justify-content-end'>
                        <PrimaryButton
                          name={isEdit ? 'Update' : 'Submit'}
                          handleClick={handleSubmit}
                          handleDisable={handleDisableButton()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default AppModal;
