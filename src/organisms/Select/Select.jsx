import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactSelect, { components } from "react-select";
import { PropTypes as T } from "prop-types";
import clsx from "clsx";
import { pick } from "dot-object";
import CreatableSelect from "react-select/creatable";
import { slugify } from "transliteration";
import AsyncSelect from "react-select/async";

import {
  StyledFlexRow,
  StyledLabel,
  StyledOptionRow,
  StyledSelect,
  StyledWrapper,
  StyledErrorLabel,
} from "./styled";
import Icon from "../../atoms/Icon";
import Tag from "../../atoms/Tag";
import { getDescendantProp } from "../../utils";

const Select = ({
  autosize,
  className,
  createLabelText,
  createOptionPosition,
  customGetOptionLabel,
  error,
  fullWidth,
  getOptionBeforeTextComponent,
  iconName,
  inputValue,
  isClearable,
  isCreatable,
  isDisabled,
  isMulti,
  label,
  labelType,
  labelKey,
  labelWidth,
  loadOptions,
  MultiValue: MultiValueCustom,
  noOptionsMessage,
  onChange,
  onCreateOption,
  onInputChange,
  onOptionClick,
  optionIconColor,
  optionIconKey,
  options,
  placeholder,
  primaryFocusColor,
  readOnly,
  value,
  valueKey,
  variant,
  width,
  withBorder,
  ...otherProps
}) => {
  const isFocusedRef = useRef(false);
  const [customStyles, setCustomStyles] = useState({});

  useEffect(() => {
    const styles = () =>
      autosize && {
        container: (base, state) => {
          isFocusedRef.current = state.isFocused;
          return {
            ...base,
            display: "inline-block",
          };
        },
        placeholder: (base, state) => {
          return {
            ...base,
            ...(isFocusedRef.current && state.value
              ? {}
              : {
                  position: "static",
                  top: "auto",
                  transform: "none",
                }),
          };
        },
        input: (base, state) => {
          return {
            ...base,
            ...(isFocusedRef.current && state.value
              ? {}
              : {
                  position: "absolute",
                  top: "2px",
                  // transform: 'translateY(-40%)',
                }),
          };
        },
        singleValue: (base, state) => {
          return {
            ...base,
            maxWidth: "none",
            ...(isFocusedRef.current && state.value
              ? {}
              : {
                  position: "static",
                  top: "auto",
                  transform: "none",
                }),
          };
        },
      };
    setCustomStyles(styles());
  }, []);

  const handleChange = (option) => {
    if (onChange) onChange(option);
  };

  const handleCreate = (inputValue) => {
    // TODO: When we'll have another case of creatable options add necessary values to config (=> this object)
    const newOption = slugify(inputValue); //, __isNew__: true
    if (onCreateOption)
      onCreateOption({ [valueKey]: newOption, [labelKey]: newOption });
  };

  const DropdownIndicator = () => (
    <Icon
      name={iconName || "chevronDownFilled"}
      className={iconName || "chevronDownFilled"}
    />
  );

  const Option = useCallback(
    (props) => {
      const optionValue =
        valueKey && props.data ? pick(valueKey, props.data) : props.value;
      const optionIcon =
        props.data.iconName || (optionIconKey && props.data[optionIconKey]);

      return (
        <StyledOptionRow
          onClick={onOptionClick && onOptionClick(props)}
          className={optionIcon ? "withLeftIcon" : ""}
        >
          {optionIcon && (
            <Icon
              name={optionIcon}
              height={20}
              width={20}
              fill={optionIconColor}
            />
          )}
          {getOptionBeforeTextComponent && getOptionBeforeTextComponent(props)}
          <components.Option {...props} />
          {value && valueKey && optionValue === pick(valueKey, value) && (
            <Icon className="rightIcon" name="check" />
          )}
        </StyledOptionRow>
      );
    },
    [
      valueKey,
      optionIconKey,
      onOptionClick,
      optionIconColor,
      getOptionBeforeTextComponent,
      value,
    ]
  );

  const MultiValue = (props) => {
    return (
      <components.MultiValueContainer {...props}>
        <Tag colorKey="gray2" removeProps={props.removeProps} withCrossIcon>
          <components.MultiValueLabel {...props} />
        </Tag>
      </components.MultiValueContainer>
    );
  };

  const getOptionLabel = (option) => {
    const hasSpareLabelKeyToCheck = typeof labelKey !== "string";
    const firstLabelValue = getDescendantProp(
      option,
      hasSpareLabelKeyToCheck ? labelKey[0] : labelKey
    );

    return hasSpareLabelKeyToCheck
      ? firstLabelValue || getDescendantProp(option, labelKey[1])
      : firstLabelValue;
  };

  const getSelect = useCallback(
    () => (
      <StyledWrapper
        className={clsx(
          !label && className,
          "selectWrapper",
          isDisabled && "disabled"
        )}
        fullWidth={fullWidth}
      >
        <StyledSelect
          as={
            isCreatable
              ? CreatableSelect
              : loadOptions
              ? AsyncSelect
              : ReactSelect
          }
          inputValue={inputValue}
          onInputChange={onInputChange}
          primaryFocusColor={primaryFocusColor}
          loadOptions={loadOptions}
          // autoFocus
          variant={variant}
          // defaultInputValue
          // isSearchable
          // defaultValue=
          styles={customStyles}
          className={clsx(
            "select",
            labelType === "top" && "labelTop",
            !!error && "hasError",
            autosize && "autosize"
          )}
          createOptionPosition={createOptionPosition}
          formatCreateLabel={(inputValue) => {
            return `${createLabelText} ${slugify(inputValue)}`;
          }}
          getNewOptionData={(inputValue, optionLabel) => {
            // TODO: When we'll have another case of creatable options add necessary values to config (=> this object)
            return { [valueKey]: inputValue, [labelKey]: optionLabel };
          }}
          noOptionsMessage={() => (isCreatable ? null : noOptionsMessage)}
          onCreateOption={handleCreate}
          filterOption={
            isCreatable
              ? (candidate, input) => {
                  return candidate.data[labelKey].includes(slugify(input));
                }
              : undefined
          }
          value={value}
          onChange={handleChange}
          options={options}
          classNamePrefix="react-select"
          closeMenuOnSelect={!isMulti}
          isClearable={isClearable}
          isMulti={isMulti}
          isDisabled={isDisabled || readOnly}
          components={{
            DropdownIndicator,
            Option,
            MultiValue: MultiValueCustom || MultiValue,
          }}
          placeholder={placeholder || ""}
          withBorder={withBorder}
          getOptionLabel={
            customGetOptionLabel
              ? (option) =>
                  customGetOptionLabel(option, otherProps.t, otherProps.lng)
              : labelKey && getOptionLabel
          }
          getOptionValue={valueKey && ((option) => option[valueKey])}
          {...otherProps}
        />

        {!!error && <StyledErrorLabel>{error}</StyledErrorLabel>}
      </StyledWrapper>
    ),
    [value, options, placeholder, error, inputValue]
  );

  return label ? (
    <StyledFlexRow
      className={clsx(className, labelType === "top" && "labelTop", "wrapper")}
    >
      <StyledLabel
        variant={variant}
        text={label}
        labelWidth={labelWidth}
        className="label"
      />
      {getSelect()}
    </StyledFlexRow>
  ) : (
    getSelect()
  );
};

export default Select;

Select.propTypes = {
  createLabelText: T.string,
  createOptionPosition: T.oneOf(["first", "last"]),
  isDisabled: T.bool,
  fullWidth: T.bool,
  iconName: T.string,
  label: T.string,
  labelKey: T.oneOfType([T.string, T.array]),
  labelType: T.oneOf(["top", "left"]),
  labelWidth: T.string,
  name: T.string,
  onChange: T.func,
  placeholder: T.string,
  primaryFocusColor: T.bool,
  valueKey: T.string,
  variant: T.oneOf(["primary", "secondary", "transparent"]),
  withBorder: T.bool,
};

Select.defaultProps = {
  createLabelText: "Create",
  createOptionPosition: "first",
  iconName: "chevronDownFilled",
  labelKey: "label",
  labelType: "left",
  labelWidth: "150px",
  onChange: () => {},
  // value: { id: '', label: '' },
  valueKey: "id",
  variant: "primary",
};
