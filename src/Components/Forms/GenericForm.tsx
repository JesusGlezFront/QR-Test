import {  FC } from "react";


interface FormProps  {
  formTitle: string;
  children: JSX.Element;
  handleSubmit: any ;
  buttonText:string;
};



export const GenericForm: FC<FormProps> = ({formTitle,handleSubmit, children,buttonText}) => {
 
  return (
    <>
      
          <h1 className="text-4xl font-light my-4 text-center"> {formTitle}</h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            {children}
            <button
              className="bg-primary text-text text-base p-3 my-8 border-none w-full rounded-3xl"
              type="submit"
            >
             {buttonText}
            </button>
          </form>
          

    </>
  );
};
