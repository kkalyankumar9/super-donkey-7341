
import Navbars from "../Components/Hompage/Navbar"
import Register from "../Components/Hompage/Registration"
import Login from "../Components/Hompage/SignIn"
import {Routes,Route} from "./routes"
function Allroutes(){
return (
    <div>
        <Routes>
            <Route path="/" element={<Navbars/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>



        </Routes>
    </div>
)
}
export default Allroutes