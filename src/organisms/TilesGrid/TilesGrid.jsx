import React, { useContext, useEffect, useState } from "react";
import { PropTypes as T } from "prop-types";
import clsx from "clsx";

import { StyledTilesGrid } from "./styled";
import {
  ALIGN_JUSTIFY_CONTENT_TYPES,
  ALIGN_JUSTIFY_ITEMS_TYPES,
} from "../../types";

const TilesGrid = ({
  tiles,
  itemsInRow,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  className,
  rowGap,
  screenContext,
  children,
}) => {
  const [itemsInRowCount, setItemsInRowCount] = useState(itemsInRow);
  const { screenUp } = useContext(screenContext);

  const isTablet = screenUp === "md";
  const isLandscape = screenUp === "sm";
  const isMobile = screenUp === "xs";
  const isXMobile = screenUp === "xxs";

  useEffect(() => {
    if (itemsInRow === 4 || itemsInRow === 3) {
      setItemsInRowCount(
        isMobile || isXMobile || isLandscape ? 1 : isTablet ? 2 : itemsInRow
      );
    } else if (itemsInRow === 2) {
      setItemsInRowCount(isMobile || isXMobile || isLandscape ? 1 : 2);
    }
  }, [screenUp, itemsInRow]);

  return (
    <StyledTilesGrid
      itemsInRow={itemsInRowCount}
      justifyItems={justifyItems}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
      rowGap={rowGap}
      className={clsx(className, "tilesGrid")}
    >
      {(children || tiles).map((tile, i) => (
        <div key={i} className="tilesGridItem">
          {tile}
        </div>
      ))}
    </StyledTilesGrid>
  );
};

TilesGrid.propTypes = {
  alignContent: T.oneOf(ALIGN_JUSTIFY_CONTENT_TYPES),
  alignItems: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  className: T.string,
  itemsInRow: T.oneOf([1, 2, 3, 4]),
  justifyContent: T.oneOf(ALIGN_JUSTIFY_CONTENT_TYPES),
  justifyItems: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  rowGap: T.string,
  screenContext: T.object.isRequired,
  tiles: T.array,
};

TilesGrid.defaultProps = {
  alignContent: "center",
  alignItems: "center",
  itemsInRow: 1,
  justifyContent: "center",
  justifyItems: "center",
  tiles: [],
};

export default TilesGrid;
