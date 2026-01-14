import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import { NETFLIX_BG } from "../utils/constants";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { checkValidation } from "../utils/checkValidation";
import { useValidate } from "../hooks/useValidate";

const Login = () => {
  const { t } = useTranslation();
  const [existingUser, setExistingUser] = useState(true);
  const [error, setError] = useState("");
  const fullName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleExistingUser = (event) => {
    event.preventDefault();
    setExistingUser(!existingUser);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const errorMessage = useValidate(
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    setError(errorMessage);
  };

  return (
    <Fragment>
      <Header />
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NETFLIX_BG})` }}
      >
        <form className="w-1/3 bg-black opacity-85 p-8 rounded-lg">
          <h1 className="text-white text-3xl my-4 font-bold">
            {existingUser ? t("sign-in") : t("sign-up")}
          </h1>
          {!existingUser && (
            <input
              type="text"
              ref={fullName}
              className="w-full p-4 my-4 rounded bg-gray-900 text-white border border-gray-400"
              placeholder={t("full-name")}
            />
          )}
          <input
            type="text"
            ref={email}
            className="w-full p-4 my-4 rounded bg-gray-900 text-white border border-gray-400"
            placeholder={t("email")}
          />
          <input
            type="password"
            ref={password}
            className="w-full p-4 my-4 rounded bg-gray-900 text-white border border-gray-400"
            placeholder={t("password")}
          />
          <p className="text-red-500 text-sm my-4">{error}</p>
          <button
            className="w-full p-2 my-4 text-white bg-red-600 hover:bg-red-700 duration-100 rounded-lg cursor-pointer font-semibold"
            onClick={handleSignIn}
          >
            {existingUser ? t("sign-in") : t("sign-up")}
          </button>
          <p className="text-white my-4 text-sm">
            {existingUser ? t("new-to-netflix") : t("already-a-user")}{" "}
            <button
              className="font-semibold cursor-pointer hover:underline"
              onClick={handleExistingUser}
              type="button"
            >
              {existingUser ? t("sign-up-now") : t("sign-in-now")}
            </button>
          </p>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
