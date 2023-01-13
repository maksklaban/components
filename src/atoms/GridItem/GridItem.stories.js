import React from "react";
import { number, select, withKnobs, text } from "@storybook/addon-knobs";

import GridItem from "./GridItem";
import Grid from "../../molecules/Grid";
import { LOREM_1, PLACE_ITEMS_GRID_OPTIONS } from "../../constants/propTypes";

export default {
  title: "Atoms/GridItem",
  component: GridItem,
};

export const gridItem = () => (
  <Grid>
    <GridItem
      cols={text("Item width in columns or 'end' (span item to the end)", 3)}
      colStart={number("Number of column to start item from", undefined)}
      alignSelf={select("Align self", PLACE_ITEMS_GRID_OPTIONS, "center")}
      justifySelf={select("Justify self", PLACE_ITEMS_GRID_OPTIONS, "center")}
    >
      <div>{LOREM_1}</div>
    </GridItem>
  </Grid>
);

gridItem.story = {
  decorators: [withKnobs],
};
