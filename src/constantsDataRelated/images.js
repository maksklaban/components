export const IMAGEKIT_URL = 'https://ik.imagekit.io/p5gbsckue/goodzyk'

export const IMAGE_PLACEHOLDER_PATH = '/static/placeholder.jpg'

export const IMAGEKIT_PARAMS_CONFIG = {
  crm: {
    thumbnail: {
      h: 160,
      // fo: 'auto',
    },
    thumbWithTextCell: { w: 80, h: 80 },
    icon: {
      texture: { w: 80, h: 80 },
    },
    // goodzyk: { logo: { w: 36 } },
  },
  platform: {
    search: {
      item: { w: 480, fo: 'auto' },
      brandLogo: { h: 90 },
      // banner: {},
    },
    checkout: {
      thumbnail: { h: 120 },
    },
    basket: { thumbnail: { h: 200, w: 200 } },
  },
  components: {
    cardTableItemLogo: {
      h: 66,
    },
    cardTableItemPhoto: {
      h: 100,
    },
    selectOption: { w: 80, h: 80 },
  },
}
