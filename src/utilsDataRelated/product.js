import { buildImagePath } from "./images";

export const getFullPropertyOption = (system, attributeKey, optionSlug) => {
  const enumId = system.attributes[attributeKey].general.enumeration.id;
  return system.enumerations[enumId].options.find(
    (opt) => optionSlug === opt.slug
  );
};

export const getItemPhotosByColor = (
  attributes,
  photos,
  getOnePhotoSrc = false,
  itemId
) => {
  const getPhotosType = () => {
    const colorsKey =
      attributes &&
      Object.keys(attributes).find((key) => key.includes("color"));
    const colorSlug = attributes?.[colorsKey]?.slug;
    return (colorsKey && colorSlug && `${colorsKey}_${colorSlug}`) || "general";
  };

  const getItemPhotos = () => {
    const type = getPhotosType();
    return photos?.[type]?.active?.length && photos[type].active;
  };
  const photosType = getItemPhotos() ? getPhotosType() : "general";
  const itemPhotos =
    getItemPhotos() ||
    (photos?.general?.active?.length && photos.general.active) ||
    [];

  return getOnePhotoSrc
    ? buildImagePath("items", itemId, photosType, itemPhotos?.[0])
    : {
        itemPhotos,
        photosType,
      };
};

export const makePriceValid = (price) => {
  return typeof price === "string" ? +price.replace(",", ".") : price;
};

export const transformItemForOrder = (
  item,
  stock,
  attributes,
  quantity,
  currency
) => {
  const {
    merchant,
    warehouse_id,
    id,
    discount,
    priceRetail,
    price,
    key,
    value,
  } = stock; // +currency field
  const priceSale = price;
  const {
    id: itemId,
    slug,
    photos,
    texts,
    general: { brand, category, model },
  } = item;

  const priceWithDiscount =
    priceSale || (discount && priceRetail * (1 - discount / 100));
  const priceFinal = priceWithDiscount || priceRetail;

  return {
    itemInfo: {
      id: itemId,
      slug,
      texts,
      photoSrc: getItemPhotosByColor(attributes, photos, true, item.id),
      merchant,
      attributesChosen: attributes,
    },
    stockInfo: {
      stockItemId: id,
      warehouse: { id: warehouse_id },
      brand: { id: brand.id },
      category: { id: category.id },
      currency: { id: currency?.id },
      item: { id: itemId },
      model,
      characteristics: {
        key, // color:size
        value, // white:m
      },
      quantity: +quantity,
      price: makePriceValid(priceFinal),
      sum: makePriceValid(priceFinal) * +quantity,
    },
  };
};
