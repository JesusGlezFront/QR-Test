import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../Api/Axios";

export const useGetPDF = () => {
  const [PDF, setPDF] = useState();

  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  var reader = new FileReader();

  const getPDF = async ({ URL, id }) => {
    const response = await axios.get(`${URL}pdf/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/pdf",
        "Content-Type": `application/pdf`,
        type: "application/pdf",
        responseType: 'blob',
        "Content-Disposition": `attachment; filename="file.pdf"`,
      },
    });



    setPDF(response.data);
    console.log(typeof response.data);
  };

  return [PDF, getPDF];
};
