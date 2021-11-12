import React from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
    const {signinusingGoogle, isloading, setloading, newUserLogin, saveGoogleUser, setuser} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const Redirect_ui = location.state?.from || "/home";

    const googlelogin = () => {
        console.log('hello');

        
        signinusingGoogle()
        .then((result) => {
            const user = result.user;
            setuser(user)
            saveGoogleUser(user.displayName, user.email);

           history.push(Redirect_ui);
           
             
          })
          
          .finally(() => setloading(false));
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const {email, password} = data;
        console.log(email, password)
        newUserLogin(email, password)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6">
                <div class="card1 pb-5">
                  
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img style={{marginTop:"30px"}} src="https://previews.123rf.com/images/jim808080/jim8080801605/jim808080160500013/56065940-word-cloud-sharp-design-camera.jpg" class="image"/> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                   
                   
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Email Address</h6>
                        </label> <input class="mb-4" type="text" {...register("email")}name="email" placeholder="Enter a valid email address"/> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" {...register("password")} placeholder="Enter password"/> </div>
                    <div class="row px-3 mb-4">
                        <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input"/> 
                        <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    <div class="row mb-3 px-3"> <button type="submit" class="card-button text-center">Login</button> </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
                    <button  onClick={googlelogin} class=" card-button mb-2 me-2">Sign In With Google</button>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Create  account?<Link to="/signup"><a class="text-danger ">Signup</a></Link> </small> </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
</form>
        </div>
    );
};

export default Login;