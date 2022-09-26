
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useGetGallery = () => {
  const [cookies] = useCookies(["token"]);
  const [gallery, setGallery] =useState([]);
  
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getGalleryID = async ({URL,id}) => {

    const response = await axios.get(`${URL}${id}`, config);

    console.log(response.data.data)
    setGallery(response.data.data)
  };

  return [gallery, getGalleryID];
};