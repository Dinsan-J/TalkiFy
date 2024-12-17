import { CiLogout } from "react-icons/ci";
import useLogout from "../../Pages/hooks/useLogout";

const Logoutbutton = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      {!loading ? (
        <CiLogout
          className="w-7 h-7 mt-52 ml-3 cursor-pointer text-white fixed bottom-5 left-3 z-10"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logoutbutton;
