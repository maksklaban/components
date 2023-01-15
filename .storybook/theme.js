module.exports = {
  breakpoints: {
    xxl: 1440,
    xl: 1920,
    lg: 1440,
    md: 1024,
    sm: 768,
    xs: 414,
    xxs: 320,
  },
  gutter: {
    container: {
      side: {
        md: 20,
        base: 10,
        xl: 40,
        lg: 30,
        sm: 15,
        xs: 10,
        xxs: 10,
      },
    },
  },
  grid: {
    xl: {
      columns: {
        count: 16,
        columnWidth: null,
        gapWidth: '40px',
      },
      filtersCols: 3,
      editCols: 5,
      editColsWide: 7,
    },
    lg: {
      columns: {
        count: 16,
        columnWidth: null,
        gapWidth: '30px',
      },
      filtersCols: 3,
      editCols: 5,
      editColsWide: 7,
    },
    md: {
      columns: {
        count: 16,
        columnWidth: null,
        gapWidth: '20px',
      },
      filtersCols: 3,
      editCols: 5,
      editColsWide: 7,
    },
    sm: {
      columns: {
        count: 12,
        columnWidth: null,
        gapWidth: '15px',
      },
      filtersCols: 4,
      editCols: 6,
    },
    xs: {
      columns: {
        count: 4,
        columnWidth: null,
        gapWidth: '10px',
      },
      filtersCols: 4,
      editCols: 4,
    },
    xxs: {
      columns: {
        count: 4,
        columnWidth: null,
        gapWidth: '10px',
      },
      filtersCols: 4,
      editCols: 4,
    },
    base: {
      columns: {
        count: 4,
        columnWidth: null,
        gapWidth: '10px',
      },
      filtersCols: 4,
      editCols: 4,
    },
  },
  color: {
    primary: {
      lightest: '#BBC0EC',
      lighter: '#BDCFE6',
      light: '#4984C5',
      main: '#245EAC',
      dark: '#052374',
      darker: '#021258',
      darkest: '#000535',
    },
    secondary: {
      lightest: 'E6E6E6',
      lighter: '#C0C0C0',
      light: '#A1A1A1',
      main: '#A1A1A1',
      dark: '#818181',
      darker: '#444444',
      darkest: '#434243',
    },
    general: {
      dark: '#101219',
      light: '#FFFFFF',
      gray1: '#ECECEE',
      gray2: '#D9D9DC',
      gray3: '#9FA1A7',
      gray4: '#82858D',
      gray5: '#4E525B',
      gray6: '#3F4350',
      gray7: '#272A35',
    },
    status: {
      success: '#14C91D',
      warning: '#FDB200',
      error: '#F73D00',
      new: '#4984C5',
    },
  },
  font: {
    family: {
      primary: 'Montserrat, Lato, Open Sans, Arial, sans-serif',
      primaryCondensed: 'OpenSans Condensed, Arial, sans-serif',
      secondary: 'Roboto, Arial, sans-serif',
      secondaryCondensed: 'Roboto Condensed, Arial, sans-serif',
    },
    size: {
      h1: {
        value: '34px',
        lineHeight: '39px',
        name: 'font-size-h1',
      },
      h2: {
        value: '28px',
        lineHeight: '37px',
        name: 'font-size-h2',
      },
      h3: {
        value: '20px',
        lineHeight: '25px',
        name: 'font-size-h3',
      },
      h4: {
        value: '16px',
        lineHeight: '23px',
        name: 'font-size-h4',
      },
      caption1: {
        value: '18px',
        lineHeight: '22px',
        name: 'font-size-caption1',
      },
      caption2: {
        value: '14px',
        lineHeight: '18px',
        name: 'font-size-caption2',
      },
      caption3: {
        value: '10px',
        lineHeight: '14px',
        name: 'font-size-caption3',
      },
      body1: {
        value: '16px',
        lineHeight: '24px',
        name: 'font-size-body1',
      },
      body2: {
        value: '14px',
        lineHeight: '21px',
        name: 'font-size-body2',
      },
      button: {
        value: '18px',
        lineHeight: '25px',
        name: 'font-size-button',
      },
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 600,
      black: 700,
    },
  },
  size: {
    border: {
      radius: {
        main: '4px',
        smaller: '3px',
        bigger: '5px',
      },
    },
    height: {
      header: {
        mobile: '76px',
      },
      footer: {
        desktop: '72px',
        mobile: '83px',
      },
    },
  },
  get components() {
    return {
      header: {
        standard: {
          regular: {
            large: {
              color: this.color.general.dark,
              'background-color': this.color.general.light,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'header-standard-regular-large',
            },
            small: {
              color: this.color.general.dark,
              'background-color': this.color.general.light,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'header-standard-regular-small',
            },
          },
        },
      },
      button: {
        standard: {
          primary: {
            large: {
              color: this.color.general.light,
              'background-color': this.color.primary.main,
              'line-height': '20px',
              'font-size': '16px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '3px',
              name: 'button-standard-primary-large',
            },
          },
          secondary: {
            large: {
              color: this.color.general.light,
              'background-color': this.color.secondary.main,
              'line-height': '20px',
              'font-size': '16px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '3px',
              name: 'button-standard-secondary-large',
            },
          },
          bordered: {
            large: {
              color: this.color.primary.main,
              'line-height': '21px',
              'background-color': 'transparent',
              'font-size': '14px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'button-standard-bordered-large',
            },
          },
          disabled: {
            large: {
              color: this.color.general.gray3,
              'background-color': this.color.general.gray2,
              'line-height': '20px',
              'font-size': '16px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '3px',
              name: 'button-standard-disabled-large',
            },
          },
          success: {
            large: {
              color: this.color.general.light,
              'line-height': '21px',
              'background-color': this.color.status.success,
              'font-size': '14px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'button-standard-secondary-large',
            },
          },
        },
      },
      typography: {
        h1: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h1.lineHeight,
              'font-size': this.font.size.h1.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h1-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h1.lineHeight,
              'font-size': this.font.size.h1.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h1-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h3.lineHeight,
              'font-size': this.font.size.h3.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h1-black-small',
            },
          },
        },
        h2: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h2.lineHeight,
              'font-size': this.font.size.h2.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h2-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h2.lineHeight,
              'font-size': this.font.size.h2.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h2-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h2.lineHeight,
              'font-size': this.font.size.h2.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h2-black-small',
            },
          },
        },
        h3: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h3.lineHeight,
              'font-size': this.font.size.h3.value,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h3-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'line-height': this.font.size.h3.lineHeight,
              'font-size': this.font.size.h3.value,
              'background-color': null,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h3-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'line-height': this.font.size.h3.lineHeight,
              'font-size': this.font.size.h3.value,
              'background-color': null,
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h3-black-small',
            },
          },
        },
        h4: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h4.lineHeight,
              'font-size': this.font.size.h4.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h4-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h4.lineHeight,
              'font-size': this.font.size.h4.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h4-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.h4.lineHeight,
              'font-size': this.font.size.h4.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-h4-black-small',
            },
          },
        },
        caption2: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.caption2.lineHeight,
              'font-size': this.font.size.caption2.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption2-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.caption2.lineHeight,
              'font-size': this.font.size.caption2.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption2-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.caption2.lineHeight,
              'font-size': this.font.size.caption2.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption2-black-small',
            },
          },
        },
        caption3: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.caption3.lineHeight,
              'font-size': this.font.size.caption3.value,
              'font-weight': this.font.weight.medium,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption3-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.caption3.lineHeight,
              'font-size': this.font.size.caption3.value,
              'font-weight': this.font.weight.medium,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption3-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.caption3.lineHeight,
              'font-size': this.font.size.caption3.value,
              'font-weight': this.font.weight.medium,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption3-black-small',
            },
          },
        },
        caption1: {
          black: {
            large: {
              color: this.color.general.dark,
              'line-height': this.font.size.caption1.lineHeight,
              'background-color': null,
              'font-size': this.font.size.caption1.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption1-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'line-height': this.font.size.caption1.lineHeight,
              'background-color': null,
              'font-size': this.font.size.caption1.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption1-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'line-height': this.font.size.caption1.lineHeight,
              'background-color': null,
              'font-size': this.font.size.caption1.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-caption1-black-small',
            },
          },
        },
        body1: {
          black: {
            large: {
              color: this.color.general.dark,
              'line-height': this.font.size.body1.lineHeight,
              'font-size': this.font.size.body1.value,
              'background-color': null,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-body1-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.body1.lineHeight,
              'font-size': this.font.size.body1.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-body1-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.body1.lineHeight,
              'font-size': this.font.size.body1.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-body1-black-small',
            },
          },
        },
        body2: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.body2.lineHeight,
              'font-size': this.font.size.body2.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-body2-black-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.body2.lineHeight,
              'font-size': this.font.size.body2.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-body2-black-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': this.font.size.body2.lineHeight,
              'font-size': this.font.size.body2.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'typography-body2-black-small',
            },
          },
        },
      },
      link: {
        standard: {
          main: {
            large: {
              color: null,
              'line-height': '18px',
              'background-color': null,
              'font-size': '12px',
              'font-weight': this.font.weight.medium,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'link-standard-main-large',
            },
          },
          smaller: {
            large: {
              color: null,
              'line-height': '21px',
              'background-color': null,
              'font-size': this.font.size.body2.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'link-standard-smaller-large',
            },
          },
        },
      },
      input: {
        primary: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': this.color.general.light,
              'line-height': '42px',
              'font-size': this.font.size.body2.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-primary-black-large',
            },
            small: {
              color: this.color.general.dark,
              'background-color': this.color.general.gray1,
              'line-height': '25px',
              'font-size': '16px',
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-primary-black-small',
            },
          },
        },
        secondary: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': this.color.general.gray1,
              'line-height': '42px',
              'font-size': this.font.size.body2.value,
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-secondary-black-large',
            },
            small: {
              color: this.color.general.dark,
              'background-color': this.color.general.gray1,
              'line-height': '25px',
              'font-size': '16px',
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-secondary-black-small',
            },
          },
        },
        transparent: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': 'transparent',
              'line-height': '39px',
              'font-size': this.font.size.h1.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-transparent-black-large',
            },
            small: {
              color: this.color.general.dark,
              'background-color': 'transparent',
              'line-height': '25px',
              'font-size': '16px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-transparent-black-small',
            },
          },
          white: {
            large: {
              color: this.color.general.light,
              'background-color': 'transparent',
              'line-height': '39px',
              'font-size': this.font.size.h1.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-transparent-white-large',
            },
            small: {
              color: this.color.general.light,
              'background-color': 'transparent',
              'line-height': '25px',
              'font-size': '16px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-transparent-white-small',
            },
          },
        },
      },
      homeTextPanelText: {
        standard: {
          large: {
            color: null,
            'background-color': null,
            'line-height': this.font.size.h3.value,
            'font-size': this.font.size.h3.value,
            'font-weight': this.font.weight.bold,
            'font-family': this.font.family.primary,
            'border-radius': null,
            name: 'homeTextPanelText-standard-large',
          },
          small: {
            color: null,
            'background-color': null,
            'line-height': this.font.size.h4.value,
            'font-size': this.font.size.h4.value,
            'font-weight': this.font.weight.bold,
            'font-family': this.font.family.primary,
            'border-radius': null,
            name: 'homeTextPanelText-standard-large',
          },
        },
      },
      select: {
        primary: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': this.color.general.light,
              'line-height': '38px',
              'font-size': '14px',
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-primary-black-large',
            },
          },
        },
        secondary: {
          black: {
            large: {
              color: this.color.general.dark,
              'background-color': this.color.general.gray1,
              'line-height': '38px',
              'font-size': '14px',
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': '4px',
              name: 'input-secondary-black-large',
            },
          },
        },
      },
      badge: {
        standard: {
          primary: {
            large: {
              color: this.color.general.light,
              'background-color': this.color.primary.main,
              'line-height': '9px',
              'font-size': '8px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '8px',
              name: 'badge-standard-primary-large',
            },
          },
        },
      },
      intro: {
        standard: {
          maintenance: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'intro-standard-maintenance-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'intro-standard-maintenance-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': '44px',
              'font-size': '36px',
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'intro-standard-maintenance-small',
            },
          },
          home: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'intro-standard-home-large',
            },
            medium: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'intro-standard-home-medium',
            },
            small: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': null,
              name: 'intro-standard-home-small',
            },
          },
        },
      },
      tag: {
        standard: {
          gray: {
            large: {
              color: this.color.general.dark,
              'background-color': this.color.general.gray2,
              'line-height': '14px',
              'font-size': '8px',
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': '3px',
              name: 'tag-standard-gray-large',
            },
          },
          primary: {
            large: {
              color: this.color.general.light,
              'background-color': this.color.primary.main,
              'line-height': '14px',
              'font-size': '8px',
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': '3px',
              name: 'tag-standard-primary-large',
            },
          },
        },
      },
      label: {
        standard: {
          uppercase: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': '10px',
              'font-size': '8px',
              'font-weight': this.font.weight.black,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'label-standard-uppercase-large',
            },
          },
          bigger: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': '14px',
              'font-size': '12px',
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'label-standard-bigger-large',
            },
          },
          smaller: {
            large: {
              color: this.color.general.dark,
              'background-color': null,
              'line-height': '12px',
              'font-size': '9px',
              'font-weight': this.font.weight.regular,
              'font-family': this.font.family.primary,
              'border-radius': null,
              name: 'label-standard-smaller-large',
            },
          },
        },
      },
      popupAlert: {
        standard: {
          default: {
            large: {
              color: this.color.general.light,
              'background-color': this.color.general.dark,
              'line-height': this.font.size.h3.value,
              'font-size': this.font.size.h4.value,
              'font-weight': this.font.weight.bold,
              'font-family': this.font.family.primary,
              'border-radius': '5px',
              name: 'popupAlert-standard-default-large',
            },
          },
        },
      },
      miniLogoWrapper: {
        standard: {
          main: {
            large: {
              color: null,
              'background-color': 'linear-gradient(180deg, #D6DAF5 0%, #FFF5D0 100%)',
              'line-height': null,
              'font-size': null,
              'font-weight': null,
              'font-family': null,
              'border-radius': '50%',
              name: 'miniLogoWrapper-standard-main-large',
            },
          },
        },
      },
    }
  },
  appName: 'crm',
  name: 'crm',
}
