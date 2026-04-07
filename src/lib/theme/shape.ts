import { desktopMedia, pxToRem } from './constants';
import { CSSProperties } from 'react';

type ResponsiveStyle = CSSProperties & {
    [key: string]: CSSProperties | string | number;
};

const shape: {
    componentSpacing: ResponsiveStyle;
    componentSpacingBalance: ResponsiveStyle;
    componentSpacingTopBottom: ResponsiveStyle;
    fullBleedingBox: ResponsiveStyle;
} = {
    componentSpacing: {
        marginBottom: pxToRem(48),
        [desktopMedia]: {
            marginBottom: pxToRem(88),
        },
    },

    componentSpacingBalance: {
        marginBottom: pxToRem(48),
        marginTop: pxToRem(48),
        [desktopMedia]: {
            marginBottom: pxToRem(88),
            marginTop: pxToRem(88),
        },
    },

    componentSpacingTopBottom: {
        paddingBottom: pxToRem(24),
        paddingTop: pxToRem(24),
        paddingLeft: pxToRem(24),
        paddingRight: pxToRem(24),
        marginLeft: 0,
        marginRight: 0,
        [desktopMedia]: {
            paddingBottom: pxToRem(88),
            paddingTop: pxToRem(88),
            paddingLeft: pxToRem(88),
            paddingRight: pxToRem(88),
            marginLeft: 0,
            marginRight: 0,
        },
    },

    fullBleedingBox: {
        left: '50vw',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        position: 'relative',
        right: '50vw',
        width: '100%',
        paddingTop: pxToRem(48),
        paddingBottom: pxToRem(48),
        [desktopMedia]: {
            paddingTop: pxToRem(88),
            paddingBottom: pxToRem(88),
        },
    },
};

export default shape;