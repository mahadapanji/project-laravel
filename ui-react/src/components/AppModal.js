import "./AppModal.scss";

function AppModal({ showModal }) {
  return (
    <>
      {showModal ? (
        <div className="modal-container">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div className="custom-card mt-5"></div>
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
