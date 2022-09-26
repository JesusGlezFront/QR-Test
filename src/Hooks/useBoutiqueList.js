import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useBoutiqueList = () => {
  const [listItems, setListItems] = useState();

  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  

  const getBoutiqueList = async () => {
    const response = await axios.get("/boutique/list", {
      headers: { Authorization: `Bearer ${token}` },
      
    });

    setListItems(() => {
      return {
        CurrentPage: response.data.data.current_page,
        Boutiques: response.data.data.items,
        itemsPerPage:response.data.data.per_page,
        rowsPerPageCount: response.data.data.total
      };
    });
  };
  
  return [listItems, getBoutiqueList];
};
