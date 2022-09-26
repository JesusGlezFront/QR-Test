
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useGetBoutique = () => {
  const [cookies] = useCookies(["token"]);
  const [boutique, setBoutique] =useState([]);
  
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getBoutiqueID = async (id) => {

    const response = await axios.get(`/boutique/${id}`, config);

    setBoutique(response.data.data)
  };

  return [boutique, getBoutiqueID];
};