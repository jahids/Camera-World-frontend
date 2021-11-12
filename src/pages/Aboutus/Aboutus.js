import React from 'react';
import { Carousel, Col, Container, Navbar, Row } from 'react-bootstrap';

const img = `https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/uploads/2020/01/feature1.png`;

const img1 = `https://i.ibb.co/10NyLq4/travel.jpg`;
const img4 = `https://w7.pngwing.com/pngs/76/198/png-transparent-medicine-health-care-clinic-therapy-disease-medical-technology-background-black-stethoscope-blue-hand-people.png`;
const img2 = "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__340.jpg";
const img3 = "https://storage-prtl-co.imgix.net/endor/articles/1801/images/1539001698_medicine%20pic%201.jpg?max-w=660&max-h=532&fit=crop&auto=format,compress&q=40";


const Aboutus = () => {
    return (
        

      <div>

            <Navbar/>
            <Container className="p-5">
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={6} xs={12}>
                        <img className="w-100" src={img1} alt="" />



                  </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h3>About Us</h3>
                        <p>

                        I love travelling and I love languages, so imagine my excitement when I came across a treasure trove of travel words and wanderlust synonyms that describe how we feel before, during, and after we travel. 

                    Just like a photo can’t fully capture what it feels like to
                    stand on the edge of a fjord, neither can ‘wanderlust’ fully 
                    express how we feel when we crave our next adventure. These travel words
                    are literary gems which have been gathered from languages around the world. 
                    From Japanese to Swedish, Latin to Greek, travel brochures of the future will be 
                    peppered with travel words like of resfeber, livsnjutare, and coddiwomple.

                        </p>
                    </Col>
                </Row>
            </Container>  
         </div>
        
    
    );
};

export default Aboutus;