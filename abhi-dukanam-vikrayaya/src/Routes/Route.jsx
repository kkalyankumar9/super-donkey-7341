import { Route, Routes } from "react-router-dom"
import Navbars from "../Components/Hompage/Navbar"
import Pagenotfound from "../Components/Hompage/Pagenotfound"
import Login from "../Components/Hompage/SignIn"
import Register from "../Components/Hompage/Registration"
import ProductPage from "../Components/Productspage/Products"
import Cart from "../Components/Cartpage/Cartpage"
import ProductList from "../Components/Cartpage/prod"


function Allroutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Navbars/>}></Route>
            <Route path="/register" element={<Register/>}> </Route>

            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/cart" element={<Cart/>}> </Route>
            <Route path="/product" element={<ProductPage/>}></Route>
            <Route path="/prod" element={<ProductList/>}></Route>

            
            <Route path="/*" element={<Pagenotfound/>}></Route>
        </Routes>


    </div>
}
export default Allroutes