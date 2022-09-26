import { Alert } from "@mui/material";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useListDelete = () => {
  const [cookies] = useCookies(["token"]);
  

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const deleteListRow = async ({URL, id}) => {
    console.log("funciona evento", { id });
    const response = await axios.delete(`${URL}${id}`, config);
    console.log(response);
    return (
      <>
        <Alert severity="success">Elemento eliminado</Alert>
      </>
    );
  };

  return deleteListRow;
};
