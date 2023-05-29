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

              <AppTable title={ListProductTitle} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
