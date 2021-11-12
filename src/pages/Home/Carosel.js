import React from 'react';



const img1 = "https://i.ibb.co/b549f6B/blood-g3b2ff7911-1280.jpg";
const img2 = "https://i.ibb.co/F75YVnS/5438645.jpg";
const img3 = "https://i.ibb.co/Qd8JsXQ/doctor-standing-with-folder-stethoscope.jpg";


const Carosel = () => {
    return (
       
    <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
        >
       
        <div class="carousel-indicators">
            <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="1"
            aria-label="Slide 1"
            ></button>
            <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="2"
            aria-label="Slide 1"
            ></button>
        </div>

      
        <div class="carousel-inner">
         
            <div class="carousel-item active">
            <img
                src={img1}
                class="d-block w-100"
                alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            </div>

           
            <div class="carousel-item">
            <img
                src={img2}
                class="d-block w-100"
                alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>

           
            <div class="carousel-item">
            <img
                src={img3}
                class="d-block w-100"
                alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
            </div>
        </div>
       
        <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
       
    );
};

export default Carosel;