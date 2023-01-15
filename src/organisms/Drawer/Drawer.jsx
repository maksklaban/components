import React, { useCallback, useEffect, useRef, useState } from "react";
import { PropTypes as T } from "prop-types";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import clsx from "clsx";

import { useUnmount } from "../../index";

import { StyledBackground, StyledDrawer, StyledToggleHandle } from "./styled";
import Icon from "../../atoms/Icon";

const Drawer = ({
  absolutePositioned,
  children,
  className,
  closeIconPadding,
  destroyOnClose,
  handleColor,
  onClose,
  openedValue,
  toggleDrawer,
  side,
  width,
  withBlackout,
  withCloseIcon,
  withToggleHandle,
}) => {
  const [displayed, setDisplayed] = useState(!destroyOnClose || false);
  const [opened, setOpened] = useState(false);
  const targetRef = useRef(null);

  const closeDrawer = useCallback(() => {
    if (destroyOnClose) {
      setOpened(false);
      window.closeId = setTimeout(() => {
        setDisplayed(false);
        if (withBlackout) {
          enableBodyScroll(targetRef?.current);
        }
      }, 300);
    } else {
      setOpened(false);
      if (withBlackout) {
        enableBodyScroll(targetRef?.current);
      }
    }

    if (onClose) onClose();
    if (toggleDrawer) toggleDrawer(false);
  }, [destroyOnClose, onClose, toggleDrawer, withBlackout]);

  const openDrawer = useCallback(() => {
    if (destroyOnClose) {
      setDisplayed(true);
      clearTimeout(window.closeId); // TODO: why is that happening? check load new item from url
      setTimeout(() => {
        setOpened(true);
        if (withBlackout) {
          disableBodyScroll(targetRef?.current);
        }
        if (toggleDrawer) toggleDrawer(true);
      }, 100);
    } else {
      setOpened(true);
      if (withBlackout) {
        disableBodyScroll(targetRef?.current);
      }

      if (toggleDrawer) toggleDrawer(true);
    }
  }, [destroyOnClose, toggleDrawer, withBlackout]);

  useEffect(() => {
    if (openedValue) {
      openDrawer();
    } else if (openedValue === false) {
      closeDrawer();
    }
  }, [openedValue, destroyOnClose, closeDrawer, openDrawer]);

  useUnmount(() => {
    clearAllBodyScrollLocks();
  });

  return (
    <>
      {withBlackout && absolutePositioned && (
        <StyledBackground
          className={(destroyOnClose && displayed) || opened ? "shown" : ""}
          onClick={closeDrawer}
        />
      )}
      <div
        className={clsx(className, opened && "opened")}
        style={{
          position: absolutePositioned ? "absolute" : "relative",
          overflow:
            !absolutePositioned || (destroyOnClose && displayed) || opened
              ? "visible"
              : "hidden",
          zIndex: 4,
          top: `${typeof window !== "undefined" ? window.scrollY : 0}px`,
        }}
      >
        <StyledDrawer
          closeIconPadding={closeIconPadding}
          // top={typeof window !== 'undefined' ? window.scrollY : 0}
          className={clsx(
            // className,
            "drawer",
            opened && "opened",
            displayed && "displayed",
            side,
            withToggleHandle && "withToggleHandle"
          )}
          ref={targetRef}
          absolutePositioned={absolutePositioned}
          width={width}
        >
          {withCloseIcon && (
            <Icon name="cross" onClick={closeDrawer} className="closeIcon" />
          )}
          {children}
        </StyledDrawer>
        {withToggleHandle && (
          <StyledToggleHandle
            handleColor={handleColor}
            className={clsx(side, opened && "opened")}
            width={width}
            onClick={() => (opened ? closeDrawer() : openDrawer())}
          />
        )}
      </div>
    </>
  );
};

export default Drawer;

Drawer.propTypes = {
  absolutePositioned: T.bool,
  closeIconPadding: T.string,
  destroyOnClose: T.bool,
  handleColor: T.string,
  side: T.oneOf(["left", "right"]),
  width: T.string,
  withBlackout: T.bool,
  withCloseIcon: T.bool,
  withToggleHandle: T.bool,
};

Drawer.defaultProps = {
  absolutePositioned: true,
  closeIconPadding: "20px",
  side: "left",
};
