import React from "react";

const Footer = ()=>{
    return(
        <div class=" row p-5 d-flex justify-content-evenly bg-dark">
        <div class="col-md-4 text-white">
            <h2 class="text-white">Agency</h2>
            <p class="text-white-50 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit est cumque non ipsum unde sapiente. Necessitatibus architecto possimus maiores dicta numquam sed explicabo itaque labore maxime, ipsam magni quibusdam deserunt.</p>
        </div>
        <div class="col-md-4">
            <h2 class="text-white">Address</h2>
            <p class="text-white-50 mt-3">
              Address line1 <br></br>
              Address line2 <br></br>
              Address line3 <br></br>
              Pincoe-600244
            </p>
        </div>
        <div class="col-md-4 text-white-50">
            <h2 class=" text-xl">Address</h2>
            <p class="mt-3 ">
           <a class="text-decoration-none text-white" href="tel:+91000000000 "> phone: 000-000-000 </a>
        
            <a class="text-decoration-none text-white" href="mailto:  contact@gmail.com ">  contact@gmail.com </a>
        </p> 
        </div>
       
    </div>
    
    )
}

export default Footer;