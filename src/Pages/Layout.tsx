import {Outlet} from "react-router-dom";
import { Header } from "../Components/Header/Header";
import useAuth from "../Hooks/useAuth";

export const Layout = () =>{
    const auth =useAuth()

    return(
        <div className="bg-secondary">
            {auth.auth?.user && <Header/>}
            <Outlet/>
        </div>
    )
}