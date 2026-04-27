import Home from "./MyComponent1/Home";
import Footer from "./MyComponent1/Footer";
import Navbar from "./MyComponent1/Navbar";
import Contact from "./MyComponent1/Contact";
import Login from "./MyComponent1/Login";
import "./App.css";
import About from "./MyComponent1/About";
import {BrowserRouter as Routers,Routes,Route } from "react-router-dom"
function App() {
  return (
    <>
  
        <Routers>
          <Navbar/>
            <Routes>
              <Route path="" element={<Home/>}></Route>
              <Route path="about" element={<About/>}></Route>
              <Route path="contact" element={<Contact/>}></Route>
              <Route path="Login" element={<Login/>}></Route>
              
     
              
             
            </Routes>
          <Footer/>

          
        </Routers>
    
    </>
  );
}
export default App;
//java script xml

//  single element return
//{variable name}
//className
//?:
//function name first latter capital
//self closing tag <img/><br/><hr/>
