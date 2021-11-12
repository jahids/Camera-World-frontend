import React from 'react';

const Semicontact = () => {
    return (
        <div>
    <h1 className="my-4 mt-4">Contact Us</h1>

  <section id="contact" className="py-5 rounded-3">
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-4 text-center">Please fill out this form to contact us</h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="First Name" className="form-control mb-2"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Last Name" className="form-control mb-2"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" placeholder="Email" className="form-control mb-2"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Phone Number" className="form-control mb-2"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea cols="30" rows="5" placeholder="Message" className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <input type="submit" className="btn  card-button btn-dark mt-2" value="Send"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4>Get In Touch</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequuntur.</p>
              <h4>Address</h4>
              <p>House #100, Chittagong</p>
              <h4>Email</h4>
              <p>test@gmail.com</p>
              <h4>Phone</h4>
              <p className="mb-2">+434 3434 3433</p>
              <p>+433 4343 6567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
           
        
        </div>
    );
};

export default Semicontact;