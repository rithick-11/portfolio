import { IoIosLogOut } from "react-icons/io";

import useDataStore from "../../store/useDataStore";

const UserData = ({ setShowLogin }) => {
  const { isAuthenticated, userData, onLogOut } = useDataStore();

  console.log(userData);

  const handelUserBtn = async () => {
    setShowLogin(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <button
          className="px-3 py-1 rounded-md bg-orange-400 font-light hover:bg-orange-500 transition flex items-center justify-center gap-2 text-center"
          onClick={onLogOut}
        >
          <IoIosLogOut className="text-xl" />
          {userData.name}
        </button>
      ) : (
        <button
          className="px-3 py-1 rounded-md bg-orange-400 font-light hover:bg-orange-500 transition flex items-center justify-center gap-2 text-center"
          onClick={handelUserBtn}
        >
          Login
        </button>
      )}
    </>
  );
};

export default UserData;
