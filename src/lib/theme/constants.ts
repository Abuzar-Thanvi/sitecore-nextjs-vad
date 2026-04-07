/* Const definition */
export const BASE_FONT_SIZE = 16;
export const BASE_FONT_SIZE_MOB = 12;
export const MAX_WIDTH = 1440;
export const SPACING_MULTIPLIER = 8;

/* Function */
export const pxToRem = (pixelValue: number): string =>
    `${pixelValue / BASE_FONT_SIZE}rem`;

export const pxToRemMob = (pxVal: number): string =>
    `${pxVal / BASE_FONT_SIZE_MOB}rem`;

export const remToPx = (remValue: string): string => {
    if (typeof remValue !== 'string' || !remValue) return '0px';
    const numericRemValue = Number(remValue.replace('rem', ''));
    const pxValue = numericRemValue * BASE_FONT_SIZE;
    return `${pxValue}px`;
};

export function space(num?: number, suffix?: false): number;
export function space(num: number, suffix: true): string;
export function space(num = 1, suffix = false): number | string {
    return suffix ? `${num * SPACING_MULTIPLIER}px` : num * SPACING_MULTIPLIER;
}

/* Global preset variable items */
export const GUTTERS = {
    none: 0,
    sm: (space(2) as number) / 2,
    lg: (space(3) as number) / 2,
    xl: (space(4) as number) / 2,
};

export type BreakpointKey = 'xs' | 'sm' | 'md' | 'mdUpd' | 'lg' | 'xl' | 'xxl' | 'xxl1920' | 'xxxl';

export const breakpoints: {
    keys: BreakpointKey[];
    values: Record<BreakpointKey, number>;
} = {
    keys: ['xs', 'sm', 'md', 'mdUpd', 'lg', 'xl', 'xxl', 'xxl1920', 'xxxl'],
    values: {
        xs: 0,
        sm: 600,
        md: 768,
        mdUpd: 767,
        lg: 1024,
        xl: 1280,
        xxl: 1440,
        xxl1920: 1920,
        xxxl: 2048,
    },
};

/**
 * Mobile First Design Media Query function
 */

/**
 * Generates a CSS media query string for a minimum width based on the given breakpoint key.
 *
 * @param key - The breakpoint key (e.g., 'sm', 'md', 'lg').
 * @returns The media query string if the key exists, otherwise undefined.
 */
export function customMediaQueryUpdUp(key: BreakpointKey): string | undefined {
    if (key) {
        const getValue = breakpoints.values[key];
        if (getValue) {
            return `@media(min-width: ${getValue}px)`;
        }
    }
}

/**
 * Generates a CSS media query string for a maximum width based on the given breakpoint key.
 *
 * @param key - The breakpoint key (e.g., 'sm', 'md', 'lg').
 * @returns The media query string if the key exists, otherwise undefined.
 */
export function customMediaQueryUpdDown(key: BreakpointKey): string | undefined {
    if (key) {
        const getValue = breakpoints.values[key];
        if (getValue) {
            return `@media(max-width: ${getValue}px)`;
        }
    }
}

export const desktopMedia = `@media (min-width: ${breakpoints.values.lg}px)`;
export const desktopMedia1440 = `@media (min-width: ${breakpoints.values.xxl + 1}px)`;
export const desktopMedia1280 = `@media (min-width: ${breakpoints.values.xl + 1}px)`;
export const tabletLandscapeMedia = `@media (min-width: ${breakpoints.values.lg}px) and (max-width: 1200px)`;
export const mobileMedia = `@media (max-width: ${breakpoints.values.lg - 1}px)`;
export const mobileMedia768 = `@media (min-width: ${breakpoints.values.sm - 1}px)`;

export type EasingKey = 'in' | 'out' | 'inOut';

export const easing = (ease: EasingKey, prop = 'all'): string => {
    const easingArr: Record<EasingKey, string> = {
        in: `${prop} 0.3s cubic-bezier(0.755, 0.050, 0.855, 0.060)`,
        out: `${prop} 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000)`,
        inOut: `${prop} 0.3s cubic-bezier(0.860, 0.000, 0.070, 1.000)`,
    };
    return easingArr[ease];
};

export const arabicLang = 'ar';
export const hebrewLang = 'he';
export const russianLang = 'ru';
export const chineseLang = 'zh';
export const koreanLang = 'ko';
export const englishLang = 'en';

//NOTE - Used for rich text truncation
export const VOID_TAGS = new Set<string>([
    'br',
    'img',
    'hr',
    'input',
    'meta',
    'link',
    'area',
    'base',
    'col',
    'embed',
    'param',
    'source',
    'track',
    'wbr',
]);