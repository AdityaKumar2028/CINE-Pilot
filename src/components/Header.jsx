import logo from "../assets/logo.jpg";
import happy from "../assets/happy.png";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAskPilotState } from "../assets/askPilotSlice";
import AskPilotButton from "./AskPilotButton";
import useAuthListener from "../hooks/useAuthListener";
import { useCallback } from "react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const askPilotState = useSelector((store) => store.askPilot?.askPilotState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useAuthListener();

  const handleAskPilot = useCallback(() => {
    const newState = !askPilotState;
    dispatch(addAskPilotState(newState));

    if (newState) {
      navigate("/askPilot");
    } else {
      navigate("/browse");
    }
  }, [dispatch, askPilotState, navigate]);

  function handleSignOut() {
    signOut(auth).catch(() => navigate("/error"));
  }

  return (
    <div className="absolute top-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-black/80 to-transparent">
      <img
        className="cursor-pointer w-28 sm:w-44 object-contain mix-blend-screen rounded-lg"
        src={logo}
        alt="logo"
        onClick={() => {
          dispatch(addAskPilotState(false));
          navigate("/browse");
        }}
      />

      {user && (
        <div className="flex items-center gap-3 sm:gap-8">
          <img
            className="cursor-pointer w-8 h-8 sm:w-9 sm:h-9 rounded object-cover"
            src={happy}
            alt="user-avatar"
          />

          <span className="text-white font-medium text-sm hidden sm:block">
            {user?.displayName}
          </span>

          {askPilotState ? (
            <button
              onClick={handleAskPilot}
              className="bg-white cursor-pointer text-black px-3 py-1 sm:px-5 sm:py-1.5 text-sm sm:text-base rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Home
            </button>
          ) : (
            <AskPilotButton props={handleAskPilot} />
          )}

          <button
            onClick={handleSignOut}
            className="text-white cursor-pointer text-xs sm:text-sm font-semibold hover:opacity-70 transition-opacity duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
