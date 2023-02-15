import React, { useRef } from 'react';


const UpdateOrder = ({ product }) => {
    const nameRef = useRef("");
    const urlref = useRef("");
    const availableRef = useRef("");
    const priceRef = useRef("");
    const minOrderRef = useRef("");
    const desRef = useRef("");


    const handlesubmit = (event) => {
        const name = nameRef.current.value;
        const url = urlref.current.value;
        const available = availableRef.current.value;
        const price = priceRef.current.value;
        const minOrder = minOrderRef.current.value;
        const des = desRef.current.value;
        event.preventDefault();

        const s = {
            name: name,
            url: url,
            available: available,
            price: price,
            minOrder: minOrder,
            des: des,
        };

        console.log(s);

    }
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-3xl text-rose-500 text-center">Update Product Details</h3>




                    <div className="lg:flex md:flex sm:block  justify-between">
                        <div className="">
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                <div className="h-[350px] flex items-center justify-center overflow-hidden">

                                    <img className="w-full" src={product.url} alt={product.name} />

                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="">



                            <form className="mx-auto w-[80%] lg:w-[50%] " onSubmit={handlesubmit}>
                                <label className="label  text-black">
                                    <span className="label-text text-black">Product Name</span>
                                </label>
                                <input
                                    ref={nameRef}
                                    required
                                    name="name"
                                    type="text"
                                    className="mx-auto input input-bordered input-primary w-full "
                                />
                                <label className="label  ">
                                    <span className="label-text text-black">Image URL</span>
                                </label>
                                <input
                                    ref={urlref}
                                    required
                                    name="url"
                                    type="url"
                                    className="mx-auto input input-bordered input-primary w-full "
                                />

                                <div className="flex justify-around">
                                    <span>
                                        <label className="label  ">
                                            <span className="label-text text-black">Minimum oder</span>
                                        </label>
                                        <input
                                            ref={minOrderRef}
                                            required
                                            name="minorder"
                                            type="number"
                                            className="mx-auto input input-bordered input-primary w-full "
                                        />
                                    </span>
                                    <span>
                                        <label className="label  ">
                                            <span className="label-text text-black">Available Units</span>
                                        </label>
                                        <input
                                            ref={availableRef}
                                            required
                                            name="available"
                                            type="number"
                                            className="mx-auto input input-bordered input-primary w-full "
                                        />
                                    </span>
                                </div>
                                <div className="w-1/2 mx-auto">
                                    <label className="label  ">
                                        <span className="label-text text-black">Price per unit</span>
                                    </label>
                                    <input
                                        ref={priceRef}
                                        required
                                        name="price"
                                        type="number"
                                        className="mx-auto input input-bordered input-primary w-full "
                                    />
                                </div>

                                <label className="label  ">
                                    <span className="label-text text-black">description</span>
                                </label>
                                <textarea
                                    required
                                    ref={desRef}
                                    name="des"
                                    className="textarea textarea-primary w-full"
                                    placeholder=""
                                />

                                <button  className="btn btn-primary mx-auto">submit</button>
                            </form>





                        </div>
                    </div>



                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-primary"></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrder;