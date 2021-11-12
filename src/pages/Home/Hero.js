import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Homeservice from '../Ourservice/Homeservice';
import './carosel.css';
import NewEvent from './NewEvent';
import Review from './Review/Review';

const img1 = "https://ibb.co/MBzNhnR";
const img2 = "https://ibb.co/N61VS8J";
const img3 = "https://ibb.co/3mFXnqh";


const Hero = () => {
    const [product, setproduct] = useState([]);

    useEffect(()=> {
        
        fetch('http://localhost:5000/services/limit')
        .then(res => res.json())
        .then(data => setproduct(data))


    },[])


    return (
        <div>
            <section>
         
            <Carousel className="mb-4 bg-dark ">
                <Carousel.Item >
                    <img
                        className="d-block h-70 w-100 rounded"
                        // src="https://i.ibb.co/jM3sTqP/1640184.jpg"
                        src="https://cdn-7.nikon-cdn.com//Images/CPCAssets/category-landing-pages/img/cameras/category-dslr-lg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1></h1>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        // src="https://i.ibb.co/vL9yccn/1640159.jpg"
                        src="https://cdn-7.nikon-cdn.com//Images/CPCAssets/category-landing-pages/img/cameras/category-mirrorless-lg.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1></h1>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        // src="https://i.ibb.co/PQzWz1T/1640151.jpg"
                        src="https://cdn-7.nikon-cdn.com//Images/CPCAssets/category-landing-pages/img/cameras/category-point-and-shoot-lg.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1></h1>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



 
      
    <h2> Our services</h2>
    {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
    <div className="container">
    <div class=" row row-cols-12 row-cols-md-3 g-5">
           
            {
                product.length <1? <div className="text-center my-5 py-5">
                <div class="spinner-border text-dark" role="status"> <span class="visually-hidden">Loading...</span> </div>
            </div>:

                product.map(datas => <Homeservice
                    key={datas._id}
                    post={datas}
                   ></Homeservice>)
                
            }
     
       </div>
       </div>
  
   

 </section>
 <NewEvent></NewEvent>
 <Review></Review>


       
        </div>
    );
};

export default Hero;