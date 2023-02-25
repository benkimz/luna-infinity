import validator from "validator";

const validateUrl = (url) => {
  if (!validator.isURL(url)) {
    return false;
  }
  return true;
};

export default validateUrl;
