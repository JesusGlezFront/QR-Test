import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useGetList = () => {
  const [listItems, setListItems] = useState();

  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  

  const getList = async () => {
    const response = await axios.get("/solsys/product/draft/list", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setListItems(() => {
      return {
        CurrentPage: response.data.data.current_page,
        Products: response.data.data.items,
        itemsPerPage:response.data.data.per_page,
        rowsPerPageCount: response.data.data.total
      };
    });
  };
  
  return Promise.all[listItems, getList];
};
