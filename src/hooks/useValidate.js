export const useValidate = (name, email, password) => {
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+.])(?!.*\s).{8,}$/.test(password);

    if (!isNameValid) return "Invalid name format.";
    if (!isEmailValid) return "Invalid email format.";
    if (!isPasswordValid) return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";

    return null; // No errors
};