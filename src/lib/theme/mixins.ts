export type CustomMixins = (isRtl?: boolean) => {
    right: (unit: string | number) => { left?: string | number; right?: string | number };
    left: (unit: string | number) => { left?: string | number; right?: string | number };
    positionLR: (leftUnit: string | number, rightUnit: string | number) => { left: string | number; right: string | number };
    borderLeft: (unit: string | number) => { borderLeft?: string | number; borderRight?: string | number };
    borderRight: (unit: string | number) => { borderLeft?: string | number; borderRight?: string | number };
    marginRight: (unit: string | number) => { marginLeft?: string | number; marginRight?: string | number };
    marginLeft: (unit: string | number) => { marginLeft?: string | number; marginRight?: string | number };
    marginLR: (left: string | number, right: string | number) => { marginLeft: string | number; marginRight: string | number };
    paddingLeft: (unit: string | number) => { paddingLeft?: string | number; paddingRight?: string | number };
    paddingRight: (unit: string | number) => { paddingLeft?: string | number; paddingRight?: string | number };
    paddingLR: (left: string | number, right: string | number) => { paddingLeft: string | number; paddingRight: string | number };
    direction: () => { direction: 'rtl' | 'ltr' };
    textLeft: () => 'left' | 'right';
    textRight: () => 'left' | 'right';
    flexDirection: () => 'row-reverse' | 'row';
    rotate180: () => string;
    rotate0: () => string;
    translateX: (angle: number) => number;
    White: (opacityWeight?: number) => string;
    AntiqueWhite: (opacityWeight?: number) => string;
    LightOrange: (opacityWeight?: number) => string;
    Black: (opacityWeight?: number) => string;
    Grey: (opacityWeight?: number) => string;
    DisabledGrey: (opacityWeight?: number) => string;
    LightGrey: (opacityWeight?: number) => string;
    AbuDhabiRed: (opacityWeight?: number) => string;
    AbuDhabiOrange: (opacityWeight?: number) => string;
    SeaGreen: (opacityWeight?: number) => string;
    RussianViolet: (opacityWeight?: number) => string;
    milkWhite: (opacityWeight?: number) => string;
    neroBlack: (opacityWeight?: number) => string;
    ADCalendar: (opacityWeight?: number) => string;
    DarkTurquoise: (opacityWeight?: number) => string;
    CategortTagColor: (opacityWeight?: number) => string;
    SolidGrey: (opacityWeight?: number) => string;
    BluishGray: (opacityWeight?: number) => string;
    DarkBlack: (opacityWeight?: number) => string;
    Dark23: (opacityWeight?: number) => string;
    HalfDutchWhite: (opacityWeight?: number) => string;
};

