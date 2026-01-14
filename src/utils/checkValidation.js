import { useTranslation } from "react-i18next";

export const checkValidation = (email, password) => {
    const { t } = useTranslation();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+.])(?!.*\s).{8,}$/.test(password);

    if (!isEmailValid) return t("invalid-email");
    if (!isPasswordValid) return t("invalid-password");

    return null; // No errors
};