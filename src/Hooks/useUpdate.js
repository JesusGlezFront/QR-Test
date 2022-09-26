
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useListUpdate = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const updateListRow = async (values, profile,URL) => {
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
      email: values.email,
      office: values.office,
      country: values.country,
      profile: {
        id: profile.id,
        order_counter: profile.order_counter,
        tax: profile.tax,
      },
    };

    const response = await axios.put(`${URL}${values.id}`, data, config);

    console.log(response);
  };

  return updateListRow;
};
