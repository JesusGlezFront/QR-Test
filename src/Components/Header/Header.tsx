import { useLogout } from "../../Hooks/useLogout";
import { HiOutlineLogout } from "react-icons/hi";
import { IconButton } from "@chakra-ui/react";

export const Header = () => {
  const logout = useLogout();

  return (
    <>
      <header className="bg-primary flex w-full p-4 justify-between">
        <h1 className="text-text">SAI</h1>
        <IconButton
          aria-label="logout"
          variant="ghost"
          color='white'
          size="xs"
          fontSize='1.5rem'
          icon={<HiOutlineLogout />}
          onClick={() => logout()}
        />
      </header>
    </>
  );
};
