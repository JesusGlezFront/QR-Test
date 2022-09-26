import ReactDataGrid from "@inovua/reactdatagrid-community";
import DataGrid from "react-data-grid";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchEquipment } from "../../Hooks/getEquimentList";
import { GenericButton } from "../Buttons/GenericButton";
import "@inovua/reactdatagrid-community/index.css";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { Icon } from "@chakra-ui/react";
import QRCode from "react-qr-code";

const QrRenderer = (params: any) => {
  return (
    <div className="bg-secondary, p-4">
      <QRCode
        value={params.value}
      />
    </div>
  );
};

const QrHeigth = 300;

export const EquipmentPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { equipmentList, getEquipment } = useFetchEquipment();

  useEffect(() => {
    const getEquimentList = async () => {
      await getEquipment();
    };
    !equipmentList ? getEquimentList() : setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  console.log(equipmentList);

  const columnDefs = [
   
    { headerName: "QR", field: "qr",width:360,height:360, cellRenderer: QrRenderer },
  ];

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col  items-center justify-center h-screen">
          <div>
            <GenericButton text="Volver" click={() => navigate(-1)} />
          </div>
          {equipmentList && (
            <>
              {/* <DataGrid columns={columns} rows={equipmentList.Equipment} /> */}
              <div className="ag-theme-alpine-dark w-full h-1/2 mx-6 p-10">
                <AgGridReact
                  rowData={equipmentList.Equipment} // Row Data for Rows
                  columnDefs={columnDefs} // Column Defs for Columns
                  animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                  pagination={true}
                  rowHeight={QrHeigth}
                  paginationPageSize={equipmentList.itemsPerPage}
                />

                {/* verificar el otro tipo de tabla para el nuevo paginado */}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
