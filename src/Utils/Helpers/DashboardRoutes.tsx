// import { useLocation,useNavigate} from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";


// interface IPerm {
//     allowedPermissions :
//     | "admin"
//     | "support"
//     | "department-leader"
//     | "security-chief"
//     | "security-guard"
//     | "graphic-design"
//     | "";
// }

// interface IDash {
    
//         'manage-furniture':[{
//           key:1,
//           text: "Ver lista de equipo",
//           click: () => navigate("/manage-equipment"),
//         },
//         {
//           key:2,
//           text: "Inventario",
//         },
//         { key:3, text: "Crear salida" },
//         { key:4, text: "Actualizar status" },
//         { key:5, text: "Prueba" }]

// }


// export const AuthCheck = ({ allowedPermissions }: IPerm) => {
//     const navigate = useNavigate();
//   const auth = useAuth();
//   const location = useLocation();
//   return auth.auth?.permissions.includes(allowedPermissions ) ? (
//     <ButtonGrid ButtonProps={buttons} />
//   ) 
// };

// WIP