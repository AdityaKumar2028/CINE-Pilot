import logo from "../assets/logo.jpg";
import happy from "../assets/happy.png";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser, addUser } from "../assets/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toogleAskPilot } from "../assets/askPilotSlice";

const Header = () => {
  const store = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  function handleAskPilot() {
    dispatch(toogleAskPilot());
  }

  return (
    <div className="absolute top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
      <img
        className="cursor-pointer w-44 object-contain mix-blend-screen rounded-lg"
        src={logo}
        alt="logo"
      />

      {store && (
        <div className="flex items-center gap-8">
          <img
            className="cursor-pointer w-9 h-9 rounded object-cover"
            src={happy}
            alt="user-avatar"
          />
          <span className="text-white font-medium text-sm hidden sm:block">
            {store?.displayName}
          </span>

          <button
            onClick={handleAskPilot}
            className="cursor-pointer group relative inline-flex p-[2px] rounded-[10px] overflow-hidden focus:outline-none"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ff0080,#ff4500,#ffd700,#00ff88,#00cfff,#a855f7,#ff0080)] animate-[spin_2.5s_linear_infinite] group-hover:animate-[spin_1.2s_linear_infinite] group-hover:brightness-125 transition-all" />

            <div className="relative z-10 flex items-center gap-[7px] bg-[#0a0a0f] group-hover:bg-[#12121a] transition-colors duration-200 rounded-[8px] px-[18px] py-2">
              <svg
                className="w-[15px] h-[15px] opacity-90 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M19 16L19.9 18.1L22 19L19.9 19.9L19 22L18.1 19.9L16 19L18.1 18.1L19 16Z"
                  fill="white"
                  opacity="0.6"
                />
              </svg>
              <span className="text-white text-sm font-semibold tracking-wide whitespace-nowrap">
                Ask Pilot
              </span>
            </div>
          </button>

          <button
            onClick={handleSignOut}
            className="text-white cursor-pointer text-sm font-semibold hover:opacity-70 transition-opacity duration-200 ml-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
