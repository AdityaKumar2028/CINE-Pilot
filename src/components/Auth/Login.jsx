import { backgroundURL, logoUrl } from "../../assets/Constants";
import { useRef, useState } from "react";
import { checkValidationData } from "../../assets/validation";
import { auth } from "../../assets/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../../assets/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  let [isSignInForm, setisSignInForm] = useState(true);
  let [showPassword, setShowPassword] = useState("password");
  let [message, setMessage] = useState();
  let EmailRef = useRef(null);
  let passwordRef = useRef(null);
  let nameRef = useRef(null);
  let retypePasswordRef = useRef(null);

  function changeLogin() {
    setisSignInForm(!isSignInForm);
    setShowPassword("password");
  }

  function handlePasswordClick() {
    setShowPassword(showPassword === "password" ? "text" : "password");
  }
  function handleSubmitButton() {
    let result = checkValidationData(
      EmailRef.current.value,
      passwordRef.current.value,
      nameRef?.current?.value,
      retypePasswordRef?.current?.value,
      isSignInForm,
    );
    setMessage(result);

    if (result) return;
    else if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        EmailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + " : " + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        EmailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + " : " + errorCode);
        });
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-y-auto bg-black">
      <img
        src={backgroundURL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10 grayscale brightness-[0.3]"
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="relative z-20 flex min-h-screen items-center justify-center px-3 py-20 sm:px-6 sm:py-28">
          <div className="w-full max-w-md rounded-lg border border-neutral-800 border-t-4 border-t-red-600 bg-black/70 p-4 shadow-2xl backdrop-blur-md sm:p-8">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-wide text-white sm:mb-8 sm:text-3xl">
              {isSignInForm ? "Welcome Back!" : "Welcome!"}
            </h2>

            <div className="flex flex-col gap-4 sm:gap-5 sm:p-2">
              {!isSignInForm && (
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-base text-white transition-colors placeholder-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              )}
              <input
                ref={EmailRef}
                type="text"
                placeholder="Email Address"
                defaultValue="user1234@gmail.com"
                className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-base text-white transition-colors placeholder-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <div className="input-password flex w-full items-center rounded-md border border-neutral-700 bg-neutral-800 px-4 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600">
                <input
                  ref={passwordRef}
                  type={showPassword}
                  placeholder="Password"
                  defaultValue="User@1234"
                  className="w-full py-3 bg-transparent text-white placeholder-neutral-400 focus:outline-none"
                />
                <span
                  className="ml-2 min-h-11 min-w-11 cursor-pointer select-none rounded text-center leading-11"
                  onClick={handlePasswordClick}
                >
                  {showPassword === "password" ? "👀" : "🙈"}
                </span>
              </div>

              {!isSignInForm && (
                <div className="input-password flex w-full items-center rounded-md border border-neutral-700 bg-neutral-800 px-4 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600">
                  <input
                    ref={retypePasswordRef}
                    type="password"
                    placeholder="Retype Password"
                    className="w-full py-3 bg-transparent text-white placeholder-neutral-400 focus:outline-none"
                  />
                  <span className="ml-2 cursor-pointer select-none "></span>
                </div>
              )}
              {message && <p className="mt-1 text-sm font-bold text-red-500">{message}</p>}
              <button
                onClick={handleSubmitButton}
                className="mt-2 min-h-12 w-full cursor-pointer rounded-md bg-red-600 p-3 text-lg font-bold tracking-wider text-white shadow-lg transition-all duration-200 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p
                className="cursor-pointer rounded-md py-2 text-sm font-light text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
                onClick={changeLogin}
              >
                {isSignInForm ? "New to CINEPilot?" : "Already A User?"}{" "}
                <span className="font-bold">
                  {isSignInForm ? "Sign Up" : "Sign In"}
                </span>{" "}
                Now!
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
