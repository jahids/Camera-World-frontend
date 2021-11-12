import React from 'react';
import { Link } from 'react-router-dom';
import "./notfound.css"

const Notfound = () => {
    return (
        <div>
            <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block">404</span>
                        <div class="mb-4 lead">The page you are looking for was not found.</div>
                        <Link to="/home">
                            <button type="button" style={{backgroundColor:"#1f487e"}} class="btn text-light">
                                Back to Home
                            </button>
                        
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Notfound;