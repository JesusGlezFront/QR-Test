import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { GenericButton } from "../Buttons/GenericButton";
import { ButtonGrid } from "../Grids/ButtonsGrid";
import { Header } from "../Header/Header";

export const Home = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  auth.auth?.permissions.includes("manage-furniture")

  const buttons = {
    'manageFurniture':[{
      key:1,
      text: "Ver QR",
      click: () => navigate("/manage-equipment"),
    },
    ]
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen pt-16">
        <div>
          <h1 className="text-4xl font-light">Bienvenido {auth.auth?.user}</h1>
        </div>
        <ButtonGrid ButtonProps={buttons.manageFurniture} />
      </div>
    </>
  );
};
