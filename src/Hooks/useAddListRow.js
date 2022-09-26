
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useAddListRow = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const addRow = async (data,  URL) => {

    const query = {
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
      email: data.email,
      office: data.office,
      country: data.country,
      profile: {
        order_counter: data.order_counter,
        tax: data.tax,
      },
      roles:{
        role: data.role
      },
    };

    const response = await axios.post(`${URL}`, query, config);

    console.log(response);
  };

  return addRow ;
};
