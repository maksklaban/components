import React from "react";
import { PropTypes as T } from "prop-types";
import { IKImage, IKContext } from "imagekitio-react";
import clsx from "clsx";

import { calculateImageHeight } from "../../utils/imageProcessing";
import {
  StyledActions,
  StyledImage,
  StyledImageAsBackground,
  StyledImageWithActionsWrapper,
} from "./styled";
import {
  ALIGN_JUSTIFY_CONTENT_TYPES,
  ALIGN_JUSTIFY_ITEMS_TYPES,
} from "../../types";
import { getProcessedUrl } from "../../utilsDataRelated/images";
import { IMAGEKIT_URL } from "../../constantsDataRelated/images";

const Image = ({
  actionIcons,
  actionIconsType,
  alignItems,
  alt,
  asBackground,
  backgroundSize,
  className,
  disableImagekit,
  height,
  imagekitParams,
  justifyContent,
  loading,
  maxHeight,
  maxWidth,
  radius,
  src,
  type,
  width,
  ...otherProps
}) => {
  return asBackground ? (
    actionIcons ? (
      <StyledImageWithActionsWrapper radius={radius} {...otherProps}>
        <StyledImageAsBackground
          src={src}
          height={height}
          width={width}
          className={clsx(className, "image")}
          backgroundSize={backgroundSize}
          imagekitParams={imagekitParams}
          disableImagekit={disableImagekit}
          maxHeight={maxHeight}
          maxWidth={maxWidth}
          {...otherProps}
        >
          <StyledActions
            className={clsx(actionIconsType, "imageActions")}
            radius={radius}
          >
            {actionIcons}
          </StyledActions>
        </StyledImageAsBackground>
      </StyledImageWithActionsWrapper>
    ) : (
      <StyledImageAsBackground
        src={src}
        height={height}
        width={width}
        radius={radius}
        className={clsx(className, "image")}
        backgroundSize={backgroundSize}
        imagekitParams={imagekitParams}
        disableImagekit={disableImagekit}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        {...otherProps}
      />
    )
  ) : (
    <StyledImage
      height={calculateImageHeight(width, height, type)}
      width={width}
      radius={radius}
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      {...otherProps}
    >
      {disableImagekit ? (
        <img src={src} alt={alt} />
      ) : (
        <IKContext urlEndpoint={IMAGEKIT_URL}>
          <IKImage
            loading={loading}
            src={getProcessedUrl(src, imagekitParams)}
          />
        </IKContext>
      )}
    </StyledImage>
  );
};

Image.propTypes = {
  actionIconsType: T.oneOf(["permanent", "onHover"]),
  alignItems: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  alt: T.string.isRequired,
  asBackground: T.bool,
  backgroundSize: T.string,
  disableImagekit: T.bool,
  height: T.oneOfType([T.number, T.string]),
  justifyContent: T.oneOf(ALIGN_JUSTIFY_CONTENT_TYPES),
  loading: T.oneOf(["lazy"]),
  margin: T.string,
  radius: T.oneOfType([T.number, T.string]),
  src: T.string.isRequired,
  type: T.oneOf(["square", "horizontal", "vertical", "custom"]),
  width: T.oneOfType([T.number, T.string]),
};

Image.defaultProps = {
  actionIconsType: "permanent",
  alignItems: "center",
  alt: "",
  backgroundSize: "contain",
  justifyContent: "center",
  radius: "",
  src: "",
};

export default Image;
