import Navbar from "../../components/Navbar";
import AppTable from "../../components/AppTable";
import "./listProduct.scss";

function ListProduct() {
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

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="custom-card mt-5">
              <AppTable title={ListProductTitle} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
