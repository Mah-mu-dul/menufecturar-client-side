import React from 'react';

const ManageProductModal = ({prod}) => {
    console.log(prod);
  
    const handleDelete = async (id) => {
     
    };
    return (
      <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-red-600">
              Do you want to delete?
            </h3>
            <p class="py-4 text-center text-2xl font-bold">{prod?.name}</p>
            <div class="modal-action">
              <label for="my-modal-6" onClick={() =>handleDelete(prod._id)} class="btn btn-secondary text-white">
                Yes
              </label>
              <label for="my-modal-6" class="btn btn-primary">
                No
              </label>
              
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default ManageProductModal;