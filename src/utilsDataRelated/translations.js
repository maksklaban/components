/**
 *@param {*} defaultLanguage
 * @param {*} languages
 * @param {*} textObject
 * @param {*} currLng
 */

import { isObjectEmpty } from "../utils";

export const getAvailableTranslation = (
  textObject,
  defaultLanguage = "",
  currLng = ""
) => {
  if (isObjectEmpty(textObject)) {
    return "";
  }

  let value = textObject[currLng] || textObject[defaultLanguage];

  if (!value) {
    value = Object.values(textObject)[0];
  }

  return value;
};
