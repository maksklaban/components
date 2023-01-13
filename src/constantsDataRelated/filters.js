import { PROVIDERS, ROLES } from './options'
import { ALL_PLATFORMS_LANGUAGES, LANGUAGES_FULL_NAME } from './languages'

export const FILTERS_CONFIG = {
  brand: {
    key: 'brands',
    apiKey: 'general.brand.id',
    label: {
      uk: 'Бренд',
      ru: 'Бренд',
      en: 'Brand',
    },
    type: 'checkboxList',
  },
  carrier: {
    key: 'carriers',
    apiKey: 'general.carrier.id',
    label: {
      uk: 'Перевізник',
      ru: 'Перевозчик',
      en: 'Carrier',
    },
    type: 'checkboxList',
  },
  category: {
    key: 'categories',
    apiKey: 'general.category.id',
    label: {
      uk: 'Категорія',
      ru: 'Категория',
      en: 'Category',
    },
    type: 'checkboxList',
  },
  client: {
    key: 'organizations',
    apiKey: 'general.client.id',
    label: {
      uk: 'Клієнт',
      ru: 'Клиент',
      en: 'Client',
    },
    type: 'checkboxList',
  },
  organization: {
    key: 'organizations',
    apiKey: 'general.organization.id',
    label: {
      uk: 'Организація',
      ru: 'Организация',
      en: 'Organization',
    },
    type: 'checkboxList',
  },
  organization_oid: {
    key: 'organizations',
    apiKey: 'organization_oid',
    label: {
      uk: 'Организація',
      ru: 'Организация',
      en: 'Organization',
    },
    type: 'checkboxList',
  },
  country: {
    key: 'countries',
    apiKey: 'general.country.id',
    label: {
      uk: 'Країна',
      ru: 'Страна',
      en: 'Country',
    },
    type: 'checkboxList',
  },
  geo_oid: {
    key: 'countries',
    apiKey: 'geo_oid',
    label: {
      uk: 'Країна',
      ru: 'Страна',
      en: 'Country',
    },
    type: 'checkboxList',
  },
  // customer: {
  //   key: 'organizations',
  //   apiKey: 'general..id',
  //   label: {
  //     uk: 'Покупець',
  //     ru: 'Покупатель',
  //     en: 'Customer',
  //   },
  //   type: 'checkboxList',
  // },
  // delivery: {
  //   key: 'deliveries',
  //   label: {
  //     uk: 'Оператори доставки',
  //     ru: 'Операторы доставки',
  //     en: 'Delivery operators',
  //   },
  //   type: 'checkboxList',
  // },
  industry: {
    key: 'industries',
    apiKey: 'general.industry.id',
    label: {
      uk: 'Індустрія',
      ru: 'Индустрия',
      en: 'Industry',
    },
    type: 'checkboxList',
  },
  inquirer_oid: {
    key: 'organizations',
    apiKey: 'inquirer_oid',
    label: { uk: 'Запитувач', ru: 'Запрашивающая организация', en: 'Inquirer' },
    type: 'checkboxList',
  },
  language: {
    type: 'checkboxList',
    key: '',
    apiKey: 'general.language',
    options: ALL_PLATFORMS_LANGUAGES.map((lng) => ({ id: lng, label: LANGUAGES_FULL_NAME[lng] })),
    label: {
      uk: 'Мова',
      en: 'Language',
      ru: 'Язык',
    },
  },
  logist_oid: {
    key: 'carriers',
    apiKey: 'logist_oid',
    label: {
      uk: 'Перевізник',
      ru: 'Перевозчик',
      en: 'Carrier',
    },
    type: 'checkboxList',
  },
  magnitude: {
    key: 'magnitudes',
    type: 'checkboxList',
    apiKey: 'general.magnitude.id',
    label: {
      en: 'Magnitude',
      ru: 'Величина',
      uk: 'Величина',
    },
  },
  merchant: {
    key: 'organizations',
    type: 'checkboxList',
    apiKey: 'general.merchant.id',
    label: {
      uk: 'Продавець',
      ru: 'Продавец',
      en: 'Merchant',
    },
  },
  platform: {
    key: 'platforms',
    apiKey: 'general.platform.id',
    label: {
      uk: 'Платформа',
      ru: 'Платформа',
      en: 'Platform',
    },
    type: 'checkboxList',
  },
  platforms: {
    key: 'platforms',
    apiKey: 'general.platforms',
    label: {
      uk: 'Платформа',
      ru: 'Платформа',
      en: 'Platform',
    },
    type: 'checkboxList',
  },
  price: {
    apiKey: 'price',
    label: {
      uk: 'Ціна',
      ru: 'Цена',
      en: 'Price',
    },
    type: 'checkboxList',
  },
  provider: {
    key: '',
    options: PROVIDERS,
    type: 'checkboxList',
    apiKey: 'general.provider',
    label: {
      uk: 'Провайдер',
      en: 'Provider',
      ru: 'Провайдер',
    },
  },
  recipient_oid: {
    key: 'organizations',
    apiKey: 'recipient_oid',
    label: { uk: 'Отримувач', ru: 'Получатель', en: 'Recipient' },
    type: 'checkboxList',
  },
  role: {
    type: 'checkboxList',
    key: '',
    options: ROLES, // { id: null, label: { en: 'Not assigned', uk: 'Не обрано', ru: 'Не выбрана' } }
    apiKey: 'general.roles',
    label: {
      uk: 'Роль',
      en: 'Role',
      ru: 'Роль',
    },
  },
  state: {
    key: 'states',
    apiKey: 'state',
    label: {
      uk: 'Стан',
      ru: 'Состояние',
      en: 'State',
    },
    type: 'checkboxList',
  },
  status: {
    key: 'statuses',
    systemDataKeyMapping: {
      inquiries: 'inquiryStatuses',
      invoices: 'invoiceStatuses',
      shipments: 'shipmentStatuses',
    },
    apiKey: 'status',
    label: {
      uk: 'Статус',
      ru: 'Статус',
      en: 'Status',
    },
    type: 'checkboxList',
  },
  warehouse: {
    key: 'warehouses',
    type: 'checkboxList',
    apiKey: 'general.stock.id',
    label: {
      uk: 'Склад',
      en: 'Warehouse',
      ru: 'Склад',
    },
  },
  type: {
    key: '',
    systemDataKeyMapping: {
      organizations: 'organizationTypes',
      attributes: 'attributeTypes',
      warehouses: 'warehouseTypes',
      pages: 'pageTypes',
      contracts: 'contractTypes',
    },
    type: 'checkboxList',
    apiKey: 'general.type.id',
    label: {
      uk: 'Тип',
      en: 'Type',
      ru: 'Тип',
    },
  },
}

export const FILTERS_KEY_MAPPINGS = {
  'general.brand.id': 'brand',
  'general.category.id': 'category',
  'general.client.id': 'client',
  'general.country.id': 'country',
  'general.customer.id': 'customer',
  'general.industry.id': 'industry',
  'general.merchant.id': 'merchant',
  'general.platforms': 'platforms',
  'general.platform.id': 'platform',
  'general.language': 'language',
  'general.provider': 'provider',
  'general.roles': 'role',
  state: 'state',
  status: 'status',
  'general.stock.id': 'stock',
  'general.type.id': 'type',
  'general.type': 'type',
  'general.magnitude.id': 'magnitude',
  'general.organization.id': 'organization',
  'recipient_oid.id': 'recipient_oid',
  'inquirer_oid.id': 'inquirer_oid',
  'logist_oid.id': 'logist_oid',
  'geo_oid.id': 'geo_oid',
  'organization_oid.id': 'organization_oid',
}
