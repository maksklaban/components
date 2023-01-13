import React, { useContext } from "react";
import clsx from "clsx";
import ReactTexty from "react-texty";

import { IMAGEKIT_PARAMS_CONFIG } from "@goodzyk/components";

import {
  StyledCard,
  StyledCardContent,
  StyledCardCol,
  StyledFlex,
  StyledDate,
} from "./styled";
import Label from "../../atoms/Label";
import { buildImagePath, ScreenContext } from "../..";
import Typography from "../../atoms/Typography";
import { getDescendantProp } from "../../utils";
import SelectionCell from "../../organisms/Table/components/SelectionCell";
import Image from "../../atoms/Image";
import Price from "../../organisms/Price";

const cardColumns = {
  brands: ["industry", "country", "name", "platforms", "state"],
  items: ["category", "title", "model", "state"],
  orders: [
    "date",
    "orderNumber",
    "inquiryNumber",
    "recipient",
    "status",
    "sum",
  ],
  "stock-items": [
    "warehouse",
    "quantity",
    "item",
    "characteristics",
    "brand",
    "state",
    "price",
    // 'price_retail',
    // 'price_sale',
    // 'discount',
  ],
  warehouses: ["state", "name", "address", "currency", "type", "items"],
  users: ["state", "firstName", "lastName", "email", "role", "provider"],
  categories: ["state", "name", "parentCategory", "characteristics"],
  inquiries: ["date", "inquiryNumber", "type", "address", "status", "state"],
  invoices: [
    "date",
    "invoiceNumber",
    "orderNumber",
    "client",
    "merchant",
    "status",
    "state",
    "sum",
  ],
  shipments: [
    "date",
    "shipmentNumber",
    "orderNumber",
    "client",
    "merchant",
    "status",
    "state",
  ],
};

export const getBrandLogoWithState = (
  state,
  entityId,
  type,
  fileName,
  maxHeight
) => {
  return (
    <StyledFlex key="stateAndLogo">
      {fileName && (
        <Image
          className="brandLogo"
          src={buildImagePath("brands", entityId, type, fileName)}
          maxHeight={maxHeight || 35}
          imagekitParams={IMAGEKIT_PARAMS_CONFIG.components.cardTableItemLogo}
        />
      )}
      {state}
    </StyledFlex>
  );
};

export const getStatusAndState = (status, state) => {
  return (
    <StyledFlex key="stateAndStatus">
      {status}
      {state}
    </StyledFlex>
  );
};

export const getDateAndNumber = (isMobile, date, number) => {
  return (
    <span onClick={isMobile ? (e) => e.stopPropagation() : undefined}>
      <StyledDate>{date},&nbsp;</StyledDate> #{number}
    </span>
  );
};

export const getImage = (data, height, width, className, dataType) => {
  let photo = data.photos?.general?.active?.[0];
  let photoType = "general";

  if (!photo && data.photos) {
    Object.keys(data.photos).forEach((type) => {
      const photoName = data.photos[type]?.active?.[0];

      if (photoName) {
        photo = photoName;
        photoType = type;
      }
    });
  }

  return (
    <Image
      className={className}
      src={buildImagePath(dataType || "items", data.id, photoType, photo)}
      height={height}
      width={width}
      radius={2}
      imagekitParams={IMAGEKIT_PARAMS_CONFIG.components.cardTableItemPhoto}
    />
  );
};

const cardConfig = (data, t) => {
  const {
    photos: { miniLogos, logos },
    brandPhotos,
  } = data;
  const miniLogo =
    miniLogos?.active?.[0] || brandPhotos?.miniLogos?.active?.[0];
  const logo =
    miniLogo || logos?.active?.[0] || brandPhotos?.logos?.active?.[0];

  return {
    brands: {
      leftColumn: { label: "industry", h4: "name", caption2: "country" },
      rightColumn: [
        getBrandLogoWithState(
          data.state,
          data.id,
          miniLogo ? "minilogos" : "logos",
          logo
        ),
        "platforms",
      ],
    },
    items: {
      leftImage: getImage(
        data,
        data.tags ? 50 : 65,
        data.tags ? 50 : 65,
        "leftImage"
      ),
      leftColumn: { label: "category", h4: "title", caption2: "model" },
      rightColumn: [
        getBrandLogoWithState(
          data.state,
          data.brandId,
          miniLogo ? "minilogos" : "logos",
          logo
        ),
      ],
    },
    orders: {
      leftColumn: {
        label: getDateAndNumber(data.isMobile, data.date, data.orderNumber),
        h4: data.inquiryNumber ? (
          <ReactTexty>
            <span>
              {t("inquiry")}#:&nbsp;{data.inquiryNumber}
            </span>
          </ReactTexty>
        ) : (
          ""
        ),
        caption2: (
          <span
            onClick={data.isMobile ? (e) => e.stopPropagation() : undefined}
          >
            {data.recipient}
          </span>
        ),
      },
      rightColumn: [
        "status",
        <Typography text={data.sum} type="h4" key="sum" />,
      ],
    },
    "stock-items": {
      leftColumn: {
        label: "characteristics",
        h4: "item",
        caption2: (
          <div style={{ display: "flex" }}>
            {data.warehouse}: {data.quantity}
          </div>
        ),
      },
      rightColumn: [
        getBrandLogoWithState(
          data.state,
          data.brandId,
          miniLogo ? "minilogos" : "logos",
          logo
        ),
        <Price
          key="price"
          stock={{
            discount: data.discount,
            priceRetail: data.price_retail,
            priceSale: data.price_sale,
            price: data.price,
            quantity: data.quantity,
          }}
        />,
      ],
    },
    warehouses: {
      leftColumn: {
        label: <Typography type="body2" text={data.currency} />,
        h4: `${data.name}: `,
        caption2: "address",
      },
      rightColumn: ["type", `${data.items || 0} ${t("pcs")}`, "state"],
    },
    users: {
      leftColumn: {
        label: "role",
        h4: `${data.firstName} ${data.lastName}`,
        caption2: "email",
      },
      rightColumn: [
        "state",
        <Typography
          margin="0 0 0 5px"
          key="provider"
          type="body2"
          text={data.provider}
        />,
      ],
    },
    categories: {
      leftImage: getImage(data, 65, 65, "leftImage", "categories"),
      leftColumn: {
        label: data.parentCategory,
        h4: "name",
        caption2: data.characteristics,
      },
      rightColumn: ["state"],
    },
    inquiries: {
      leftColumn: {
        label: getDateAndNumber(data.isMobile, data.date, data.inquiryNumber),
        h4: (
          <span
            onClick={data.isMobile ? (e) => e.stopPropagation() : undefined}
          >
            {data.type}
          </span>
        ),
        caption2: "address",
      },
      rightColumn: [getStatusAndState(data.status, data.state)],
    },
    invoices: {
      leftColumn: {
        label: getDateAndNumber(data.isMobile, data.date, data.invoiceNumber),
        h4: (
          <span
            onClick={data.isMobile ? (e) => e.stopPropagation() : undefined}
          >
            {/*{data.merchant}&nbsp;->&nbsp;{data.client}*/}
          </span>
        ),
        caption2: (
          <span>
            {t("order")}#:&nbsp;{data.orderNumber}
          </span>
        ),
      },
      rightColumn: [getStatusAndState(data.status, data.state), "sum"],
    },
    shipments: {
      leftColumn: {
        label: getDateAndNumber(data.isMobile, data.date, data.shipmentNumber),
        h4: (
          <span
            onClick={data.isMobile ? (e) => e.stopPropagation() : undefined}
          >
            {/*{data.merchant}&nbsp;->&nbsp;{data.client}*/}
          </span>
        ),
        caption2: (
          <span>
            {t("order")}#:&nbsp;{data.orderNumber}
          </span>
        ),
      },
      rightColumn: [getStatusAndState(data.status, data.state)],
    },
  };
};

