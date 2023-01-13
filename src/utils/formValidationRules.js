import pL from 'js-regex-pl' // any letter from any language
import dot from 'dot-object'

export const validators = {
  requiredPrice: (value) => {
    if (+value === 0 || !value || (Array.isArray(value) && !value.length)) {
      return false
    }

    if (typeof value.trim === 'function') {
      return value.trim()
    }

    return value
  },
  required: (value) => {
    if (value === 0) {
      return true
    }

    if (!value || (Array.isArray(value) && !value.length)) {
      return false
    }

    if (typeof value.trim === 'function') {
      return value.trim()
    }

    return value
  },
  requiredIfFieldsEmpty: (value, ruleParams, data) => {
    return (
      // value ||
      ruleParams.fields.some((field) => data?.values && dot.pick(field, data.values))
    )
  },
  requiredCity: (value) => {
    if (!value || (Array.isArray(value) && !value.length)) {
      return false
    }

    return value
  },
  requiredStringWithPresetPart: (value, ruleParams) => {
    if (
      !value ||
      value === ruleParams.presetPart ||
      value === ruleParams.presetPart.slice(0, ruleParams.presetPart.length - 1)
    ) {
      return false
    }

    return value
  },
  // date: value => !value || moment(value, 'DD.MM.YYYY', true).isValid() || moment(value, 'DD/MM/YYYY', true).isValid(),
  // dateISO: value => !value || moment(value, 'YYYY-MM-DD', true).isValid(),
  minLength: (value, ruleParams) => !value || value.length >= ruleParams.value,
  maxLength: (value, ruleParams) => !value || value.length <= ruleParams.value,
  partNumberMinLength: (value, ruleParams) =>
    !value || value.replace(/[-\.,/\s]/g, '').length >= ruleParams.value,
  partNumberMaxLength: (value, ruleParams) =>
    !value || value.replace(/[-\.,/\s]/g, '').length <= ruleParams.value,
  maxNumber: (value, ruleParams) => !value || value <= ruleParams.value,
  minNumber: (value, ruleParams) => !value || value >= ruleParams.value,
  vinCode: (value) => !value || new RegExp(/^[a-zA-Z0-9]{17}$/, 'i').test(value),
  // equalTo: (value, ruleParams, data) => !value || data[ruleParams.field] === value,
  regex: (value, ruleParams) => !value || new RegExp(ruleParams.value, 'i').test(value),
  // ^[a-zA-Z\u0400-\u04FF\s'\-.]+$ - old name regex
  name: (value) => new RegExp(`^[ ${pL}'\`,\.-]*[${pL}'\`]$`).test(value),
  customIdSymbols: (value) => new RegExp(/^[a-zA-Z0-9'_-]+$/).test(value),
  specialCharacters: (value) => new RegExp('^[a-zA-Z0-9]*$').test(value),
  onlyDigits: (value) => !value || new RegExp('^(0|[1-9][0-9]{0,30})$').test(value),
  positiveFloat: (value) => !value || new RegExp(/^(?:[1-9]\d*|0)(?:(\.|,)\d+)?$/).test(value),
  jobTime: (value) => (value === '00:00' ? false : !value || new RegExp('^[0-9]+:[0-5][0-9]$').test(value)),
  price: (value) => new RegExp('^[0-9]+,[0-9][0-9]$').test(value),
  email: (value) => {
    const re =
      /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i // eslint-disable-line max-len
    return !value || re.test(value)
  },
  notInBaseType: (value) =>
    !value.size || (Array.isArray(value) ? value.findIndex((obj) => obj.notValid) === -1 : !value.notValid),
  keyInListAbsent: (value, ruleParams, data) => {
    if (!value) {
      return true
    }
    const { listKey, searchKey, filterListBy, transformValue } = ruleParams.dataForValidation

    const valueToCheck = transformValue ? transformValue(value) : value
    const initialValue = transformValue ? transformValue(data.initialValue) : data.initialValue
    const listInitial = data.list || (data[listKey] && Object.values(data[listKey]))

    if (!listInitial) {
      return true
    }
    const list = filterListBy
      ? listInitial.filter((item) => dot.pick(filterListBy, item) === dot.pick(filterListBy, data.values))
      : listInitial
    if (
      list.findIndex(
        (item) => dot.pick(searchKey, item) === valueToCheck && initialValue !== valueToCheck
      ) !== -1
    ) {
      return false
    }
    return value
  },
  website: (value) =>
    !value ||
    new RegExp(
      /^(https?:\/\/)?([^*|\":<>[\]{}`\\()';@&#№$~!,%\^\.\=\?\/+\-])([^!*|\"\s:<>[\]{}`\\()';@&#№$,%\^]+)?\.([^!*|\"\s:<>[\]{}`\\()';@&#№$,%\^]+)?[^*|\":<>[\]{}`\\()';@&#№$~!,%\^\.\=\?\-+]$/ // eslint-disable-line max-len
    ).test(value),
  notOwnCodeRequired: (value, ruleParams) => !value || value.trim() !== ruleParams.value,
  // defaultTranslationRequired: (value, ruleParams) => {
  //   const { chosenLng, defaultLng } = ruleParams
  //   if (!value[chosenLng] && chosenLng === defaultLng) {
  //     return false
  //   }
  //   return true
  // },
}

const checkField = (value, rules, onError, data) => {
  for (let ruleIndex = 0; ruleIndex < rules?.length; ruleIndex += 1) {
    const ruleItem = rules[ruleIndex]
    const ruleName = ruleItem.type || ruleItem
    const ruleParams = ruleItem.type ? ruleItem : {}
    const customRuleName = ruleItem.customRuleName

    if (!validators[ruleName]) {
      throw new Error(`FormValidationRules: Invalid validator: ${ruleName}`)
    }
    if (!validators[ruleName](value, ruleParams, data)) {
      onError(customRuleName || ruleName)
      break
    } else if (data?.ruleWithSuccess && data?.ruleWithSuccess?.type === ruleName) {
      onError('success')
      break
    }
  }
}

// per field validation
export const rule = (fieldName, rules) => (value, data) => {
  const error = {}
  checkField(
    value,
    rules[fieldName],
    (ruleName) => {
      error[fieldName] = ruleName
    },
    data
  )

  return error
}

const validate = (allRules) => (values, data) => {
  const errors = {}
  Object.keys(allRules).forEach((field) => {
    if (!allRules[field]) {
      return
    }

    const rules = allRules[field].filter((rule) => !rule.withSuccess)
    checkField(
      dot.pick(field, values),
      rules,
      (ruleName) => {
        errors[field] = ruleName
      },
      data
    )
  })

  return errors
}

export default validate
