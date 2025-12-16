 import Yoyo from "./Child"
 import { Home as Hm,Home2 } from "./Home"
 import "./App.css"
 function App(){
  let name="sagar"
  let mystyle={
    backgroundColor:"blue",
    color:"orange",
    padding:"5px"
  }
  return(
    <div>
      <h1 style={{backgroundColor:"red",padding:"5px",color:"cyan"}}>hello internal css {name}</h1>
      <h1 style={mystyle}>hello internal css {name}</h1> 
      <div className="div">
        <h1>external css</h1>
        <h2>hello sagar this is react class</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum sequi tempora nihil iusto aspernatur repellat molestias voluptatum vel animi.</p>
      </div>
      <Yoyo />
      <Hm/>
      <Home2/>

    </div>
    
  )
 }
 export default App
//java script xml  

//  single element return 
//{variable name}
//className
//?:
//function name first latter capital
//self closing tag <img/><br/><hr/>