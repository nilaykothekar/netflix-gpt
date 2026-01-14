import { Fragment } from "react/jsx-runtime";
import { NETFLIX_LOGO } from "../utils/constants";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // persist language
  };

  return (
    <Fragment>
      <nav className="flex items-center justify-between p-4 bg-linear-to-b from-black to-gray-800 shadow-2xl">
        <img
          src={NETFLIX_LOGO}
          width={120}
          className="mx-4"
          alt="Netflix Logo"
        />
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
      </nav>
    </Fragment>
  );
};

export default Header;
