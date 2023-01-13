export const ITEM_TO_API_KEYS = {
  attributeType: "attributeTypes",
  brand: "brands",
  carrier: "carriers",
  category: "categories",
  client: "organizations",
  country: "countries",
  organization: "organizations",
  customer: "organizations",
  enumeration: "enumerations",
  industry: "industries",
  item: "items",
  magnitude: "magnitudes",
  merchant: "organizations",
  page: "pages",
  platform: "platforms",
  state: "states",
  status: "statuses",
  stock: "stocks",
  warehouse: "warehouses",
  type: "attributeTypes", //TODO: change "type" to smth more specific
  unit: "units",
};

export const DATA_TYPE_TO_SINGULAR_FORM = {
  attributes: "attribute",
  banners: "banner",
  brands: "brand",
  carriers: "carrier",
  categories: "category",
  clients: "client",
  countries: "country",
  currencies: "currency",
  enumerations: "enumeration",
  industries: "industry",
  items: "item",
  merchants: "merchant",
  orders: "order",
  pages: "page",
  platforms: "platform",
  "stock-items": "stock-item",
  stocks: "stock",
  warehouses: "warehouse",
  modifications: "modification",
  units: "unit",
  users: "user",
};

export const MAP_ITEM_SELECTION_PROPS_TO_API_KEYS = {
  categories: "general.category.id",
  brands: "general.brand.id",
  tags: "general.tags",
};

export const PLATFORM_CHOSEN_COLLECTIONS = {
  // carriers: true,
  // categories: true,
  // demands: true,
  // currencies: true,
};

export const SYSTEM_DATA_FIELDS = {
  attributes: "id,state,slug,general,translations.label",
  banners:
    "id,state,general.page,general.platform,general.category,seo.title,photos.general.active,photos.mobile.active,photos.square.active",
  brands:
    "id,state,platformId,slug,general.name,general.industry,general.platforms,general.merchant,photos.logos.active,photos.miniLogos.active,texts.textForEveryItem",
  carriers: "id,state,slug,general",
  categories:
    "id,state,slug,label,general.name,general.industry,general.properties,general.characteristics,general.content,general.isUsedForInquiries,general.unit,photos",
  countries: "id,callingCodes,flag,translations",
  currencies: "id,state,code,name,symbol,rates",
  enumerations:
    "id,slug,state,general.name,general.isIconsUploadAllowed,translations.label,options",
  industries: "all",
  inquiries: "all",
  items:
    "id,state,slug,platformId,general.model,general.brand,general.category,photos.general.active,characteristics,texts.title",
  merchants: "id,state,general.name",
  orders: "all",
  organizations: "id,state,general,address",
  pages: "id,state,general,translations",
  pagesOpenAPI: "id,state,general,translations",
  platforms:
    "id,state,key,slug,general,photos.logos,photos.miniLogos,photos.favicon,seo",
  platformsOpenAPI:
    "id,state,key,slug,general,photos.logos,photos.miniLogos,photos.favicon,seo",
  "stock-items": "all",
  warehouses: "all",
  modifications: "all",
  units: "id,state,general,translations",
  users: "all",
};

export const SEARCH_FIELDS_WITH_LANG = (language) => ({
  products: `texts.title.${language}`, // CRM: /search
  demands: `label.${language}`,
  orders: "number,total", // client.name
  items: `general.model,texts.title.${language},general.tags`,
  inquiries: "number", // client.name
  invoices: "number", // client.name
  shipments: "number", // client.name
  organizations: "general.name,general.email",
  pages: "general.url,itemsSelectionProps.tags",
  users: "general.firstName,general.lastName,email",
  banners: `general.url,seo.title.${language}`,
  faqs: "general.question",
  categories: `label.${language}`,
  attributes: `general.name,translations.label.${language}`,
  units: `general.name,translations.label.${language}`,
  enumerations: `general.name,translations.label.${language}`,
  search: `general.model,texts.title.${language}`, // platform search page
});

export const DATA_KEYS_WITH_VERSIONS_FOR_LOCAL_STORAGE = {
  // attributes: true,
  // brands: true,
  // categories: true,
  // countries: true,
  // currencies: true,
  // industries: true,
};

export const FIELDS_FOR_ALPHABETICAL_BACKEND_SORT = {
  // banners: `general.page`,
  brands: "general.name",
  items: "general.model",
  platforms: "general.name",
  merchants: "general.name",
};

export const KEYS_FOR_ALPHABETICAL_FRONTEND_SORT = {
  categories: true,
  countries: true,
  industries: true,
};