/**
 * Get Value for the specific column
 * @param {*} columns
 * @param {*} colKey
 */
const getValue = (columns, columnKey, data, cellProps) => {
  const column = columns.find((col) => col.key === columnKey);
  const value = getDescendantProp(data, column?.dataKey || "");
  const res = column?.cellRenderer
    ? column.cellRenderer({
        cellData: value,
        column,
        rowData: data,
        ...cellProps,
      })
    : value;

  return res;
};

/**
 * Returns content for the Card (@AG: maybe we should move this to separate files)
 * @param {*} type
 * @param {*} data
 */
const getContent = (type, data, t) => {
  const config = cardConfig(data, t)[type];
  const { leftImage, leftColumn, rightColumn, secondRow } = config || {};

  return (
    <div style={{ width: `calc(100% - ${data.isMobile ? 31 : 41}px)` }}>
      <StyledCardContent>
        {leftImage}
        {leftColumn && (
          <StyledCardCol className="left">
            {leftColumn.label && (
              <Label as={ReactTexty} type="bigger" className="row">
                {Object.hasOwn(data, leftColumn.label)
                  ? data[leftColumn.label]
                  : leftColumn.label}
              </Label>
            )}
            {leftColumn.h4 && (
              <Typography component={ReactTexty} type="h4" className="row">
                {Object.hasOwn(data, leftColumn.h4)
                  ? data[leftColumn.h4]
                  : leftColumn.h4}
              </Typography>
            )}
            {leftColumn.caption2 && (
              <Typography
                component={ReactTexty}
                type="caption2"
                className="row"
              >
                {Object.hasOwn(data, leftColumn.caption2)
                  ? data[leftColumn.caption2]
                  : leftColumn.caption2}
              </Typography>
            )}
          </StyledCardCol>
        )}
        {rightColumn && (
          <StyledCardCol className="right">
            {rightColumn.map((item, i) =>
              Object.hasOwn(data, rightColumn[i]) ? data[item] : item
            )}
          </StyledCardCol>
        )}
      </StyledCardContent>
      {secondRow}
    </div>
  );
};

const CardTableItem = ({
  cellProps,
  index,
  selectable,
  columns,
  className,
  data,
  editMode,
  onItemSelect,
  selectedRowKeys,
  t,
  type,
}) => {
  const { screenUp, width, sm } = useContext(ScreenContext) || {};

  if (typeof data === "string") {
    return <Typography text={data} />;
  }
  if (!data.id) {
    return null;
  }

  const onCheckboxChange = (checked) => {
    onItemSelect({ selected: checked, rowData: data, rowIndex: index });
  };

  const renderData = {
    id: data.id,
    photos: data.photos || {},
    isMobile: width < sm,
  };

  cardColumns[type]?.forEach((column) => {
    renderData[column] = getValue(columns, column, data, cellProps);
  });

  if (type === "items" || type === "stock-items") {
    renderData.brandId = data.general?.brand?.id || data.brand_id;
    renderData.brandPhotos =
      cellProps.container.props.cellProps.system?.brands?.[
        renderData.brandId
      ]?.photos;
  }

  return (
    <StyledCard
      screenUp={screenUp}
      className={clsx(className, editMode && "editMode")}
    >
      {selectable && (
        <SelectionCell
          rowData={data}
          rowIndex={index}
          column={{ onChange: onCheckboxChange, selectedRowKeys, rowKey: "id" }}
          container={{ props: {} }}
        />
      )}

      {getContent(type, renderData, t)}
    </StyledCard>
  );
};

export default CardTableItem;
