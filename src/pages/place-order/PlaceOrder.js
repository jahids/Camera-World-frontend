import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    const { register,id, handleSubmit, reset } = useForm();

    const onSubmit = data => {
    console.log(data);
    axios.post('https://warm-hamlet-32240.herokuapp.com/services/order', data)
    .then(res => {
        if(res.data.insertedId){
         alert('succesful data saved');
         reset();   
        console.log(res);
        }
})
}

    return (
        <div>
  <section className="my-5">
<div className="row ">
<div className="text-center my-3">
    <h2>Place Order</h2>
    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
</div>
<div className="col-md-6">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" defaultValue={user.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" placeholder="Enter your name"/>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" defaultValue={user.email} {...register("email")} className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
            <input type="hidden" defaultValue={id} {...register("product_id")}/>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="district">District</label>
            <input type="text" {...register("district", { required: true })} className="form-control" id="district" placeholder="District Name"/>
            
        </div>
        <div className="form-group mb-2">
            <label htmlFor="address">Address</label>
            <input type="text" {...register("address", { required: true })} className="form-control" id="address" placeholder="Address"/>
           
        </div>
        <div className="form-group mb-2">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" {...register("phone", { required: true })} className="form-control" id="phone" placeholder="phone"/>
           
        </div>
        <button className="cus-btn px-5 mt-3">Order</button>
    </form>
</div>
<div className="col-md-6"></div>
</div>
</section>
    </div>

    );
};

export default PlaceOrder;





