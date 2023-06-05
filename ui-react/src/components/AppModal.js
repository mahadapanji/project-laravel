import "./AppModal.scss";
import PrimaryButton from "./Button/PrimaryButton";

function AppModal({ showModal, setDetailData, handleSubmit, detailData }) {
  const handleInput = (e) => {
    setDetailData((prevState) => ({
      ...prevState,
      [e.target.name]: !isNaN(parseInt(e.target.value))
        ? parseInt(e.target.value)
        : e.target.value,
    }));

    if (e.target.name === "qty" || e.target.name === "product_price") {
      setDetailData((prevState) => ({
        ...prevState,
        product_total_price: prevState.qty * prevState.product_price,
      }));
    }
  };

  return (
    <>
      {showModal ? (
        <div className="modal-container">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div className="custom-card mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h5>Name</h5>
                        <input
                          name="product_name"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Name"
                          aria-describedby="basic-addon1"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="col">
                        <h5>Code</h5>
                        <input
                          name="product_code"
                          type="text"
                          className="form-control"
                          placeholder="Code"
                          aria-label="Code"
                          aria-describedby="basic-addon1"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="col">
                        <h5>Unit Code</h5>
                        <input
                          name="product_unit_code"
                          type="text"
                          className="form-control"
                          placeholder="Unit Code"
                          aria-label="Unit Code"
                          aria-describedby="basic-addon1"
                          onChange={handleInput}
                        />
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col">
                        <h5>Quantity</h5>
                        <input
                          name="qty"
                          type="number"
                          className="form-control"
                          placeholder="Quantity"
                          aria-label="Quantity"
                          aria-describedby="basic-addon1"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="col">
                        <h5>Price</h5>
                        <input
                          name="product_price"
                          type="number"
                          className="form-control"
                          placeholder="Price"
                          aria-label="Price"
                          aria-describedby="basic-addon1"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="col">
                        <h5>Total Price</h5>
                        <input
                          name="product_total_price"
                          type="number"
                          className="form-control"
                          placeholder="Total Price"
                          aria-label="Total Price"
                          aria-describedby="basic-addon1"
                          value={detailData.product_total_price}
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div className="row mt-5 ">
                      <div className="col d-flex justify-content-end">
                        <PrimaryButton
                          name="Submit"
                          handleClick={handleSubmit}
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
