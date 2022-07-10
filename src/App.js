import React from 'react';
import {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import { Rating } from '@mui/material'
// import Rating from './components/Rating'


function App() {
  let [cartValue,setCartValue]=useState(0);
  let [toggle,setToggle]=useState(true);
  let [toggle1,setToggle1]=useState(true);
  let [toggle2,setToggle2]=useState(true);
  let [toggle3,setToggle3]=useState(true);
  let [toggle4,setToggle4]=useState(true);
  let [toggle5,setToggle5]=useState(true);
  let [toggle6,setToggle6]=useState(true);
  let [toggle7,setToggle7]=useState(true);


  return <>
   <Navigation data={{cartValue:cartValue}}/>
   {/* <!-- Header--> */}
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
{/* section */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                    <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                                
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>

                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product price--> */}
                                    <Rating/><br/>
                                    <span className="text-muted text-decoration-line-through">$20.00</span> $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle1((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle1((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                        
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span> $25.00
                                     
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle2?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle2((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle2((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>

                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product price--> */}
                                    <Rating/><br/>
                                    $40.00 
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle3((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle3((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span> $25.00

                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle4((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle4((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>

                                    {/* <!-- Product price--> */}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle5?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle5((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle5((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>

                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product price--> */}
                                    <Rating/><br/>
                                    <span className="text-muted text-decoration-line-through">$20.00</span> $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle6?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle6((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle6((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product price--> */}
                                    <Rating/><br/>
                                    $40.00 
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {  
                                toggle7?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue+1);
                                  setToggle7((previous)=>!previous)
                                }}>Add to cart</button>:
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  setCartValue(cartValue-1);
                                  setToggle7((previous)=>!previous)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>

  </>
    
  
}

export default App;
