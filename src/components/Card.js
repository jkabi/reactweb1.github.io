import React from "react";

const Card = ()=>{
    return(
        <div class=" container-fluid bg-info p-5">
        <div class="text-center text-white">
          <h2 class="pt-4 display-4"> Discover the amazing new app</h2>
          <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="d-flex justify-content-center m-4 ">
            <button class="btn btn-warning btn-lg me-3">Play Store</button>
        
            <button class="btn btn-warning btn-lg">Play Store</button>
        </div> 
        <h1 class="text-white">We love Friends !</h1>   
        </div>
       
        <div class="row  d-flex justify-content-evenly">
          <div class="col-md-3">
           <div class="card">
           <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                class="card-img-top"
                alt="..."
              />
            <div class="card-body">
              <h4>card Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem ullam repellat odio mollitia  Maxime, veniam beatae!</p>
              <button class="btn btn-success">Go somewhere</button>
            </div>
           </div>  
         </div>      
          <div class="col-md-3">
           <div class="card">
            <img class=" card-img-top" 
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" 
            alt=""></img>
            <div class="card-body">
              <h4>card Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem ullam repellat odio mollitia  Maxime, veniam beatae!</p>
              <button class="btn btn-success">Go somewhere</button>
            </div>
           </div>  
         </div>      
          <div class="col-md-3">
           <div class="card">
            <img class=" card-img-top" 
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
             alt=""></img>
            <div class="card-body">
              <h4>card Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem ullam repellat odio mollitia  Maxime, veniam beatae!</p>
              <button class="btn btn-success">Go somewhere</button>
            </div>
           </div>  
         </div>      
    </div>

    </div>
    )
}

export default Card;