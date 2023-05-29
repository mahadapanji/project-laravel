import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AppTable from "../../components/AppTable";
import PrimaryButton from "../../components/Button/PrimaryButton";
import "./listProduct.scss";

function ListProduct() {
  const navigate = useNavigate();
  const ListProductTitle = ["ID", "Product Code", "Name", "Unit Code", "Price"];
  const data = [
    {
      id: 1,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL01",
      price: 10000000,
    },
    {
      id: 2,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL02",
      price: 10000000,
    },
    {
      id: 3,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 4,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 5,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 6,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 7,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 8,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 9,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 10,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 11,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 12,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 13,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 14,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 15,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 16,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 17,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 18,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 19,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 20,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
    {
      id: 21,
      product_code: "L001",
      name: "Laptop Lenovo G01",
      unit_code: "LL03",
      price: 10000000,
    },
  ];

  const handleAddProduct = () => {
    navigate("/product/add");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="custom-card mt-5">
                
              <div className="d-flex flex-row-reverse mb-2">
                <PrimaryButton
                  name="Add Product"
                  handleClick={handleAddProduct}
                />
              </div>

              <AppTable title={ListProductTitle} data={data} dataPerPage={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
