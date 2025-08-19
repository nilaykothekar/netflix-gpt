export const Validate = (email, password, name, mobile) => {
  // regex for email and password
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=\[\]{};':"|,.<>/?])(?=.*[^\s]).{8,20}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+){1,2}$/.test(name);
  const isMobileValid =
    /^\+?([0-9]{1,3})?[-.\s]?\(?[0-9]{1,4}\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/.test(
      mobile
    );

  // error scenarios
  if (!isEmailValid) return 'Email is not valid!';
  if (!isPasswordValid) return 'Password is not valid!';
  if (!isNameValid) return 'Name is not valid!';
  if (!isMobileValid) return 'Mobile is not valid!';

  // success scenario
  if (isEmailValid && isPasswordValid && isNameValid && isMobileValid)
    return null;
};
