import React from 'react';

const NewEvent = () => {
    return (
        <div className="container my-5">
            <div className="text-center my-3">
                <h2>Upcoming Events</h2>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src="https://www.pngitem.com/pimgs/m/265-2655167_transparent-red-camera-png-png-download.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Red Camera</h5>
                        <h6 className="text-muted">Oct 31, 2021</h6>
                        <p class="card-text">Join the Boo Crew Saturday and Sunday mornings for some extra festive "Pre-Opening" Hallo-Fun activities!</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://www.kindpng.com/picc/m/189-1895121_red-camera-png-camera-red-dragon-png-transparent.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">cinema camera</h5>
                        <h6 className="text-muted">Oct 22, 2021</h6>
                        <p class="card-text">Knoebels transforms into a spooktacular place for ghost and ghouls of all ages.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://c.pxhere.com/photos/ea/6f/camera_nikon_dslr-1398208.jpg!d" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Sports Dslr </h5>
                        <h6 className="text-muted">Oct 5, 2021</h6>
                        <p class="card-text">Grab your friends and join us for Trivia Night!</p>
                    </div>
                    </div>
                </div>

                <iframe className="w-100" title="kaptai" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.823403910306!2d92.22224995747071!3d22.49645856297121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad4eb0dbe3a9a5%3A0xd3e13f6327f82695!2sKaptai%20Hydro%20Electric%20Station%20Rest%20House%20(BPDB)!5e0!3m2!1sen!2sbd!4v1635695264829!5m2!1sen!2sbd" 
                height="450px" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default NewEvent;