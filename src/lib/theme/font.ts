// typography.ts
import { pxToRem } from 'theme/constants';

const baseFont = ' dirham-symbol-font, Arial, sans-serif';

export interface FontFamily {
    primaryLight: string;
    primaryRegular: string;
    primaryBold: string;
    primaryBlack: string;
    primaryMedium?: string;
    secondaryRegular?: string;
    secondaryBold?: string;
    secondarySemiBold?: string;
    secondaryBlack?: string;
}

export const fontFamilyEN: FontFamily = {
    primaryLight: ['AbuDhabiBasis-Light', baseFont].join(','),
    primaryRegular: ['AbuDhabiBasis-Regular', baseFont].join(','),
    primaryMedium: ['AbuDhabiBasis-Medium', baseFont].join(','),
    primaryBold: ['AbuDhabiBasis-Bold', baseFont].join(','),
    primaryBlack: ['AbuDhabiBasis-Bold', baseFont].join(','),
    secondaryRegular: ['AbuDhabiBasis-Regular', baseFont].join(','),
    secondaryBold: ['AbuDhabiBasis-Bold', baseFont].join(','),
};

export const fontFamilyAR: FontFamily = {
    primaryLight: ['AbuDhabiBasis-Light', baseFont].join(','),
    primaryRegular: ['AbuDhabiBasis-Regular', baseFont].join(','),
    primaryBold: ['AbuDhabiBasis-Medium', baseFont].join(','),
    primaryBlack: ['AbuDhabiBasis-Bold', baseFont].join(','),
};

export const fontFamilyHE: FontFamily = {
    primaryLight: ['NotoSansSc-Light', baseFont].join(','),
    primaryRegular: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBold: ['NotoSansSc-Bold', baseFont].join(','),
    primaryMedium: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBlack: ['NotoSansSc-Black', baseFont].join(','),
};

export const fontFamilyRU: FontFamily = {
    primaryLight: ['NotoSansSc-Light', baseFont].join(','),
    primaryRegular: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBold: ['NotoSansSc-Bold', baseFont].join(','),
    primaryMedium: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBlack: ['NotoSansSc-Black', baseFont].join(','),
};

export const fontFamilyZH: FontFamily = {
    primaryLight: ['NotoSansSc-Light', baseFont].join(','),
    primaryRegular: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBold: ['NotoSansSc-Bold', baseFont].join(','),
    primaryMedium: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBlack: ['NotoSansSc-Black', baseFont].join(','),
    secondaryRegular: ['NotoSerifSc-Regular', baseFont].join(','),
    secondarySemiBold: ['NotoSerifSc-SemiBold', baseFont].join(','),
    secondaryBold: ['NotoSerifSc-Bold', baseFont].join(','),
    secondaryBlack: ['NotoSerifSc-Black', baseFont].join(','),
};

export const fontFamilyKO: FontFamily = {
    primaryLight: ['NotoSansSc-Light', baseFont].join(','),
    primaryRegular: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBold: ['NotoSansSc-Bold', baseFont].join(','),
    primaryMedium: ['NotoSansSc-Regular', baseFont].join(','),
    primaryBlack: ['NotoSansSc-Black', baseFont].join(','),
    secondaryRegular: ['NotoSerifSc-Regular', baseFont].join(','),
    secondarySemiBold: ['NotoSerifSc-SemiBold', baseFont].join(','),
    secondaryBold: ['NotoSerifSc-Bold', baseFont].join(','),
    secondaryBlack: ['NotoSerifSc-Black', baseFont].join(','),
};

export const fontStyles: Record<'normal' | 'italic', string> = {
    normal: 'normal',
    italic: 'italic',
};

export const fontSize = {
    s14px: '14px',
    s15px: '15px',
    s16px: '16px',
    s24px: '24px',
    s0Rem: pxToRem(0),
    s9point12Rem: pxToRem(9.12),
    s10point4Rem: pxToRem(10.4),   // 0.65rem
    s11point2Rem: pxToRem(11.2),   // 0.7rem
    s12point8Rem: pxToRem(12.8),   // 0.8rem
    s12Rem: pxToRem(12),
    s13Rem: pxToRem(13),
    s14Rem: pxToRem(14),
    s16Rem: pxToRem(16),            // 1rem
    s18Rem: pxToRem(18),
    s19Rem: pxToRem(19),
    s20Rem: pxToRem(20),
    s21Rem: pxToRem(21),
    s22Rem: pxToRem(22),
    s22point4Rem: pxToRem(22.4),
    s23Rem: pxToRem(23),            // 1.5rem
    s24Rem: pxToRem(24),            // 1.5rem
    s25Rem: pxToRem(25),
    s28Rem: pxToRem(28),
    s30Rem: pxToRem(30),
    s32Rem: pxToRem(32),            // 2rem
    s33point6Rem: pxToRem(33.6),
    s35Rem: pxToRem(35),
    s36Rem: pxToRem(36),
    s38Rem: pxToRem(38),
    s40Rem: pxToRem(40),
    s43Rem: pxToRem(43),
    s44Rem: pxToRem(44),
    s45Rem: pxToRem(45),
    s46Rem: pxToRem(46),
    s48Rem: pxToRem(48),            // 3rem
    s49Rem: pxToRem(49),
    s52Rem: pxToRem(52),            // 3.5rem
    s55Rem: pxToRem(55),
    s56Rem: pxToRem(56),
    s63Rem: pxToRem(63),
    s64Rem: pxToRem(64),
    s67Rem: pxToRem(67),
    s72Rem: pxToRem(72),
    s76Rem: pxToRem(76),
    s80Rem: pxToRem(80),
    s81Rem: pxToRem(81),
    s86Rem: pxToRem(86),
    s89Rem: pxToRem(89),
    s92Rem: pxToRem(92),
    s96Rem: pxToRem(96),
    s120Rem: pxToRem(120),
    s140Rem: pxToRem(140),
    s160Rem: pxToRem(160),
    s190Rem: pxToRem(190),
};

export type FontSize = typeof fontSize;

export const ArFontSize: FontSize & Record<string, string> = {
    ...fontSize,
    s19Rem: pxToRem(19),
    s26Rem: pxToRem(26),
    s27Rem: pxToRem(27),
    s30Rem: pxToRem(30),
    s42Rem: pxToRem(42),
    s45Rem: pxToRem(45),
    s54Rem: pxToRem(54),
    s60Rem: pxToRem(60),
    s118Rem: pxToRem(118),
    s142Rem: pxToRem(142),
};