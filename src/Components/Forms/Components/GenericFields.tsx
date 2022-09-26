import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FC } from "react";

interface FieldProps {
  fieldValues: {
    id: string;
    name: string;
    title: string;
    type: string;
    placeholder: string;
    value: any;
    touched: any;
    errors: any;
    onChange: any;
    onBlur: any;
  };
}

export const GenericFields: FC<FieldProps> = ({ fieldValues }) => {
  return (
    <>
      <label className="text-base font-medium mb-4"  htmlFor={fieldValues.id}>{fieldValues.title}</label>
      <input
      className="text-xl font-medium mb-4 p-2"
        id={fieldValues.id}
        name={fieldValues.name}
        type={fieldValues.type}
        placeholder={fieldValues.placeholder}
        onChange={fieldValues.onChange}
        onBlur={fieldValues.onBlur}
        value={fieldValues.value}
      />
      {[fieldValues.touched] && [fieldValues.errors] ? (
        <>
           {fieldValues.errors &&
          (<Alert status="error">
            <AlertIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {fieldValues.errors}
            </AlertDescription>
          </Alert>)
          } 
        </>
      ) : null}
    </>
  );
};
