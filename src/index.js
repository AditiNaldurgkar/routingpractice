import {createRoot} from  "react-dom/client";
import apple from "./apple/apple"
const root = createRoot(document.getElementById("root"));
function mango() {
    return <div>
        <h1>mango</h1>
    </div>
}

const currentpath = window.location.pathname
if(currentpath=="/"){
    root.render(mango())
}
else if (currentpath=="/apple"){
    root.render(apple())
}
else if (currentpath=="/apple"){
    root.render(apple())
}


