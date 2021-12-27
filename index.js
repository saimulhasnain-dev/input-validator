/**
 * This method checks an array is empty or not
 * @param {*} arr 
 * @returns boolean
 */
module.exports.isEmptyArray = (arr) => {
  return arr.length ? true : false;
}
/**
 * This method checks if a value is valid string or not
 * @param {*} str 
 * @returns boolean
 */
module.exports.isString = (str) => {
  return typeof str === 'string';
}
/**
 * This method checks if a value is valid number or not
 * @param {*} val 
 * @returns boolean
 */
module.exports.isNumeric = (val) => {
  const numeric_regex = /^[0-9]+$/;
  return numeric_regex.test(val);
}
/**
 * This method checks if a value is valid email address or not
 * @param {*} email 
 * @returns boolean
 */
module.exports.isValidEmail = (email) => {
  const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(email);
};
/**
 * This method checks if a value contains only alphabet or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isAlphabet = (text) => {
  const alphabet_regex = /^[a-zA-Z]+$/;
  return alphabet_regex.test(text);
}
/**
 * This method checks if a value contains alphanumeric values only or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isAlphaNumericOnly = (text) => {
  const text_regex = /^[a-zA-Z0-9]+$/;
  return text_regex.test(text);
}
/**
 * This method checks if a value contains alphanumeric values and special character as well 
 * @param {*} text 
 * @returns boolean
 */
module.exports.isSpecialCharAlphaNumeric = (text) => {
  const text_regex = /^[ A-Za-z0-9_!@#$%^&*()_+-=±§`~.,/|}{)(]*$/;
  return text_regex.test(text);
}
/**
 * This method checks if a value is undefined or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isUndefined = (text) => {
  return typeof text === undefined;
}
/**
 * This method checks if a value is null or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isNull = (text) => {
  return text === null;
}
/**
 * This method checks if a value is boolean or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isBoolean = (text) => {
  return typeof text === 'boolean';
}
/**
 * This method checks if a value is array or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isArray = (text) => {
  return Array.isArray(text)
}
/**
 * This method will return trim and sanitized form of given string
 * @param {*} text 
 * @returns string
 */
module.exports.sanitizeString = (text) => {
  text = text.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return text.trim();
}
/**
 * This method will return integer parsed value of given string
 * @param {*} numeric 
 * @returns number
 */
module.exports.toInt = (numeric) => {
  return parseInt(numeric);
}
/**
 * This method will return float parsed value of given string
 * @param {*} numeric 
 * @returns number
 */
module.exports.toFloat = (numeric) => {
  return parseFloat(numeric);
}
/**
 * This method will return date parsed value of given string if it is string otherwise null
 * @param {*} date 
 * @returns Date
 */
module.exports.toDate = (date) => {
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
/**
 * This method checks if a value is URL or not
 * @param {*} text 
 * @returns boolean
 */
module.exports.isURL = (text) => {
  const res = text.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return res !== null;
}
/**
 * This method checks if a value is valid number or not
 * @param {*} numeric 
 * @returns boolean
 */
module.exports.isValidNumber = (numeric) => {
  return !isNaN(numeric);
}
/**
 * This method checks if a value is valid latitude and longitude
 * @param {*} lat 
 * @param {*} lng 
 * @returns boolean
 */
module.exports.isValidLatLong = (lat, lng) => {
  const pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
  return pattern.test(lat) && pattern.test(lng);
}
/**
 * This method checks if a password is strong enough or not
 * @param {*} password 
 * @returns boolean
 */
module.exports.isStrongPassword = (password) => {
  const pattern = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})');
  return pattern.test(password);
}
/**
 * This method checks if a password is having at least medium complexity or not
 * @param {*} password 
 * @returns boolean
 */
module.exports.isMediumPassword = (password) => {
  const pattern = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
  return pattern.test(password);
}
/**
 * This method checks if a value is date or not
 * @param {*} date 
 * @returns boolean
 */
module.exports.isDate = (date) => {
  return !isNaN(Date.parse(date));
}
/**
 * This method checks if a value is an object or not
 * @param {*} val 
 * @returns boolean
 */
module.exports.isObject = (val) => {
  return val.constructor.toString().indexOf("Object") > -1;
}
/**
 * This method checks if a key is exists in the given object or not 
 * @param {*} obj 
 * @param {*} key 
 * @returns boolean
 */
module.exports.isKeyExists = (obj, key) => {
  return obj[key] !== undefined;
}
/**
 * This method checks if a key is exists in the given nested object at desired level
 * @param {*} obj 
 * @returns boolean
 */
module.exports.isKeyExistsNested = function checkNested(obj) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}
/**
 * This method will return value of a key from the nested object
 * @param {*} nestedObj 
 * @param {*} pathArr 
 * @returns string
 */
module.exports.getValueFromObject = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}