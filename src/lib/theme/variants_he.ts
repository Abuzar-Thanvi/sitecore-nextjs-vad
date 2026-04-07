import { fontFamilyHE as fontFamily, ArFontSize } from './font';
import { desktopMedia, pxToRem } from './constants';
import { CSSProperties } from 'react';

type ResponsiveStyle = CSSProperties & {
  [key: string]: CSSProperties | string | number;
};

type VariantItems = Record<string, ResponsiveStyle>;

export const variantItemsHE: VariantItems = {
  h1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s42Rem,
    lineHeight: '100%',
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s118Rem,
      lineHeight: '100%',
    },
  },
  h2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s32Rem,
    lineHeight: ArFontSize.s44Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s72Rem,
      lineHeight: ArFontSize.s96Rem,
    },
  },
  h3: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s24Rem,
    lineHeight: ArFontSize.s32Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s32Rem,
      lineHeight: ArFontSize.s45Rem,
    },
  },
  h4: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s26Rem,
    lineHeight: ArFontSize.s30Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s48Rem,
      lineHeight: ArFontSize.s60Rem,
    },
  },
  h5: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s19Rem,
    lineHeight: ArFontSize.s27Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s24Rem,
      lineHeight: ArFontSize.s36Rem,
    },
  },
  h51: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s24Rem,
    lineHeight: ArFontSize.s32Rem,
    letterSpacing: '0',
    fontWeight: 'normal',
  },
  h5Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontWeight: 'normal',
    fontSize: ArFontSize.s19Rem,
    lineHeight: ArFontSize.s27Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s24Rem,
      lineHeight: ArFontSize.s36Rem,
    },
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
  },
  body1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
    [desktopMedia]: {
      fontSize: ArFontSize.s22Rem,
      lineHeight: ArFontSize.s30Rem,
    },
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
  },
  body1Bold22: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontWeight: 700,
    letterSpacing: '0',
    fontSize: ArFontSize.s22Rem,
    lineHeight: ArFontSize.s32Rem,
  },
  body2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  body2Light: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  body2Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
  },
  body3: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s16Rem,
    letterSpacing: '0',
  },
  body3Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    letterSpacing: '0',
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s16Rem,
  },
  body5: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s14Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  body4Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  labelLight: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  labelBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  labelBlack: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  labelBlack2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBlack,
    fontSize: ArFontSize.s12Rem,
    lineHeight: ArFontSize.s16Rem,
    letterSpacing: '0.5px',
  },
  labelRegular: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s24Rem,
    letterSpacing: '0',
  },
  subTitle: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s30Rem,
    letterSpacing: '0',
  },
  subTitleBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
    fontSize: ArFontSize.s16Rem,
    lineHeight: ArFontSize.s30Rem,
    letterSpacing: '0',
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
  },
  gutterBottom: {
    marginBottom: pxToRem(24),
  },
};
