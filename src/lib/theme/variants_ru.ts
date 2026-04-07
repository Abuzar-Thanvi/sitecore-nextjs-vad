//import { common } from './palette';  #TODO
import { fontFamilyRU as fontFamily, fontSize } from 'theme/font';
import { CSSProperties } from 'react';

type ResponsiveStyle = CSSProperties & {
  [key: string]: CSSProperties | string | number | undefined;
};

type VariantItems = Record<string, ResponsiveStyle>;

export const variantItemsRU: VariantItems = {
  h1: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
  },
  h2: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
  },
  h3: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
  },
  h4: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
  },
  h5: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryRegular,
  },
  h51: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryRegular,
  },
  h5Bold: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryBold,
  },
  h52: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryRegular,
  },
  body1: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
  },
  body1Regular: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body1Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
  },
  body1a: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body1Bold22: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body2: {
    lineHeight: fontSize.s24Rem,
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body2Light: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
  },
  body2Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
  },
  body3: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body3Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
  },
  body4: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body5: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  body4Bold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
  },
  labelLight: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
  },
  labelBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
  },
  labelBlack: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBlack,
  },
  labelBlack2: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBlack,
  },
  labelRegular: {
    color: 'inherit',
    fontFamily: fontFamily.primaryRegular,
  },
  subTitle: {
    color: 'inherit',
    fontFamily: fontFamily.primaryLight,
  },
  subTitleBold: {
    color: 'inherit',
    fontFamily: fontFamily.primaryBold,
  },
  cardTitle1: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryRegular,
  },
  cardTitle2: {
    color: 'inherit',
    fontFamily: fontFamily.secondaryRegular,
  },
};
