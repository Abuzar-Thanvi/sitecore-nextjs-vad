//import { common } from './palette';  #TODO
import { fontFamilyKO as fontFamily, fontSize } from 'theme/font';
import { desktopMedia, desktopMedia1280, desktopMedia1440, mobileMedia768, pxToRem } from 'theme/constants';
import { CSSProperties } from 'react';

type ResponsiveStyle = CSSProperties & {
  [key: string]: CSSProperties | string | number | undefined;
};

type VariantItems = Record<string, ResponsiveStyle>;

export const variantItemsKO: VariantItems = {
  h1: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBlack,
    fontSize: fontSize.s40Rem,
    lineHeight: '100%',
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s120Rem,
      lineHeight: '100%',
    },
  },
  h2: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBlack,
    fontSize: fontSize.s32Rem,
    lineHeight: fontSize.s40Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s72Rem,
      lineHeight: fontSize.s80Rem,
    },
  },
  h3: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBlack,
    fontSize: fontSize.s24Rem,
    lineHeight: fontSize.s32Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s64Rem,
      lineHeight: fontSize.s72Rem,
    },
  },
  h4: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBlack,
    fontSize: fontSize.s22Rem,
    lineHeight: fontSize.s32Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s48Rem,
      lineHeight: fontSize.s56Rem,
    },
  },
  h5: {
    color: 'inherit',
    fontFamily: fontFamily.secondarySemiBold,
    fontSize: fontSize.s20Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s32Rem,
      lineHeight: fontSize.s40Rem,
    },
  },
  h51: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryRegular,
    fontSize: fontSize.s24Rem,
    lineHeight: fontSize.s32Rem,
    letterSpacing: '0',
    fontWeight: 'normal',
  },
  h5Bold: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
    fontWeight: 'normal',
    fontSize: fontSize.s20Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s32Rem,
      lineHeight: fontSize.s40Rem,
    },
  },
  body1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: fontSize.s16Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s24Rem,
      lineHeight: fontSize.s32Rem,
    },
  },
  body1Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: fontSize.s16Rem,
    lineHeight: fontSize.s24Rem,
    [desktopMedia]: {
      fontSize: fontSize.s24Rem,
      lineHeight: fontSize.s32Rem,
    },
  },
  body2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: fontSize.s14Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s16Rem,
      lineHeight: fontSize.s24Rem,
    },
  },
  body2Light: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: fontSize.s14Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s16Rem,
      lineHeight: fontSize.s24Rem,
    },
  },
  body2Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: fontSize.s14Rem,
    lineHeight: fontSize.s24Rem,
    [desktopMedia]: {
      fontSize: fontSize.s16Rem,
      lineHeight: fontSize.s24Rem,
    },
  },
  body3: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s14Rem,
      lineHeight: fontSize.s16Rem,
    },
  },
  body3Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    [desktopMedia]: {
      fontSize: fontSize.s14Rem,
      lineHeight: fontSize.s16Rem,
    },
  },
  body5: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: fontSize.s14Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
  },
  body4Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: fontSize.s16Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
  },
  labelLight: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    letterSpacing: '0',
  },
  labelBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    letterSpacing: '0',
  },
  labelBlack: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBlack,
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    letterSpacing: '0.5',
  },
  labelBlack2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBlack,
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    letterSpacing: '0.5px',
  },
  labelRegular: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: fontSize.s12Rem,
    lineHeight: fontSize.s16Rem,
    letterSpacing: '0',
  },
  subTitle: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: fontSize.s16Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s18Rem,
      lineHeight: fontSize.s24Rem,
    },
  },
  subTitleBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: fontSize.s16Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: fontSize.s18Rem,
      lineHeight: fontSize.s24Rem,
    },
  },
  cardTitle1: {
    color: 'inherit',
    fontFamily: fontFamily.secondarySemiBold,
    fontSize: fontSize.s24Rem,
    lineHeight: fontSize.s32Rem,
    letterSpacing: '0',
  },
  cardTitle2: {
    color: 'inherit',
    fontFamily: fontFamily.secondarySemiBold,
    fontSize: fontSize.s20Rem,
    lineHeight: fontSize.s24Rem,
    letterSpacing: '0',
  },
  gutterBottom: {
    marginBottom: pxToRem(24),
  },

  /**
       * Mobile First Design: Updated Typography
       */
    
      h1Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryBold,
        fontSize: "max(3.333333333333333rem, 12px)",
        lineHeight: 1.2,
        letterSpacing: '0',
        fontWeight: 400,
        [mobileMedia768]: {
          fontSize: "max(3.285rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia]: {
          fontSize: "max(4.5rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia1280]: {
          fontSize: "max(4.5rem, 12px)",
          lineHeight: 1.2,
        },
       [desktopMedia1440]: {
          fontSize: "max(4.5rem, 12px)",
          lineHeight: 1.1,
        },
      },
    
      h2Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryBold,
        fontSize: "max(2.666666666666667rem, 12px)",
        lineHeight: 1.2,
        fontWeight: 400,
        letterSpacing: '0',
        [mobileMedia768]: {
          fontSize: "max(2.571rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia]: {
          fontSize: "max(4rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia1280]: {
          fontSize: "max(4rem, 12px)",
          lineHeight: 1.2,
        },
         [desktopMedia1440]: {
          fontSize: "max(4rem, 12px)",
          lineHeight: 1.2,
        },
      },
    
      h3Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryBold,
        fontSize: "max(2rem, 12px)",
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: '0',
        [mobileMedia768]: {
          fontSize: "max(2rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia]: {
          fontSize: "max(3.5rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia1280]: {
          fontSize: "max(3.25rem, 12px)",
          lineHeight: 1.2,
        },
          [desktopMedia1440]: {
          fontSize: "max(3.25rem, 12px)",
          lineHeight: 1.2,
        },
      },
    
      h4Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryBold,
        fontSize: "max(1.833333333333333rem, 12px)",
        lineHeight: 1.3,
        fontWeight: 400,
        letterSpacing: '0',
        [mobileMedia768]: {
          fontSize: "max(1.785rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia]: {
          fontSize: "max(2.5rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia1280]: {
          fontSize: "max(2.5rem, 12px)",
          lineHeight: 1.2,
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
        lineHeight: 1.1,
        letterSpacing: '0',
        fontWeight: 400,
        [mobileMedia768]: {
          fontSize: "max(1.642rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia]: {
          fontSize: "max(1.714rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia1280]: {
          fontSize: "max(1.75rem, 12px)",
          lineHeight: 1.2,
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
          lineHeight: 1.4,
        },
      },
    
      body1Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryRegular,
        fontSize: "max(1.5rem, 12px)",
        lineHeight: 1.4,
        letterSpacing: '0',
        fontWeight: 400,
        [mobileMedia768]: {
          fontSize: "max(1.5rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia]: {
          fontSize: "max(1.357rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia1280]: {
          fontSize: "max(1.375rem, 12px)",
          lineHeight: 1.4,
        },
          [desktopMedia1440]: {
          fontSize: "max(1.375rem, 12px)",
          lineHeight: 1.4,
        },
      },
    
      body2Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryRegular,
        fontSize: "max(1.166666666666667rem, 12px)",
        lineHeight: 1.4,
        letterSpacing: '0',
            fontWeight: 400,
        [mobileMedia768]: {
          fontSize: "max(1.142rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia]: {
          fontSize: "max(1.142rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia1280]: {
          fontSize: "max(1.125rem, 12px)",
          lineHeight: 1.4,
        },
         [desktopMedia1440]: {
          fontSize: "max(1.1rem, 12px)",
          lineHeight: 1.4,
        },
      },
    
      body3Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryRegular,
        fontWeight: 400,
        fontSize: "max(1rem, 12px)",
        lineHeight: 1.4,
        letterSpacing: '0',
        [mobileMedia768]: {
          fontSize: "max(1rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia]: {
          fontSize: "max(1rem, 12px)", 
          lineHeight: 1.4,
        },
        [desktopMedia1280]: {
          fontSize: "max(1rem, 12px)",
          lineHeight: 1.4,
        },
        [desktopMedia1440]: {
          fontSize: "max(1rem, 12px)",
          lineHeight: 1.4,
        }, 
      },
    
      cta1Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryBold,
        fontSize: "max(1.166666666666667rem, 12px)",
        lineHeight: 1.1,
        letterSpacing: "0.7px",
        fontWeight: 400,
    
        [mobileMedia768]: {
          fontSize: "max(1.142rem, 12px)",
          lineHeight: 1.4,
          letterSpacing: 0,
        },
        [desktopMedia]: {
          fontSize: "max(0.857rem, 12px)",
          lineHeight: 1.4,
          letterSpacing: 0,
        },
        [desktopMedia1280]: {
          fontSize: "max(0.875rem, 12px)",
          lineHeight: 1.2,
          letterSpacing: "0.7px",
        },
      [desktopMedia1440]: {
          fontSize: "max(0.875rem, 12px)",
          lineHeight: 1.3,
          letterSpacing: 0,
        },
      },
    
      cta2Upd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryBold,
        fontSize: "max(1rem, 12px)",
        lineHeight: 1.2,
        letterSpacing: "0.6px",
        fontWeight: 400,
         [mobileMedia768]: {
          fontSize: "max(1rem, 12px)",
          lineHeight: 1.4,
          letterSpacing: 0,
        },
        [desktopMedia]: {
          fontSize: "max(0.857rem, 12px)",
          lineHeight: 1.4,
          letterSpacing: 0,
        },
        [desktopMedia1280]: {
          fontSize: "max(0.75rem, 12px)",
          lineHeight: 1.2,
          letterSpacing: "0.6px",
        },
        [desktopMedia1440]: {
          fontSize: "max(0.75rem, 12px)",
          lineHeight: 1.3,
          letterSpacing: 0,
        },
      },
    
      labelUpd: {
        color: 'inherit',
        fontFamily: fontFamily.primaryRegular,
        fontSize: "max(1rem, 12px)",
        fontWeight: 400,
        lineHeight: 1.4,
        [mobileMedia768]: {
          fontSize: "max(1rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia]: {
          fontSize: "max(0.857rem, 12px)",
          lineHeight: 1.2,
        },
        [desktopMedia1280]: {
          fontSize: "max(0.75rem, 12px)",
          lineHeight: 1.4,
        },
         [desktopMedia1440]: {
          fontSize: "max(0.75rem, 12px)",
          lineHeight: 1.1,
        },
      },
};
