import React from "react";
import clsx from "clsx";
import { withTheme } from "styled-components";

import {
  getAvailableTranslation,
  getPriceWithCurrency,
} from "@goodzyk/components";

import { StyledFlexRow, StyledItemRow, StyledRowWrapper } from "./styled";
import QuantityInput from "../../molecules/QuantityInput";
import ItemCharacteristicsChosen from "../ItemCharacteristics/ItemCharacteristicsChosen";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";

const MobileBasketItem = ({
  additionToTitle,
  defaultLng,
  item,
  onChangeQuantity,
  currency,
  t,
  lng,
  inputVariant,
  isPreview,
  onRemoveItem,
  theme: { color },
  getItemImage,
  quantity,
  id,
}) => {
  const { itemInfo, stockInfo } = item;
  if (!itemInfo) {
    return null;
  }
  const sum =
    stockInfo && (stockInfo.sum || stockInfo.quantity * stockInfo.price);

  const renderQuantityInput = () => (
    <QuantityInput
      variant={inputVariant}
      className="quantityInput"
      onChange={onChangeQuantity(stockInfo?.stockItemId || id)}
      value={stockInfo?.quantity || quantity}
      min={1}
    />
  );

  return (
    <StyledRowWrapper className={clsx(isPreview && "isPreview", "basketItem")}>
      {getItemImage(itemInfo)}
      <StyledItemRow className={clsx(isPreview && "isPreview")}>
        <StyledFlexRow className="name">
          <Typography type="body1">
            {getAvailableTranslation(itemInfo.texts?.title, defaultLng, lng)}
            {additionToTitle}
            {isPreview && (
              <ItemCharacteristicsChosen
                stockItem={itemInfo.attributesChosen}
              />
            )}
          </Typography>
          {!isPreview && (
            <Icon
              name="trashBin"
              onClick={onRemoveItem(stockInfo?.stockItemId || id)}
              className="deleteIcon"
              fill={color.status.error}
            />
          )}
          {isPreview && renderQuantityInput()}
        </StyledFlexRow>
        <StyledFlexRow>
          {!isPreview && (
            <ItemCharacteristicsChosen
              stockItem={itemInfo.attributesChosen}
              style={{ justifyContent: "flex-end", margin: "10px 0" }}
            />
          )}
        </StyledFlexRow>
        <StyledFlexRow className="priceQty">
          {!isPreview && renderQuantityInput()}
          {sum && (
            <div>
              <Typography
                type="body1"
                text={sum ? getPriceWithCurrency(sum, currency) : t("onDemand")}
                className="price"
              />
            </div>
          )}
        </StyledFlexRow>
      </StyledItemRow>
    </StyledRowWrapper>
  );
};

export default withTheme(MobileBasketItem);
