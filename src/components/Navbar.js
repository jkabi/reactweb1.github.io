import React from "react";

const Navbar = ()=>{
    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <div class="navbar-brand mx-5">
                <a class="text-success text-decoration-none" href="#">Navbar</a>
            </div>
            <div class=" collapse navbar-collapse ">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Meeting</a>
                    </li>
        
                   </ul>
            </div>
            <form class="me-5">
                <input 
                class="p-1 me-3" type="text" name="" id="" placeholder="search"></input>
                <button class="btn btn-outline-success">search</button>
            </form>
          
        </div>

    </nav>
        
    )

} 

export default Navbar;