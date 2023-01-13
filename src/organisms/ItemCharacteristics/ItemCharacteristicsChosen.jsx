import React from "react";

import { StyledCharacteristics } from "./styled";
import Tag from "../../atoms/Tag";
import Icon from "../../atoms/Icon";
import Color from "../../atoms/Color";
import { buildImagePath } from "../../utilsDataRelated/images";
import { IMAGEKIT_PARAMS_CONFIG } from "../../constantsDataRelated/images";

// TODO: needs refactoring to make component more universal

const ItemCharacteristicsChosen = ({ stockItem, style }) => {
  const colorsKey =
    stockItem && Object.keys(stockItem).find((key) => key.includes("color"));
  const sizesKey =
    stockItem && Object.keys(stockItem).find((key) => key.includes("size"));
  const itemSize = stockItem?.[sizesKey];
  const itemColor = stockItem?.[colorsKey];

  if (!itemColor && !itemSize) return null;

  return (
    <StyledCharacteristics style={style}>
      {itemSize?.slug && itemSize.slug !== "one-size" && (
        <Tag
          fontSize={11}
          fontWeight={500}
          colorKey="gray2"
          text={
            <Icon
              width={18}
              height={18}
              name={`size${itemSize.slug.toUpperCase().replace("-", "_")}`}
            />
          }
        />
      )}
      {itemColor && (
        <Color
          size={18}
          color={itemColor.hexColor}
          image={
            itemColor.iconImage &&
            buildImagePath(
              "enumerations",
              "colors",
              itemColor.slug,
              itemColor.iconImage
            )
          }
          backgroundSize="120%"
          imagekitParams={IMAGEKIT_PARAMS_CONFIG.crm.icon.texture}
        />
      )}
    </StyledCharacteristics>
  );
};

export default ItemCharacteristicsChosen;
