import { pxToRem } from 'theme/constants';

type BorderRadiusValue = number | string;

export const borderRadius: Record<string, BorderRadiusValue> = {
    b0: 0,
    b3: 3,
    b4: 4,
    b10: 10,
    b25: 25,
    b28: 28,

    circle: '50%',

    b3px: '3px',
    b8px: '8px',
    b45px: '45px',
    b50px: '50px',
    b53px: '53px',
    b999px: '999px',

    b12px12px0p0px: '12px 12px 0px 0px',
    b15pc: '15%',

    b2Rem: pxToRem(2),
    b3Rem: pxToRem(3),
    b4Rem: pxToRem(4),
    b6Rem: pxToRem(6),
    b16Rem: pxToRem(16),
    b24Rem: pxToRem(24),
    b28Rem: pxToRem(28),
    b45Rem: pxToRem(45),
};