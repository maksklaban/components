import React from "react";
import { withTheme } from "styled-components";

import Typography from "../../atoms/Typography";
import { StyledPrice } from "./styled";
import { getPriceWithCurrency } from "../../utilsDataRelated/currency";

const Price = ({
  currency,
  itemOutOfStock,
  size = "small",
  stock = {},
  t,
  theme: { color },
}) => {
  const { currencyId, discount, price, priceRetail, quantity } = stock;
  const priceSale = price;
  const priceWithDiscount =
    priceSale || (discount && priceRetail * (1 - discount / 100));

  if (itemOutOfStock) {
    return (
      <Typography
        className="price"
        color={color.primary.main}
        type={size === "big" ? "h2" : "h3"}
        text={(t && t("outOfStock")) || "Out of stock"}
      />
    );
  }

  return (
    <StyledPrice className="price">
      <Typography
        color={color.primary.main}
        type={size === "big" ? "h2" : "h3"}
        text={
          quantity
            ? priceWithDiscount || priceRetail
              ? getPriceWithCurrency(priceWithDiscount || priceRetail, currency)
              : t
              ? t("onDemand")
              : 0
            : t
            ? t("outOfStock")
            : 0
        }
      />

      {!!(priceWithDiscount && priceRetail) && (
        <Typography
          className="oldPrice"
          textDecoration="line-through"
          color={color.general.gray3}
          type={size === "big" ? "h3" : "caption2"}
          text={getPriceWithCurrency(priceRetail, currency)}
        />
      )}
    </StyledPrice>
  );
};

export default withTheme(Price);
