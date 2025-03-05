const isValidPassword = (password) => {
  const minLength = /.{8,}/;
  const hasUppercase = /[A-Z]/;
  const hasDigit = /\d/;
  const hasSpecialChar = /[!@#$%^&*]/;

  return (
    minLength.test(password) &&
    hasUppercase.test(password) &&
    hasDigit.test(password) &&
    hasSpecialChar.test(password)
  );
};

export default isValidPassword;
