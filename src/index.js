import {createRoot} from  "react-dom/client";
import Apple from "./apple/apple"
import Gauva from "./gauva/gauva"
import Navbar from "./navbar"
import img from "./mangoimg.jpeg"

const root = createRoot(document.getElementById("root"));
function Mango() {
    return <div>
         <Navbar/>
       <h1>  mango</h1>
        <img src={img}></img>
      
        
    </div>
}

const currentpath = window.location.pathname
if(currentpath=="/"){
    root.render(<Mango/>)
}
else if (currentpath=="/apple"){
    root.render(<Apple/>)
}
else if (currentpath=="/gauva"){
    root.render(<Gauva/>)
}


