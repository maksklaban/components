import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import HeaderMenuMobile from "./HeaderMenuMobile";
import Typography from "../../atoms/Typography";
import Logo from "../../molecules/Logo";
import { buildImagePath } from "../../utilsDataRelated/images";

export default {
  title: "organisms/HeaderMenuMobile",
  component: HeaderMenuMobile,
};

export const main = () => {
  const backgroundColor = select(
    "Background color",
    ["black", "white"],
    "black"
  );
  const appLogo = "";
  return (
    <div style={{ backgroundColor, height: "100vh" }}>
      <HeaderMenuMobile
        inverted={backgroundColor === "black"}
        getLogo={() => (
          <Logo
            alt="logo"
            className="headerLogo"
            logoSrc={buildImagePath(
              "platforms",
              "606f90318f023d00080c2fff",
              "logos",
              appLogo
            )}
          />
        )}
      >
        <Typography type={"body1"}>Link 1</Typography>
        <Typography type={"body1"}>Link 2</Typography>
        <Typography type={"body1"}>Link 3</Typography>
      </HeaderMenuMobile>
    </div>
  );
};

main.story = {
  decorators: [withKnobs],
};
