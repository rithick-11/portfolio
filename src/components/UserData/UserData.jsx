import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/useDataStore";

const UserData = () => {
  const { isAuthenticated, userData, onLogOut } = useDataStore();
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated ? (
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors cursor-pointer"
          onClick={onLogOut}
        >
          <IoIosLogOut className="text-base" />
          {userData?.name}
        </button>
      ) : (
        <button
          className="px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </>
  );
};

export default UserData;
