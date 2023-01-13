/**
 * Transforms array to object with key value
 * @param {array} array
 * @param {*} key
 */
export const convertArrayToObject = (array = [], key = "id") =>
  array.reduce((acc, curr) => {
    if (key === "id" && !curr[key] && curr._id) {
      acc[curr._id] = curr;
    } else {
      acc[curr[key]] = curr;
    }

    return acc;
  }, {});

export const isObjectEmpty = (obj) => !obj || !Object.keys(obj).length;

/**
 * Update array of objects by id
 * @param {array} source
 * @param {array} values
 */
export const mergeArraysById = (source, values) => {
  return Object.values(convertArrayToObject([...source, ...values]));
};

export const isEqualArraysById = (newValueArr, initialArr) => {
  let foundSameObjectsCount = 0;

  for (let i = 0; i < newValueArr.length; i++) {
    const index = initialArr.findIndex(
      (initialArrValue) =>
        (initialArrValue.id || initialArrValue) === newValueArr[i].id
    );

    if (index !== -1) {
      foundSameObjectsCount += 1;
    }
  }

  return foundSameObjectsCount === newValueArr.length;
};

export const isValidJSON = (string) => {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
};

export const getFromLocalStorage = (key) => {
  const JSONString = window.localStorage.getItem(key);
  return isValidJSON(JSONString) ? JSON.parse(JSONString) : undefined;
};

export const extractNumberFromString = (string) => {
  if (!string) return 0;
  if (typeof string !== "string") {
    return string;
  }
  return +string.replace(/[^0-9]/g, "");
};

/**
 *
 * @param {*} obj
 * @param {*} path
 */
export const getDescendantProp = (obj, path) =>
  path.split(".").reduce((acc, part) => acc && acc[part], obj);