export const mixins: CustomMixins = (isRtl = false) => ({
    right: (unit: string | number) =>
        isRtl ? { left: unit } : { right: unit },

    left: (unit: string | number) =>
        isRtl ? { right: unit } : { left: unit },

    positionLR: (leftUnit: string | number, rightUnit: string | number) =>
        isRtl
            ? { left: rightUnit, right: leftUnit }
            : { left: leftUnit, right: rightUnit },

    borderLeft: (unit: string | number) =>
        isRtl ? { borderRight: unit } : { borderLeft: unit },

    borderRight: (unit: string | number) =>
        isRtl ? { borderLeft: unit } : { borderRight: unit },

    marginRight: (unit: string | number) =>
        isRtl ? { marginLeft: unit } : { marginRight: unit },

    marginLeft: (unit: string | number) =>
        isRtl ? { marginRight: unit } : { marginLeft: unit },

    marginLR: (left: string | number, right: string | number) =>
        isRtl
            ? { marginLeft: right, marginRight: left }
            : { marginLeft: left, marginRight: right },

    paddingLeft: (unit: string | number) =>
        isRtl ? { paddingRight: unit } : { paddingLeft: unit },

    paddingRight: (unit: string | number) =>
        isRtl ? { paddingLeft: unit } : { paddingRight: unit },

    paddingLR: (left: string | number, right: string | number) =>
        isRtl
            ? { paddingLeft: right, paddingRight: left }
            : { paddingLeft: left, paddingRight: right },

    direction: (): { direction: 'rtl' | 'ltr' } =>
        isRtl ? { direction: 'rtl' } : { direction: 'ltr' },

    textLeft: (): 'left' | 'right' => (isRtl ? 'right' : 'left'),
    textRight: (): 'left' | 'right' => (isRtl ? 'left' : 'right'),

    flexDirection: (): 'row-reverse' | 'row' => (isRtl ? 'row-reverse' : 'row'),
    rotate180: (): string => (isRtl ? 'rotate(0)' : 'rotate(180deg)'),
    rotate0: (): string => (isRtl ? 'rotate(180deg)' : 'rotate(0)'),
    translateX: (angle: number): number => (isRtl ? -angle : angle),

    // Style Guide Colors
    // recommended opacity weight is 100, 200 ...to 900
    White: (opacityWeight = 1000): string =>
        `rgba(255,255,255, ${opacityWeight / 1000})`,
    AntiqueWhite: (opacityWeight = 1000): string =>
        `rgb(247, 247, 247, ${opacityWeight / 1000})`,
    LightOrange: (opacityWeight = 1000): string =>
        `rgb(252, 239, 222, ${opacityWeight / 1000})`,
    Black: (opacityWeight = 1000): string =>
        `rgba(0, 0, 0, ${opacityWeight / 1000})`,
    Grey: (opacityWeight = 1000): string =>
        `rgba(86, 90, 92, ${opacityWeight / 1000})`,
    DisabledGrey: (opacityWeight = 1000): string =>
        `rgba(187, 189, 190, ${opacityWeight / 1000})`,
    LightGrey: (opacityWeight = 1000): string =>
        `rgba(102, 102, 102, ${opacityWeight / 1000})`,
    AbuDhabiRed: (opacityWeight = 1000): string =>
        `rgba(194, 0, 47, ${opacityWeight / 1000})`,
    AbuDhabiOrange: (opacityWeight = 1000): string =>
        `rgba(255, 135, 7, ${opacityWeight / 1000})`,
    SeaGreen: (opacityWeight = 1000): string =>
        `rgba(0, 144, 134, ${opacityWeight / 1000})`, // #009086
    RussianViolet: (opacityWeight = 1000): string =>
        `rgba(76, 12, 71, ${opacityWeight / 1000})`, // #4c0c47
    milkWhite: (opacityWeight = 1000): string =>
        `rgba(218, 215, 203, ${opacityWeight / 1000})`,
    neroBlack: (opacityWeight = 1000): string =>
        `rgba(25, 25, 25, ${opacityWeight / 1000})`,
    ADCalendar: (opacityWeight = 1000): string =>
        `rgba(105, 15, 168, ${opacityWeight / 1000})`,
    DarkTurquoise: (opacityWeight = 1000): string =>
        `rgba(0, 96, 95, ${opacityWeight / 1000})`,
    CategortTagColor: (opacityWeight = 1000): string =>
        `rgba(58, 52, 138, ${opacityWeight / 1000})`,
    SolidGrey: (opacityWeight = 1000): string =>
        `rgba(120, 123, 125, ${opacityWeight / 1000})`,
    BluishGray: (opacityWeight = 1000): string =>
        `rgba(227,233,243, ${opacityWeight / 1000})`, // rgb(227,233,243)
    DarkBlack: (opacityWeight = 1000): string =>
        `rgba(38, 38, 38, ${opacityWeight / 1000})`, // rgb(38, 38, 38)
    Dark23: (opacityWeight = 1000): string =>
        `rgba(23, 23, 23, ${opacityWeight / 1000})`, // rgb(23, 23, 23)
    HalfDutchWhite: (opacityWeight = 1000): string =>
        `rgba(252, 239, 222, ${opacityWeight / 1000})`,
});

export type Mixins = ReturnType<typeof mixins>;