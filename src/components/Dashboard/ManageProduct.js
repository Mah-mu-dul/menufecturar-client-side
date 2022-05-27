import React, { useEffect, useState } from "react";
import ManageProductModal from "./ManageProductModal";

const ManageProduct = () => {
  const [product, setProduct] = useState([]);
  const [prod, setProd] = useState(null);

  useEffect(() => {
    fetch("https://gentle-oasis-35718.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  //   console.log(product);

  const handleproduct = (id) => {};
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
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div class="avatar">
                    <div class="w-20 rounded">
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
                    for="my-modal-6"
                    onClick={() => {
                      setProd(product);
                    }}
                    class="btn btn-secondary modal-button"
                  >
                    Delete
                  </label>
                </td>
                <td>
                  <button
                    onClick={() => handleproduct(product._id)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {prod && <ManageProductModal prod={prod} setProduct={setProduct}/>}
    </div>
  );
};

export default ManageProduct;
