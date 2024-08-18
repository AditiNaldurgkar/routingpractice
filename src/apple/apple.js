import Navbar from "../navbar"
import Img from "./appleimg.jpeg"
function Apple(){
    return <div> 
        <Navbar/>
        <h1>Apple</h1>
        <img src={Img}></img>
    </div>
}
export default Apple;