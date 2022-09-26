interface ButtonProps {
  text: string;
  click?: () => void;
}

export const GenericButton = ({ text, click }: ButtonProps) => {
  return (
    <button className=" md:button__desktop sm:button__mobile" onClick={click}>
      {text}
    </button>
  );
};
