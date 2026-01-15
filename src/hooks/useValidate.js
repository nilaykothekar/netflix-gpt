export const useValidate = (name, email, password) => {
    // validate name ONLY if it exists (signup)
    if (name !== null && name !== undefined) {
        const isNameValid = /^[a-zA-Z\s]+$/.test(name);
        if (!isNameValid) return "Invalid name format.";
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) return "Invalid email format.";

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+.])(?!.*\s).{8,}$/.test(
            password
        );

    if (!isPasswordValid)
        return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";

    return null; // ✅ all good
};
