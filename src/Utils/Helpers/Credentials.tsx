import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useRefreshToken } from "../../Hooks/useRefreshToken";
import { useCookies } from "react-cookie";



export const Credentials = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const auth = useAuth();
    const [cookies] = useCookies(['token'])


    useEffect(() => {


        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        !auth.auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    }, [])

    useEffect(() => {

    }, [isLoading])

    return (
        <>
            
                { isLoading
                    ? <p>Loading...</p>
                    : <Outlet />}
            
        </>
    )
}
