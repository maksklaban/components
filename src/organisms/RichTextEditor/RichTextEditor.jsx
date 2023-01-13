import React, { useCallback, useEffect, useState } from "react";

import { StyledEditor } from "./styled";
import { usePrevious } from "../../hooks/useReactRedux";

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    // 'LINK_BUTTONS',
    // 'BLOCK_TYPE_DROPDOWN',
    // 'HISTORY_BUTTONS',
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  // BLOCK_TYPE_DROPDOWN: [
  //   { label: 'Normal', style: 'unstyled' },
  //   { label: 'Heading Large', style: 'header-one' },
  //   { label: 'Heading Medium', style: 'header-two' },
  //   { label: 'Heading Small', style: 'header-three' },
  //   { label: 'Heading Tiny', style: 'header-four' },
  // ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
};

const RichTextEditor = (props) => {
  const { onChange } = props;
  const prevInitialValue = usePrevious(props.initialValue);
  const prevName = usePrevious(props.name);

  const [RTE, setRTE] = useState(() => {
    if (typeof window !== "undefined") {
      const { default: RTE } = require("react-rte");
      return RTE;
    }
  });

  const [value, setValue] = useState(undefined);

  const createFromString = useCallback(
    (string) => {
      if (RTE) {
        setValue(RTE.createValueFromString(string, "html"));
      }
    },
    [RTE]
  );

  useEffect(() => {
    if (RTE && value === undefined) {
      if (props.value) {
        createFromString(props.value);
      } else {
        setValue(RTE.createEmptyValue());
      }
    }
  }, [RTE, createFromString, props.value, value]);

  useEffect(() => {
    if (props.name !== prevName) {
      createFromString(props.value);
    }
  }, [createFromString, prevName, props.name, props.value]);

  useEffect(() => {
    if (prevInitialValue !== props.initialValue) {
      createFromString(props.initialValue);
    }
  }, [createFromString, prevInitialValue, props.initialValue]);

  if (typeof value === "undefined") return null;

  const onChangeValue = (val) => {
    setValue(val);

    if (onChange) {
      setTimeout(() => {
        onChange(val.toString("html"));
      });
    }
  };

  return (
    <StyledEditor
      as={RTE}
      toolbarConfig={toolbarConfig}
      value={value}
      onChange={onChangeValue}
      readOnly={props.readOnly || props.disabled}
    />
  );
};

export default RichTextEditor;
