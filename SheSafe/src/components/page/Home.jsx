
import { MenuFixed } from "../layout/menu/MenuFixed"
import { Navbar } from "../layout/navbar/Navbar"
import { Register } from "./Register"


export const Home = () => {
    return(
        <>
        <Navbar/>
        <body>
        <Register/>
        <MenuFixed/>
        </body>
        </>
       
    )
}