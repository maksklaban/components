import React, { useContext } from "react";
import { PropTypes as T } from "prop-types";
import { withTheme } from "styled-components";

import { LANGUAGES_FULL_NAME, ScreenContext } from "../..";
import Image from "../../atoms/Image";
import { StyledLanguagesMenu } from "./styled";

const LanguagesMenu = (props) => {
  const {
    inverted,
    className,
    currentLng,
    menuAlign,
    languages,
    theme: { breakpoints },
    onChange,
    withFlags,
    ...otherProps
  } = props;
  const screenWidth = useContext(ScreenContext);
  const { width } = screenWidth || {};
  const isMobile = width && width < breakpoints.lg;

  const getLngIcon = (lang) => {
    return (
      <Image
        src={`/languages/${lang}.png`}
        height={20}
        width={20}
        className="flag"
      />
    );
  };

  const getLanguagesList = () => {
    return languages.map((lang) => ({
      id: lang,
      name: (
        <div className="row languageListItem">
          {withFlags && getLngIcon(lang)}
          {LANGUAGES_FULL_NAME[lang]}
        </div>
      ),
      onChange: onChange(lang),
    }));
  };

  return (
    <StyledLanguagesMenu
      className={className}
      inverted={inverted}
      iconPosition={!withFlags && "right"}
      iconName={!withFlags && "chevronDownFilled"}
      menuAlign={menuAlign || (isMobile ? "center" : "right")}
      value={{
        id: currentLng,
        name: (
          <div className="languageValue">
            {withFlags && getLngIcon(currentLng)}
            {withFlags
              ? LANGUAGES_FULL_NAME[currentLng]
              : LANGUAGES_FULL_NAME[currentLng]?.slice(0, 3)}
          </div>
        ),
        onChange: onChange(currentLng),
      }}
      items={getLanguagesList()}
      {...otherProps}
    />
  );
};

export default withTheme(LanguagesMenu);

LanguagesMenu.propsTypes = {
  className: T.string,
  inverted: T.bool,
  withFlags: T.bool,
};

LanguagesMenu.defaultProps = {
  inverted: false,
  withFlags: false,
};
