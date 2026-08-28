import logo from "../../assets/logo.jpg";
import happy from "../../assets/happy.png";
import { signOut } from "firebase/auth";
import { auth } from "../../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAskPilotState } from "../../assets/askPilotSlice";
import AskPilotButton from "../AskPilotFeatures/AskPilotButton";
import useAuthListener from "../../hooks/useAuthListener";
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
    <header className="absolute top-0 z-50 flex w-full items-center justify-between gap-3 bg-linear-to-b from-black/90 via-black/60 to-transparent px-3 py-3 sm:px-8 sm:py-4">
      <img
        className="w-24 shrink-0 cursor-pointer rounded-lg object-contain mix-blend-screen sm:w-44"
        src={logo}
        alt="logo"
        onClick={() => {
          dispatch(addAskPilotState(false));
          navigate("/browse");
        }}
      />

      {user && (
        <div className="flex min-w-0 items-center justify-end gap-1.5 sm:gap-5 lg:gap-8">
          <img
            className="hidden h-8 w-8 shrink-0 cursor-pointer rounded object-cover sm:block sm:h-9 sm:w-9"
            src={happy}
            alt="user-avatar"
          />

          <span className="text-white font-medium text-sm hidden sm:block">
            {user?.displayName}
          </span>

          {askPilotState ? (
            <button
              onClick={handleAskPilot}
              className="cursor-pointer rounded-md bg-white px-2.5 py-2 text-xs font-semibold text-black transition hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:py-1.5 sm:text-base"
            >
              Home
            </button>
          ) : (
            <AskPilotButton props={handleAskPilot} />
          )}

          <button
            onClick={handleSignOut}
            className="cursor-pointer whitespace-nowrap px-1 py-2 text-[11px] font-semibold text-white transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
