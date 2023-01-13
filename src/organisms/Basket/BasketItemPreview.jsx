import React from "react";
import { withTheme } from "styled-components";

import {
  getAvailableTranslation,
  IMAGEKIT_PARAMS_CONFIG,
} from "@goodzyk/components";

import { StyledFlexRow, StyledItemImage } from "./styled";
import Typography from "../../atoms/Typography";
import ItemCharacteristicsChosen from "../ItemCharacteristics/ItemCharacteristicsChosen";

const BasketItemPreview = ({
  currentLng,
  defaultLng,
  getItemImage,
  item,
  theme: { size },
}) => {
  const { stockInfo, itemInfo } = item;

  return (
    <StyledFlexRow key={stockInfo.stockItemId} className="itemPreview">
      {getItemImage ? (
        getItemImage(itemInfo)
      ) : (
        <StyledItemImage
          radius={size.border.radius.main}
          src={itemInfo.photoSrc}
          height={50}
          width={50}
          imagekitParams={IMAGEKIT_PARAMS_CONFIG.platform.checkout.thumbnail}
        />
      )}
      <div>
        <Typography className="title">
          {getAvailableTranslation(
            itemInfo.texts?.title,
            defaultLng,
            currentLng
          )}
        </Typography>
        <ItemCharacteristicsChosen stockItem={itemInfo.attributesChosen} />
      </div>
      <Typography type="caption2" className="quantity">
        x {stockInfo.quantity}
      </Typography>
    </StyledFlexRow>
  );
};

export default withTheme(BasketItemPreview);
