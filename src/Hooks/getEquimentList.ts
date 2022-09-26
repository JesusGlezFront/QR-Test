import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

interface IEquipment {
  CurrentPage: string;
  Equipment: {}[];
  itemsPerPage: number;
  totalItems: string;
}

export const useFetchEquipment = () => {
  const [equipmentList, setEquipment] = useState<IEquipment | null>(null);

  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  let equipmentData: any = [];

  const getEquipment = async () => {
    const res = await axios.get("/furniture/list", {
      headers: { Authorization: `Bearer ${token}` },
    });
    equipmentData = res.data.data;
    setEquipment(
      {
        CurrentPage: equipmentData.current_page,
        Equipment: equipmentData.items,
        itemsPerPage: equipmentData.per_page,
        totalItems: equipmentData.total,
      },
    );
  };
  return { equipmentList, getEquipment };
};
