import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useUpload = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-Type": `multipart/form-data`,
    },
  };

  const Upload = async (acceptedFiles, id, URL) => {

    console.log(URL)
    console.log(id)
    const response = await axios.post(`/shop${URL}upload/${id}`, acceptedFiles, config);

    console.log(response);
  };

  return Upload;
};
