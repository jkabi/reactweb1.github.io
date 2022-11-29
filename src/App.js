

import React from 'react';
import AppSection from './components/AppSection';

import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

const App = ()=>{
  return(
    <div>    
      <Navbar />
      <AppSection />
     <Card />
     <Footer />
    </div>
  )
}


//functional component
// function App() {
//   return(

//     <div class="container bg-primary">
//       <h1>hellow world</h1>
      
    
// <p>lofah ksid fafg asg</p>
//     </div>
//   )
// }

//class component

// class  app extends React.Component{
//   render(){
//     return(
//       <div>
//       <h1>hellow edtgrsd world</h1>
//     </div>
//     )
//   }
// }


export default App;
