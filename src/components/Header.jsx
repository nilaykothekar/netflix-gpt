import { Fragment } from "react/jsx-runtime";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { useTranslation } from "react-i18next";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/slices/userSlice";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.user?.displayName);

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // persist language
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <Fragment>
      <nav className="flex items-center justify-between p-4 bg-linear-to-b from-black to-gray-800 shadow-2xl w-screen">
        <img
          src={NETFLIX_LOGO}
          width={120}
          className="mx-4"
          alt="Netflix Logo"
        />
        <div className="flex justify-center items-center">
          <ul className="flex items-center">
            <li className="text-white text-sm mx-4">
              <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className="cursor-pointer"
              >
                <option value="en">{t("english")}</option>
                <option value="hi">{t("hindi")}</option>
              </select>
            </li>
            <li className="text-white text-sm mx-4">{t("about")}</li>
            <li className="text-white text-sm mx-4">{t("contact")}</li>
          </ul>
          <button className="mx-4 flex items-center" onClick={handleSignOut}>
            <img src={USER_ICON} alt="user-icon" width={36} />
            <span className="text-white ml-2 text-sm">{userName}</span>
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
