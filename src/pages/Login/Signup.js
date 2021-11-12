import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';




const Signup = () => {

  const {newAccount, saveUser, saveGoogleUser,user} = useAuth()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {

    const {name,email, password} = data;

    console.log(email, password, name )

      if(password.length >= 6){
        newAccount(email, password, name);
        saveUser(name, email);
        alert("your Account Create");
        console.log('hello')
      
      }else{
        alert('password must be at last 6 cahracter')
      }
  };
  
    return (

    
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="card card0 border-0">
          <div class="row d-flex">
              <div class="col-lg-6">
          <div class="card1 pb-5">
            
              <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img  style={{marginTop:"30px"}} src="https://previews.123rf.com/images/jim808080/jim8080801605/jim808080160500013/56065940-word-cloud-sharp-design-camera.jpg" class="image"/> </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="card2 card border-0 px-4 py-5">
             
             
              <div class="row px-3"> <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>

                  </label> <input  class="mb-4" type="text" {...register("email")} required name="email" placeholder="Enter a valid email address"/> </div>
              <div class="row px-3">
                
                 <label class="mb-1">
                  <h6 class="mb-0 text-sm ">Password</h6>
                  </label> <input  type="password" {...register("password")} required name="password" placeholder="Enter password"/> </div>
                  
                  <div class="row px-3">
                 <label class="mb-1">
                  <h6 class="mb-0 text-sm ">Name</h6>
                  </label> <input class="mb-5" type="name" {...register("name")} required name="name" placeholder="Enter Name"/> </div>
                  
        
                  
        
              <div class="row mb-3 px-3"> <button type="submit" class="card-button text-center ">Sign Up</button> </div>
              <div class="row px-3 mb-4">
                  <div class="line"></div> <small class="or text-center">Or</small>
                  <div class="line"></div>
              </div>
              <button   class=" card-button mb-2 me-2">Sign In With Google</button>
              <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account?<Link to="/login"><a class="text-danger ">Login</a></Link> </small> </div>
          </div>
      </div>
  </div>
  
</div>
</div>
</form>
  </div>


        
    );
};

export default Signup;