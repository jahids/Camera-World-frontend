import React, { useEffect, useState } from 'react';
import AllproductShow from './AllproductShow';

const Allproduct = () => {

    const [product, setproduct] = useState([]);

    useEffect(()=> {
        
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setproduct(data))


    },[])

    return (
        <div>
            <h2> All Product</h2>
    {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
    <div className="container">
    <div class=" row row-cols-12 row-cols-md-3 g-5">
           
            {
                product.length <1? <div className="text-center my-5 py-5">
                <div class="spinner-border text-dark" role="status"> <span class="visually-hidden">Loading...</span> </div>
                 </div>:

                product.map(datas => <AllproductShow
                    key={datas._id}
                    post={datas}
                    ></AllproductShow>)
                
            }
     
       
       </div>
       </div>
  
        </div>
    );
};

export default Allproduct;