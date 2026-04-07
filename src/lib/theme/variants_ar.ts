import { fontFamilyEN as fontFamily, ArFontSize } from './font';
import { desktopMedia, desktopMedia1280, desktopMedia1440, mobileMedia, mobileMedia768, pxToRem, remToPx } from './constants';
import { CSSProperties } from 'react';

type ResponsiveStyle = CSSProperties & {
  [key: string]: CSSProperties | string | number;
};

type VariantItems = Record<string, ResponsiveStyle>;

export const variantItemsAR: VariantItems = {
  h1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s42Rem,
    lineHeight: '100%',
    letterSpacing: '0',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [desktopMedia]: {
      fontSize: ArFontSize.s118Rem,
      lineHeight: '100%',
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s42Rem),
    }
  },
  h2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s32Rem,
    lineHeight: ArFontSize.s44Rem,
    letterSpacing: '0',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [desktopMedia]: {
      fontSize: ArFontSize.s72Rem,
      lineHeight: ArFontSize.s96Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s32Rem),
      lineHeight: remToPx(ArFontSize.s44Rem),
    }
  },
  h3: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s24Rem,
    lineHeight: ArFontSize.s32Rem,
    letterSpacing: '0',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [desktopMedia]: {
      fontSize: ArFontSize.s32Rem,
      lineHeight: ArFontSize.s45Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s24Rem),
      lineHeight: remToPx(ArFontSize.s32Rem),
    }
  },
  h4: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s26Rem,
    lineHeight: ArFontSize.s30Rem,
    letterSpacing: '0',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [desktopMedia]: {
      fontSize: ArFontSize.s48Rem,
      lineHeight: ArFontSize.s60Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s26Rem),
      lineHeight: remToPx(ArFontSize.s30Rem),
    }
  },
  h5: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s19Rem,
    lineHeight: ArFontSize.s27Rem,
    letterSpacing: '0',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [desktopMedia]: {
      fontSize: ArFontSize.s32Rem,
      lineHeight: ArFontSize.s40Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s19Rem),
      lineHeight: remToPx(ArFontSize.s27Rem),
    }
  },
  h51: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s24Rem,
    lineHeight: ArFontSize.s32Rem,
    letterSpacing: '0',
    fontWeight: 'normal',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s24Rem),
      lineHeight: remToPx(ArFontSize.s32Rem),
    }
  },
  h5Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontWeight: 'normal',
    fontSize: ArFontSize.s19Rem,
    lineHeight: ArFontSize.s27Rem,
    letterSpacing: '0',
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      paddingBottom: '6px',
    },
    [desktopMedia]: {
      fontSize: ArFontSize.s32Rem,
      lineHeight: ArFontSize.s40Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s19Rem),
      lineHeight: remToPx(ArFontSize.s27Rem),
    }
  },
  h53Bold: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
    fontWeight: 700,
    fontSize: ArFontSize.s24Rem,
    lineHeight: ArFontSize.s32Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s32Rem,
      lineHeight: ArFontSize.s40Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s24Rem),
      lineHeight: remToPx(ArFontSize.s32Rem),
    }
  },
  body1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s22Rem,
      lineHeight: ArFontSize.s30Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body1Bold22: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontWeight: 700,
    letterSpacing: '0',
    fontSize: ArFontSize.s22Rem,
    lineHeight: ArFontSize.s32Rem,
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s22Rem),
      lineHeight: remToPx(ArFontSize.s32Rem),
    }
  },
  body4Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body1Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s22Rem,
      lineHeight: ArFontSize.s30Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body1a: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    fontWeight: 400,
    [desktopMedia]: {
      fontSize: ArFontSize.s22Rem,
      lineHeight: ArFontSize.s32Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body2Light: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body2Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  body3: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s16Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s16Rem),
    }
  },
  body3Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s16Rem,
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s16Rem),
    }
  },
  body5: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  labelLight: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  labelBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  labelBlack: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s14Rem),
      lineHeight: remToPx(ArFontSize.s24Rem),
    }
  },
  labelBlack2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBlack,
    fontSize: ArFontSize.s12Rem,
    lineHeight: ArFontSize.s16Rem,
    letterSpacing: '0.5px',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s12Rem),
      lineHeight: remToPx(ArFontSize.s16Rem),
    }
  },
  labelRegular: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s12Rem,
    lineHeight: ArFontSize.s16Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s12Rem),
      lineHeight: remToPx(ArFontSize.s16Rem),
    }
  },
  subTitle: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s30Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s30Rem),
    }
  },
  subTitleBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s30Rem,
    letterSpacing: '0',
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s16Rem),
      lineHeight: remToPx(ArFontSize.s30Rem),
    }
  },
  cardTitle1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s24Rem,
    lineHeight: ArFontSize.s32Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s32Rem,
      lineHeight: ArFontSize.s45Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s24Rem),
      lineHeight: remToPx(ArFontSize.s32Rem),
    }
  },
  cardTitle2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s19Rem,
    lineHeight: ArFontSize.s27Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s28Rem,
      lineHeight: ArFontSize.s40Rem,
    },
    [mobileMedia]: {
      fontSize: remToPx(ArFontSize.s19Rem),
      lineHeight: remToPx(ArFontSize.s27Rem),
    }
  },
  gutterBottom: {
    marginBottom: pxToRem(24),
  },

  /**
   * Mobile First Design : Updated Styles
   */
  h1Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(3.333333333333333rem, 12px)",
    lineHeight: 1.3,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(3.285rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia]: {
      fontSize: "max(4.5rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1280]: {
      fontSize: "max(4.5rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1440]: {
      fontSize: "max(4.5rem, 12px)",
      lineHeight: 1.2,
    },
  },

  h2Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(2.666666666666667rem, 12px)",
    lineHeight: 1.3,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(2.571rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia]: {
      fontSize: "max(4rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1280]: {
      fontSize: "max(4rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1440]: {
      fontSize: "max(4rem, 12px)",
      lineHeight: 1.3,
    },
  },

  h3Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(2rem, 12px)",
    lineHeight: 1.3,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(2rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia]: {
      fontSize: "max(3.5rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1280]: {
      fontSize: "max(3.5rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1440]: {
      fontSize: "max(3.25rem, 12px)",
      lineHeight: 1.3,
    },
  },

  h4Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(1.833333333333333rem, 12px)",
    lineHeight: 1.6,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(1.785rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia]: {
      fontSize: "max(2.5rem, 12px)",
      lineHeight: 1.4,
    },
    [desktopMedia1280]: {
      fontSize: "max(2.5rem, 12px)",
      lineHeight: 1.4,
    },
    [desktopMedia1440]: {
      fontSize: "max(2.5rem, 12px)",
      lineHeight: 1.4,
    },
  },

  h5Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(1.666666666666667rem, 12px)",
    lineHeight: 1.6,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(1.642rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia]: {
      fontSize: "max(1.714rem, 12px)",
      lineHeight: 1.4,
    },
    [desktopMedia1280]: {
      fontSize: "max(1.75rem, 12px)",
      lineHeight: 1.4,
    },
    [desktopMedia1440]: {
      fontSize: "max(1.75rem, 12px)",
      lineHeight: 1.4,
    },
  },
  h6Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(1.333333333333333rem, 12px)",
    lineHeight: 1.3,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(1.285rem, 12px)",
      lineHeight: 1.4,
    },
    [desktopMedia]: {
      fontSize: "max(1.428rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1280]: {
      fontSize: "max(1.375rem, 12px)",
      lineHeight: 1.3,
    },
    [desktopMedia1440]: {
      fontSize: "max(1.35rem, 12px)",
      lineHeight: 1.3,
    },
  },

  body1Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: "max(1.333333333333333rem , 12px)",
    lineHeight: 1.6,
    letterSpacing: '0',
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(1.5rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia]: {
      fontSize: "max(1.357rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia1280]: {
      fontSize: "max(1.375rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia1440]: {
      fontSize: "max(1.375rem, 12px)",
      lineHeight: 1.6,
    },
  },

  body2Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: "max(1.166666666666667rem, 12px)", 
    lineHeight: 1.6,
    fontWeight: 400,
    letterSpacing: '0',
    [mobileMedia768]: {
      fontSize: "max(1.142rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia]: {
      fontSize: "max(1.142rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia1280]: {
      fontSize: "max(1.125rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia1440]: {
      fontSize: "max(1.1rem, 12px)",
      lineHeight: 1.6,
    },
  },

  body3Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: "max(1rem, 12px)",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    [mobileMedia768]: {
      fontSize: "max(1rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia]: {
      fontSize: "max(1rem, 12px)", 
      lineHeight: 1.6,
    },
    [desktopMedia1280]: {
      fontSize: "max(1rem, 12px)",
      lineHeight: 1.6,
    },
    [desktopMedia1440]: {
      fontSize: "max(1rem, 12px)",
      lineHeight: 1.6,
    },
  },

  cta1Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(1.166666666666667rem, 12px)",
    lineHeight: 1.5,
    letterSpacing: 0,
    fontWeight: 400,
    textTransform: "uppercase",
    [mobileMedia768]: {
      fontSize: "max(1.142rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia]: {
      fontSize: "max(0.857rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia1280]: {
      fontSize: "max(0.875rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia1440]: {
      fontSize: "max(0.875rem, 12px)",
      lineHeight: 1.5,
    },
  },

  cta2Upd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: "max(1rem, 12px)",
    lineHeight: 1.5,
    textTransform: "uppercase",
    fontWeight: 400,
    [mobileMedia768]: {
      fontSize: "max(1rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia]: {
      fontSize: "max(0.857rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia1280]: {
      fontSize: "max(0.75rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia1440]: {
      fontSize: "max(0.75rem, 12px)",
      lineHeight: 1.5,
    },
  },

  labelUpd: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: "max(1rem, 12px)",
    fontWeight: 400,
    lineHeight: 1.5,
    [mobileMedia768]: {
      fontSize: "max(1rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia]: {
      fontSize: "max(0.857rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia1280]: {
      fontSize: "max(0.75rem, 12px)",
      lineHeight: 1.5,
    },
    [desktopMedia1440]: {
      fontSize: "max(0.75rem, 12px)",
      lineHeight: 1.5,
    },
  },

};
