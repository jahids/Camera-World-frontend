
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../Hooks/useAuth';
import axios from 'axios';


const Detiles = () => {
    const {id} = useParams();
    const [singleServiceDetails, setServiceDetails] = useState({});
    const {user, setIsLoading} = useAuth();

    const {Name, description, img, _id, key} = singleServiceDetails
    // console.log(servicesId);
    // setIsLoading(true)
    // str loading is true

    useEffect( () => {
       fetch(`https://warm-hamlet-32240.herokuapp.com/services/jahid/${id}`)
        .then(res => res.json())
        .then(data => {
            setServiceDetails(data)
            console.log(singleServiceDetails);
        });
    },[]);


    //form data
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://warm-hamlet-32240.herokuapp.com/services/order', data)
        .then(res => {
            if(res.data.insertedId){
                alert("data insert successfully");
            }
        })
        .then(err => console.log(err))
    };


    return (
        <div className="container my-5">

            { 
                !_id ? 
                    <div className="text-center my-5 py-5">
                        <div class="spinner-border text-dark" role="status"> <span class="visually-hidden">Loading...</span> </div>
                    </div>
                : 
                    
                <div>
                    <div className="row">
                        <div className="text-center my-3">
                             <h2>Place Order</h2>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                        </div>
                            <div className="col-md-6 mt-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-2">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" defaultValue={user.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" placeholder="Enter your name"/>
                                        {/* hidden input */}
                                        <input type="hidden" defaultValue={Name} {...register("title")} />
                                        <input type="hidden" defaultValue={"pending"} {...register("status")} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" defaultValue={user.email} {...register("email")} className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                                        {/* hidden input */}
                                        <input type="hidden" defaultValue={id} {...register("product_id")}/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="district">District</label>
                                        <input type="text" {...register("district", { required: true })} className="form-control" id="district" placeholder="District Name"/>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" {...register("address", { required: true })} className="form-control" id="address" placeholder="Address"/>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" {...register("phone", { required: true })} className="form-control" id="phone" placeholder="phone"/>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                                    <button className="card-button px-5 mt-3">Order</button>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={img} alt="" />
                                <div className="my-3">
                                    <h5>{Name}</h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Detiles;



