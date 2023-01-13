import React, { Fragment, useEffect, useMemo } from "react";

import { StyledAttributes } from "./styled";
import Color from "../../atoms/Color";
import Tag from "../../atoms/Tag";
import Icon from "../../atoms/Icon";
import Label from "../../atoms/Label";
import { buildImagePath } from "../../utilsDataRelated/images";
import { IMAGEKIT_PARAMS_CONFIG } from "../../constantsDataRelated/images";
import { isObjectEmpty } from "../../utils";

// TODO: needs refactoring to make component more universal

const ItemCharacteristicsToChoose = ({
  attributes,
  enumerations,
  attributesChosen,
  items,
  item,
  onAttributeChoose,
  setAttributesChosen,
  t,
}) => {
  const characteristics = item?.characteristics;
  const colorsKey =
    characteristics &&
    Object.keys(characteristics).find((key) => key.includes("color"));
  const sizesKey =
    characteristics &&
    Object.keys(characteristics).find((key) => key.includes("size"));
  const attrChosenLength =
    item &&
    attributesChosen &&
    Object.keys(items ? attributesChosen[item.id] : attributesChosen)?.length;

  // const [outOfStock, setOutOfStock] = useState({})

  const ATTRIBUTES_DATA = useMemo(
    () => [
      {
        key: colorsKey,
        label: "color",
        collection: attributes?.[colorsKey],
        component: Color,
        componentProps: (itemData) => ({
          color: itemData?.hexColor,
          image:
            itemData?.iconImage &&
            buildImagePath(
              "enumerations",
              "colors",
              itemData.slug,
              itemData.iconImage
            ),
          backgroundSize: "120%",
          imagekitParams: IMAGEKIT_PARAMS_CONFIG.crm.icon.texture,
        }),
      },
      {
        key: sizesKey,
        label: "size",
        collection: attributes?.[sizesKey],
        component: Tag,
        componentProps: (itemData, selected) => ({
          text: itemData?.icon && (
            <Icon
              name={itemData.icon.id || itemData.icon}
              fill={selected ? "white" : undefined}
            />
          ),
          colorKey: "gray2",
          fontSize: 11,
          fontWeight: 500,
        }),
      },
    ],
    [attributes, colorsKey, sizesKey]
  );

  const setAttributes = (itemId, key, value) => {
    setAttributesChosen((prev) => {
      let newItems = {};
      if (items) {
        newItems = {
          ...prev,
          [itemId]: {
            ...newItems[itemId],
            [key]: value,
          },
        };
      } else {
        newItems = { ...prev, [key]: value };
      }

      return newItems;
    });
  };

  useEffect(() => {
    const colorsAttribute = attributes?.[colorsKey];
    const sizesAttribute = attributes?.[sizesKey];

    const chooseFirstAttr = (item) => {
      if (attrChosenLength === Object.keys(item.characteristics).length) {
        return;
      }

      ATTRIBUTES_DATA.forEach((attrObj, i) => {
        const itemCharacteristics = characteristics?.[attrObj.key]; // id, slug

        if (!itemCharacteristics?.length) {
          return;
        }

        for (let characteristic of itemCharacteristics) {
          if (!characteristic) return;

          const characteristicSlug = characteristic.slug;
          const enumId = attrObj.collection?.general.enumeration.id;
          const itemData = enumerations?.[enumId].options.find(
            (option) => option.slug === characteristicSlug
          );

          const checkIfFirstAttributeValueHasAnyMods = () => {
            return (
              item.modifications &&
              Object.values(item.modifications).some((mod) => {
                return (
                  mod?.stocks?.length &&
                  mod.value.split(":").includes(itemData.slug)
                );
              })
            );
          };

          if (i === 0 && checkIfFirstAttributeValueHasAnyMods()) {
            setAttributes(item.id, attrObj.key, itemData);
            return;
          }

          const checkIfNextAttrValueHasModWithChosenPrev = () => {
            const chosenSlugs = Object.values(attributesChosen).map(
              (val) => val.slug
            );

            return (
              item.modifications &&
              Object.values(item.modifications).some((mod) => {
                const splitModValue = mod?.value?.split(":");

                return (
                  mod?.stocks?.length &&
                  splitModValue.includes(itemData.slug) &&
                  splitModValue.findIndex((val) =>
                    chosenSlugs.includes(val)
                  ) !== -1
                );
              })
            );
          };

          if (
            attrChosenLength === 1 &&
            i > 0 &&
            checkIfNextAttrValueHasModWithChosenPrev()
          ) {
            setAttributes(item.id, attrObj.key, itemData);
            break;
          }
        }
      });
    };

    if ((colorsKey && colorsAttribute) || (sizesKey && sizesAttribute)) {
      if (items?.length) {
        items.forEach((item) => {
          chooseFirstAttr(item);
        });
      } else {
        chooseFirstAttr(item);
      }
    }
  }, [
    ATTRIBUTES_DATA,
    attrChosenLength,
    attributes,
    attributesChosen,
    characteristics,
    colorsKey,
    enumerations,
    item,
    items,
    setAttributes,
    setAttributesChosen,
    sizesKey,
  ]);

  const onSelectAttribute = (itemId, key, value) => () => {
    if (onAttributeChoose) {
      onAttributeChoose(key, value);
    }
    setAttributes(itemId, key, value);
  };

  return (
    <StyledAttributes className="characteristicsToChoose">
      {ATTRIBUTES_DATA.map((attrObj) => {
        const itemCharacteristics = characteristics?.[attrObj.key]; // id, slug

        if (
          !itemCharacteristics ||
          !attributes ||
          isObjectEmpty(attributes) ||
          !enumerations ||
          isObjectEmpty(enumerations)
        )
          return null;

        return (
          itemCharacteristics?.length > 1 && (
            <Fragment key={attrObj.key}>
              <Label text={t(attrObj.label)} />
              <div
                style={{
                  display: "flex",
                  marginBottom: 14,
                }}
              >
                {itemCharacteristics.map((characteristic) => {
                  const characteristicSlug = characteristic.slug;
                  const enumId = attrObj.collection?.general.enumeration.id;
                  const characteristicData =
                    enumId &&
                    enumerations?.[enumId]?.options.find(
                      (option) => option.slug === characteristicSlug
                    );
                  const Component = attrObj.component;
                  const itemChosenAttributes = items
                    ? attributesChosen?.[item.id]
                    : attributesChosen;
                  const selected =
                    itemChosenAttributes?.[attrObj.key]?.slug ===
                    characteristicData?.slug;

                  return (
                    <Component
                      key={characteristic.id}
                      onClick={onSelectAttribute(
                        item.id,
                        attrObj.key,
                        characteristicData
                      )}
                      selected={selected}
                      {...attrObj.componentProps(characteristicData, selected)}
                    />
                  );
                })}
              </div>
            </Fragment>
          )
        );
      })}
    </StyledAttributes>
  );
};

export default ItemCharacteristicsToChoose;
