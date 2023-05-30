import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AppTable from "../../components/AppTable";
import PrimaryButton from "../../components/Button/PrimaryButton";
import "./listProduct.scss";
import { useState } from "react";

function ListProduct() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const ListProductTitle = [
    "ID",
    "Product Code",
    "Name",
    "Unit Code",
    "Price",
    "Action",
  ];
  const data = [
    {
      id: 1,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL01",
      price: 10000000,
      action: "Action",
    },
    {
      id: 2,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL02",
      price: 10000000,
      action: "Action",
    },
    {
      id: 3,
      product_code: "L001",
      name: "Laptop Lenovo G02",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 4,
      product_code: "L001",
      name: "Laptop Lenovo G02",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 5,
      product_code: "L001",
      name: "Laptop Lenovo G03",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 6,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 7,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 8,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 9,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 10,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 11,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 12,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 13,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 14,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 15,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 16,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 17,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 18,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 19,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 20,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
    {
      id: 21,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
      action: "Action",
    },
  ];

  console.log(data);
  const handleAddProduct = () => {
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
                      name="Add Product"
                      handleClick={handleAddProduct}
                    />
                  </div>
                </div>
              </div>

              <AppTable
                title={ListProductTitle}
                data={filteredData()}
                dataPerPage={3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
