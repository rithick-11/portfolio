import { useContext } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { IoIosLogOut } from "react-icons/io";

import PortfolioContext from "../../Context/PortfolioContext";

const UserData = ({ setShowLogin }) => {
  const { userDetail, getProjectList, getUserData } =
    useContext(PortfolioContext);

  const handelUserBtn = () => {
    if (Cookies.get("user_token") === undefined) {
      setShowLogin(true);
    } else {
      Cookies.remove("user_token");
      toast.success("Logout Successfully");
      getProjectList()
      getUserData()
    }
  };

  return (
    <>
      <button
        className="px-2 py-1 bg-orange-500 rounded-full text-md font-bolder border-2  hover:scale-105 flex justify-center"
        onClick={handelUserBtn}
      >
        {Cookies.get("user_token") === undefined ? (
          "Login"
        ) : (
          <p className="flex gap-1 items-center">
            <span>{userDetail.name}</span> <IoIosLogOut />
          </p>
        )}
      </button>
    </>
  );
};

export default UserData;
