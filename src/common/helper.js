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

export const calculateTotalRepayment = (amount, period, rate) =>{
  return amount * ((1 + (rate / 100 / 12)) ** period);
};

export const convertDate = str => {
  str = str.toString();
  let parts = str.split(" ");
  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  };
  return parts[3] + "-" + months[parts[1]] + "-" + parts[2];
};
