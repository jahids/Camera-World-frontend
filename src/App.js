import logo from './logo.svg';
import './App.css';
import Footer from './Shared/Footer';

import Carosel from './pages/Home/Carosel';
import Hero from './pages/Home/Hero';
import Navbar from "./Shared/Navbar"
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus/Aboutus';
import Contactus from './pages/contact/Contactus';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Detiles from './pages/Detiles';
import Authprovider from './Context/Authprovider';
import Privateroute from './privateroute/Privateroute';
import Notfound from './pages/Notfound/Notfound';
import Semicontact from './pages/contact/Semicontact';
import Admin from './pages/Admin-panel/Admin';
import PlaceOrder from './pages/place-order/PlaceOrder';
import MyOrder from './pages/MyOrder/MyOrder';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageAllOrder from './pages/ManageAllOrder/ManageAllOrder';
import Allproduct from './pages/ALLproduct/Allproduct';

function App() {
  return (
    <div className="App">
 
 <Authprovider>

      <BrowserRouter>

    <Navbar></Navbar>
      
     <Switch>

         <Route exact path="/">
              <Hero></Hero>
           </Route>

           <Route  path="/home">
              <Hero></Hero>
           </Route>

           <Route  path="/product">
              <Allproduct></Allproduct>
           </Route>

           <Privateroute  path="/admin">
           <Admin></Admin>
           </Privateroute>

           <Privateroute  path="/manageallorder">
            <ManageAllOrder></ManageAllOrder>
           </Privateroute>

           <Privateroute  path="/dashboard">
            <Dashboard></Dashboard>
           </Privateroute>


           <Privateroute  path="/myorder">
           <MyOrder></MyOrder>
           </Privateroute>

        

           <Route path="/about">
              <Aboutus></Aboutus>
           </Route>

           <Route path="/login">
              <Login></Login>
           </Route>


         {/* <Route path="contactus">
             <Contactus></Contactus>
           </Route> */}
           
         <Route path="/semi">
             <Semicontact></Semicontact>
           </Route>
           
           <Privateroute path="/detiles/:id">
              <Detiles></Detiles>
           </Privateroute>

           

           
           <Route path="/signup">
             <Signup></Signup>
           </Route>

           
           
           

           <Route path="/order">
            <PlaceOrder></PlaceOrder>

           </Route>

           



           <Route path="*">
            <Notfound></Notfound>
           </Route>


         </Switch>
      <Footer></Footer>
      </BrowserRouter>

  </Authprovider>

     
      
     
    </div>
  );
}

export default App;
