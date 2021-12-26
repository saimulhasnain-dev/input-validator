module.exports.isValidEmail = (email) => {
  const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(email);
};

module.exports.isAlphabet = (text) => {
  const alphabet_regex = /^[a-zA-Z]+$/;
  return alphabet_regex.test(text);
}

module.exports.isNumeric = (numeric) => {
  const numeric_regex = /^[0-9]+$/;
  return numeric_regex.test(numeric);
}

module.exports.isAlphaNumericOnly = (text) => {
  const text_regex = /^[a-zA-Z0-9]+$/;
  return text_regex.test(text);
}

module.exports.isSpecialCharAlphaNumeric = (text) => {
  const text_regex = /^[ A-Za-z0-9_!@#$%^&*()_+-=±§`~.,/|}{)(]*$/;
  return text_regex.test(text);
}

module.exports.isString = (text) => {
  return typeof text === 'string';
}

module.exports.isUndefined = (text) => {
  return typeof text === undefined;
}

module.exports.isNull = (text) => {
  return text === null;
}

module.exports.isBoolean = (text) => {
  return typeof text === 'boolean';
}
module.exports.isArray = (text) => {
  return Array.isArray(text)
}

module.exports.trim = (text) => {
  return text.trim();
}

module.exports.toInt = (numeric) => {
  return parseInt(numeric);
}
module.exports.toFloat = (numeric) => {
  return parseFloat(numeric);
}

module.exports.toDate = (date) => {
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

module.exports.isURL = (text) => {
  const res = text.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return res !== null;
}