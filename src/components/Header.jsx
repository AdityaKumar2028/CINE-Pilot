import logo from "../assets/logo.jpg";
import happy from "../assets/happy.png";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser, addUser } from "../assets/userSlice";
import { onAuthStateChanged } from "firebase/auth";

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

  return (
    // Much smoother, shorter fade to transparent
    <div className="absolute top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
      {/* THE MAGIC FIX: 'mix-blend-screen' removes the black background from your JPEG. 
        Note: For the best long-term result, replace logo.jpg with a transparent logo.png!
      */}
      <img
        className="w-44 object-contain mix-blend-screen"
        src={logo}
        alt="logo"
      />

      {store && (
        <div className="flex items-center gap-4">
          <img
            className="w-9 h-9 rounded object-cover"
            src={happy}
            alt="user-avatar"
          />
          <span className="text-white font-medium text-sm hidden sm:block">
            {store?.displayName}
          </span>
          <button
            onClick={handleSignOut}
            className="text-white text-sm font-semibold hover:opacity-70 transition-opacity duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
