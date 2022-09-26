import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useListPagination = (page, pageSize) => {
  const [updatedList, setListItems] = useState();
  const [cookies] = useCookies(["token"]);

 page++
  const token = cookies.token;
  const config ={
    headers: { Authorization: `Bearer ${token}`  },
    params : new URLSearchParams([['page',page],['limit',pageSize]])}

  const getUpdatedList = async (URL) => {    
    const response = await axios.get(`${URL}list/`, config
    );
  
    setListItems((prev) => {
      return {
        ...prev,
        CurrentPage: response.data.data.current_page,
        Boutiques: response.data.data.items,
        itemsPerPage:response.data.data.per_page,
        rowsPerPageCount: response.data.data.total
      };
    });
  };

  return [updatedList, getUpdatedList];
};
