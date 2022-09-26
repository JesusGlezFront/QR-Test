import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { AuthCheck } from "./Utils/Helpers/AuthCheck";

import { Credentials } from "./Utils/Helpers/Credentials";

import useAuth from "./Hooks/useAuth";
import { Login } from "./Components/Login/Login";
import { Home } from "./Components/Home/Home";
import { EquipmentPage } from "./Components/Equipment/EquipmentPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";



function App() {
  const auth = useAuth();
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rutas publicas*/}
        <Route path="login" element={<Login />} />
        <Route path="404" element={<ErrorPage />} />

        {/* Rutas protegidas por roles */}
        <Route element={<Credentials />}>
          <Route path="/" element={(auth.auth?.user ? <Home /> : <ErrorPage />)} />
         <Route
            element={<AuthCheck allowedRoles={'admin'} />}
          >
            <Route path="manage-equipment" element={<EquipmentPage />} />
          </Route>
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
