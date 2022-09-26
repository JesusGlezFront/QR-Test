import { LoginForm } from "./Components/LoginForm"


export const Login = () =>{

    return(
        <>
            <div className=" sm:login-mobile md:login-desktop" >
                <LoginForm/>
                <div className="sm:login-mobile__banner md:login-desktop__banner">
                    <h1 className="text-6xl">Bienvenido</h1>
                </div>
            </div>
        </>
    )
}