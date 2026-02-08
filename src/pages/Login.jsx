import Header from "../components/Header";
import { NETFLIX_BG } from "../utils/constants";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useValidate } from "../hooks/useValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [existingUser, setExistingUser] = useState(true);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleExistingUser = () => {
    setExistingUser((prev) => !prev);
    setError("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("🔥 submit clicked");
    setSuccessMsg("");
    setError("");

    const errorMessage = useValidate(
      existingUser ? null : fullName.current?.value,
      email.current.value,
      password.current.value
    );

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    if (!existingUser) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("✅ User signed up:", user);
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { email, displayName } = auth.currentUser;
              dispatch(addUser({ email, displayName }));
              setSuccessMsg("Account created successfully! Please sign in.");
              setExistingUser(true);
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
    } else {
      console.log("🔐 Sign in flow");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NETFLIX_BG})` }}
      >
        <form
          onSubmit={handleSignIn}
          className="w-1/3 bg-black opacity-85 p-8 rounded-lg"
        >
          {successMsg && (
            <p className="text-green-500 text-sm my-4 font-semibold">
              {successMsg}
            </p>
          )}
          <h1 className="text-white text-3xl my-4 font-bold">
            {existingUser ? t("sign-in") : t("sign-up")}
          </h1>

          {!existingUser && (
            <input
              ref={fullName}
              type="text"
              placeholder={t("full-name")}
              className="w-full p-4 my-4 rounded bg-gray-900 text-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder={t("email")}
            className="w-full p-4 my-4 rounded bg-gray-900 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder={t("password")}
            className="w-full p-4 my-4 rounded bg-gray-900 text-white"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 p-3 mt-4 test-white font-semibold rounded-md cursor-pointer text-white"
          >
            {existingUser ? t("sign-in") : t("sign-up")}
          </button>

          <button
            type="button"
            onClick={handleExistingUser}
            className="text-white mt-4 underline"
          >
            {existingUser ? t("sign-up-now") : t("sign-in-now")}
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
