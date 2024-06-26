import React, { useEffect, useState } from "react";
import ManageProductModal from "./ManageProductModal";
import UpdateOrder from "./UpdateOrder";

const ManageProduct = () => {
  const [product, setProduct] = useState([]);
  const [prod, setProd] = useState(null);
  const [selectedPoduct, setSelectedProduct] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [prod]);

  //   console.log(product);

  const handleproduct = (product) => {
    setSelectedProduct(product)
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Image</th>
              <th>name</th>
              <th>minimun order</th>
              <th>Available</th>
              <th>price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, i) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img
                        src={product.url}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.minOrder}</td>
                <td>{product.available}</td>
                <td>{product.price}</td>

                <td>
                  <label
                    htmlFor="my-modal-6"
                    onClick={() => {
                      setProd(product);
                    }}
                    className="btn btn-secondary modal-button"
                  >
                    Delete
                  </label>
                </td>
                <td>
                  <label onClick={() => { handleproduct(product) }} htmlFor="my-modal-5" className="btn btn-primary">
                    Update
                  </label>
                  <UpdateOrder product={selectedPoduct} />
                </td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {prod && <ManageProductModal prod={prod} setProduct={setProduct} />}
    </div>
  );
};

export default ManageProduct;
