import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AppTable from "../../components/AppTable";
import PrimaryButton from "../../components/Button/PrimaryButton";

function ListOrder() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const ListOrderHeader = [
    "Order Code",
    "Nama",
    "Alamat",
    "Jumlah Ongkir",
    "Total",
    "Action",
  ];
  const data = [
    {
      order_code: 1,
      name: "Budi",
      alamat: "Bekasi Utara",
      postage_amount: 15000,
      total: 10000000,
      action: "Action",
    },
  ];

  const handleAddOrder = () => {
    navigate("/product/add");
  };

  const handleInputSearch = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value.toLowerCase());
  };

  const filteredData = () => {
    return data.filter((el) => el.name.toLowerCase().includes(keyword));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="custom-card mt-5">
              <div className="row">
                <div className="col">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      onChange={handleInputSearch}
                    />
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-row-reverse mb-2">
                    <PrimaryButton
                      name="Create Order"
                      handleClick={handleAddOrder}
                    />
                  </div>
                </div>
              </div>

              <AppTable
                title={ListOrderHeader}
                data={filteredData()}
                dataPerPage={3}
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default ListOrder;
