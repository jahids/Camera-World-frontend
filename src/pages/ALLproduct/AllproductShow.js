import React from 'react';
import { Link } from 'react-router-dom';

const AllproductShow = (props) => {

    const {Name,description,price,img,_id} = props.post;
    console.log(props.post);
    return (
       
        <div class="col-md-4 mb-5 ">
        <div class="card-sl">
            <div class="card-image">
                <img width="500px"
                height="300px"
                    src={img}/>
            </div>

            <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
            <div class="card-heading">
               {Name}
            </div>
            <div class="card-text">
                {description}
            </div>
            <div class="card-text">
              ${price}
            </div>
            <Link to={`detiles/${_id}`} >
            <a  class="card-button">Buy Now</a>
            </Link>

        
</div>  
</div>

       
    );
};

export default AllproductShow;