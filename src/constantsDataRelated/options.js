export const ORGANIZATION_TYPES = [
  {
    id: 'private',
    label: { en: 'Private', uk: 'Приватний', ru: 'Частный' },
  },
  {
    id: 'hospital',
    label: { en: 'Hospital', uk: 'Лікарня', ru: 'Больница' },
  },
  {
    id: 'military',
    label: { en: 'Military', uk: 'Військовий', ru: 'Военный' },
  },
  {
    id: 'business',
    label: { en: 'Business', uk: 'Бізнес', ru: 'Бизнес' },
  },
  {
    id: 'governmental',
    label: { en: 'Governmental', uk: 'Державний', ru: 'Государственный' },
  },
  {
    id: 'fund',
    label: { en: 'Fund', uk: 'Фонд', ru: 'Фонд' },
  },
  {
    id: 'ngo',
    label: { en: 'NGO', uk: 'НПО', ru: 'НПО' },
  },
]

export const ATTRIBUTE_TYPES = [
  { id: 'numeric', label: { en: 'Number', ru: 'Число', uk: 'Число' } },
  { id: 'enum', label: { en: 'Enumeration', ru: 'Перечисление', uk: 'Перелік' } },
  { id: 'bool', label: { en: 'Boolean', ru: 'Булевое значение', uk: 'Булеве значення' } },
]

export const ROLES = [
  { id: 'admin', label: { en: 'Admin', ru: 'Администратор системы', uk: 'Адміністратор системи' } },
  {
    id: 'platform-admin',
    label: { en: 'Platform admin', ru: 'Администратор платформы', uk: 'Адміністратор платформи' },
  },
  {
    id: 'merchant-admin',
    label: { en: 'Merchant admin', ru: 'Администратор продавца', uk: 'Адміністратор продавцю' },
  },
  { id: 'donor', label: { en: 'Donor', ru: 'Донор', uk: 'Донор' } },
  { id: 'client', label: { en: 'Client', ru: 'Клиент', uk: 'Клієнт' } },
  { id: 'recipient', label: { en: 'Recipient', ru: 'Получатель помощи', uk: 'Одержувач допомоги' } },
  { id: 'logistic', label: { en: 'Logistic', ru: 'Логистика', uk: 'Логістика' } },
]

export const PROVIDERS = [
  // { id: '', label: { en: 'No provider', uk: 'Без провайдеру', ru: 'Без провайдера' } },
  { id: 'google', label: { en: 'Google', uk: 'Google', ru: 'Google' } },
  { id: 'facebook', label: { en: 'Facebook', uk: 'Facebook', ru: 'Facebook' } },
]
