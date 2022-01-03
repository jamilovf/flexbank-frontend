import SecureLS from "secure-ls";

const secureLs = new SecureLS();
export default secureLs;

export const hasLowerCase = (str) => {
  return str.match(/[a-z]/);
};

export const hasUpperCase = (str) => {
  return str.match(/[A-Z]/);
};

export const hasDigit = (str) => {
  return str.match(/[0-9]/);
};

export const hasSymbol = (str) => {
  return str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/);
};

export const splitString = (str, n) => {
  return str.match(new RegExp(".{1," + n + "}", "g"));
};

export const formattedBalance = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
