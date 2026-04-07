/* 
  This file defines color palette
*/

import { mixins } from 'theme/mixins';

//Base Colors
const AbuDhabiRed = 'rgb(194, 0, 47)'; //#C2002F
const AbuDhabiOrange = 'rgb(255 135 7)'; //#FF8707
const ADCalendar = 'rgb(105, 15, 168)'; //#690FA8
const DarkTurquoise = 'rgb(0, 96, 95)'; //#00605F
// Tabs and Content card bar
const SeaGreen = '#009086'; // rgb(0, 144, 134)

//Extended Colors
const GlitteringSand = '#b4a7a2';
const DesrtSunset = 'rgb(162, 80, 34)'; //#A25022
const SandDune = 'rgb(202, 155, 74)'; //#CA9B4A
const SandDuneLight = 'rgb(218,187,153)'; //#DABB99
const Sunrise = 'rgb(239, 189, 71)'; //#EFBD47
const Highlight = 'rgb(255, 233, 0)'; //#FFE900
const Sandstone = 'rgb(202, 192, 182)'; //#CAC0B6
const DesertDusk = 'rgb(233, 211, 215)'; //#E9D3D7
const DateBrown = 'rgb(82, 45, 36)'; //#522D24
const PalmForest = 'rgb(62, 69, 25)'; //#3E4519
const OasisGreen = 'rgb(135, 150, 55)'; //#879637
const SpringGreen = 'rgb(199, 210, 138)'; //#C7D28A
const WovenPalm = 'rgb(214, 212, 174)'; //#D6D4AE
const SeaPort = 'rgb(0, 65, 101)'; //#004165
const CategortTagColor = 'rgb(58, 52, 138)'; //#3A348A
const Mangroves = 'rgb(21, 101, 112)'; //#156570
const MarineBlue = 'rgb(0, 102, 161)'; //#0066A1
const ArabianGulf = 'rgb(84, 130, 171)'; //#5482AB
const TurquoiseShore = 'rgb(183, 206, 196)'; //#B7CEC4
const ContemporaryChrome = 'rgb(94, 106, 113)'; //#5E6A71
const IlluminatedSkyline = 'rgb(134, 131, 164)'; //#8683A4
const EnergyBlue = 'rgb(125, 154, 170)'; //#7D9AAA
const CityscapeGrey = 'rgb(173, 175, 175)'; //#ADAFAF
const QuiteMarble = 'rgb(218, 215, 203)'; //#DAD7CB
const MysticGrey = 'rgb(221, 223, 222)'; //#DDDFDE
const LightGrey = 'rgb(170 170 170)'; //#AAAAAA
const Grey1 = 'rgb(120, 123, 125)'; // #787B7D
const defaultBgGrey = 'rgb(223, 229, 232)'; //#DFE5E8
const SeashellWhite = 'rgb(250 249 245)'; //#FAF9F5
const RedRibbon = 'rgb(231, 15, 67)'; // #E70F43
const TripAdvisorThemeColor = 'rgb(0, 170, 108)'; // #00AA6C
const UnselectedColor = 'rgb(112, 108, 108)'; // #706C6C
const SlateGray = 'rgb(129, 135, 137)'; // #818789
const datePickerTextColor = 'rgb(130, 136, 148)'; // rgb(130, 136, 148)
const lightBGBlue = '#C9DBE4'; //rgb(201,219,228)

//Other Colors
const RaisinBlack = 'rgba(38,38,38,1)'; // this is used for gradient creation in header
const MostlyBlack = 'rgba(2, 2, 2, 0)'; // this is used for gradient creation in header
const LightGray = '#fcfcfc'; // This is used for bg color privacy policy component
const ErrorRed = 'rgb(255, 12, 12)';
const black3 = '#f7f7f7';

const DisabledGrey = '#dddede';
const ActiveGray = '#97A1A7';
const BGGray = '#EEEFEF';
const DKGray = '#444444';
const BlackFadded = 'rgba(0, 0, 0, 0.8)';
const Black4 = 'rgb(51, 51, 51)'; // #333333
const White = 'rgb(255, 255, 255)'; // #FFFFFF
const NearWhite = 'rgb(246, 246, 246)';
const NearWhite2 = 'rgb(247, 247, 247)';
const OverlayGray = 'rgb(85 85 85)';
const LightSilver = 'rgb(216, 216, 216)';
const PeacockBlue = '#003451'; // rgb(0,52,81)

// Brand 2022 Colors
const Axolotl = '#577360';
const Pompadour = '#4C0C47';
const HalfDutchWhite = '#FCEFDE';

type AlphaFn = (alpha?: number) => string;

const Amarnath: AlphaFn = (alpha = 1000) => `rgba(239, 81, 87, ${alpha / 1000})`; // rgb(239, 81, 87)
const BGGray179: AlphaFn = (alpha = 1000) => `rgba(179, 179, 179, ${alpha / 1000})`; // rgb(179, 179, 179)
const DarkBlack: AlphaFn = (alpha = 1000) => `rgba(15, 28, 24, ${alpha / 1000})`; // rgb(15, 28, 24)
const LightGrayCCC: AlphaFn = (alpha = 1000) => `rgba(211,211,211, ${alpha / 1000})`; // rgb(211,211,211)
const GrayAAA: AlphaFn = (alpha = 1000) => `rgba(170, 170, 170, ${alpha / 1000})`; // rgb(170, 170, 170)
const DisabledFavIcon: AlphaFn = (alpha = 1000) => `rgba(32, 29, 29, ${alpha / 1000})`; // rgb(32, 29, 29)
const MediumGray: AlphaFn = (alpha = 1000) => `rgbaa(151, 151, 151, ${alpha / 1000})`; // rgb(151, 151, 151)
const MediumGray2: AlphaFn = (alpha = 1000) => `rgba(217,217,217, ${alpha / 1000})`; // rgb(217,217,217)
const TealBlue: AlphaFn = (alpha = 1000) => `rgba(0,65,101, ${alpha / 1000})`; // rgb(0,65,101)
const Black: AlphaFn = (alpha = 1000) => mixins().Black(alpha); // rgb(0,65,101)

/** 
 * Mobile First Design Color Palette
 */
const SandstoneUpd: AlphaFn = (alpha = 1000) => `rgba(252, 239, 222, ${alpha / 1000})`; // rgb(252, 239, 222) - #FCEFDE
const Dune: AlphaFn = (alpha = 1000) => `rgba(218, 187, 153, ${alpha / 1000})`; // rgb(218, 187, 153) - #DABB99
const SunriseUpd: AlphaFn = (alpha = 1000) => `rgba(255, 233, 0, ${alpha / 1000})`; // rgb(255, 233, 0) - #FFE900
const Sunset: AlphaFn = (alpha = 1000) => `rgba(255, 135, 7, ${alpha / 1000})`; // rgb(255, 135, 7) - #FF8707
const Haze: AlphaFn = (alpha = 1000) => `rgba(255, 202, 187, ${alpha / 1000})`; // rgb(255, 202, 187) - #FFCAB7
const Coral: AlphaFn = (alpha = 1000) => `rgba(255, 112, 97, ${alpha / 1000})`; // rgb(255, 112, 97) - #FF7061
const Safari: AlphaFn = (alpha = 1000) => `rgba(186, 42, 0, ${alpha / 1000})`; // rgb(186, 42, 0) - #BA2A00
const Pomengrate: AlphaFn = (alpha = 1000) => `rgba(255, 32, 76, ${alpha / 1000})`; // rgb(255, 32, 76) - #FF204C
const Flamingo: AlphaFn = (alpha = 1000) => `rgba(255, 195, 222, ${alpha / 1000})`; // rgb(255, 195, 222) - #FFC3DE
const Royal: AlphaFn = (alpha = 1000) => `rgba(76, 12, 71, ${alpha / 1000})`; // rgb(76, 12, 71) - #4C0C47
const Iris: AlphaFn = (alpha = 1000) => `rgba(159, 40, 193, ${alpha / 1000})`; // rgb(159, 40, 193) - #9F28C1
const Dusk: AlphaFn = (alpha = 1000) => `rgba(182, 150, 254, ${alpha / 1000})`; // rgb(182, 150, 254) - #B696FE
const Midnight: AlphaFn = (alpha = 1000) => `rgba(58, 52, 138, ${alpha / 1000})`; // rgb(58, 52, 138) - #3A348A
const Seaport: AlphaFn = (alpha = 1000) => `rgba(0, 52, 81, ${alpha / 1000})`; // rgb(0, 52, 81) - #003451
const Pacific: AlphaFn = (alpha = 1000) => `rgba(0, 90, 255, ${alpha / 1000})`; // rgb(0, 90, 255) - #005AFF
const Sky: AlphaFn = (alpha = 1000) => `rgba(201, 219, 228, ${alpha / 1000})`; // rgb(201, 219, 228) - #C9DBE4
const Sea: AlphaFn = (alpha = 1000) => `rgba(0, 216, 204, ${alpha / 1000})`; // rgb(0, 216, 204) - #00D8CC
const Mangrove: AlphaFn = (alpha = 1000) => `rgba(0, 144, 133, ${alpha / 1000})`; // rgb(0, 144, 133) - #009085
const Palm: AlphaFn = (alpha = 1000) => `rgba(0, 96, 95, ${alpha / 1000})`; // rgb(0, 96, 95) - #00605F
const Olive: AlphaFn = (alpha = 1000) => `rgba(87, 115, 96, ${alpha / 1000})`; // rgb(87, 115, 96) - #577360
const Grey1Upd: AlphaFn = (alpha = 1000) => `rgba(86, 90, 92, ${alpha / 1000})`; // rgb(86, 90, 92) - #565A5C
const Grey2Upd: AlphaFn = (alpha = 1000) => `rgba(137, 140, 141, ${alpha / 1000})`; // rgb(137, 140, 141) - #898C8D
const Grey3: AlphaFn = (alpha = 1000) => `rgba(221, 221, 221, ${alpha / 1000})`; // rgb(221, 221, 221) - #DDDDDD
const Grey4: AlphaFn = (alpha = 1000) => `rgba(236, 236, 236, ${alpha / 1000})`; // rgb(236, 236, 236) - #ECECEC
const PalmPressed: AlphaFn = (alpha = 1000) => `rgba(0, 71, 70, ${alpha / 1000})`; // rgb(0, 71, 70) - #004746
const SunsetEnabled: AlphaFn = (alpha = 1000) => `rgba(229, 109, 19, ${alpha / 1000})`; // rgb(229, 109, 19) - #E56D13
const SunsetPressed: AlphaFn = (alpha = 1000) => `rgba(189, 92, 17, ${alpha / 1000})`; // rgb(189, 92, 17) - #BD5C11
const SeaPortPressed: AlphaFn = (alpha = 1000) => `rgba(0, 33, 52, ${alpha / 1000})`; // rgb(0, 33, 52) - #002134
const SurfaceSunken: AlphaFn = (alpha = 1000) => `rgba(245, 245, 245, ${alpha / 1000})`; // rgb(245, 245, 245) - #F5F5F5
const feedbackPositive: AlphaFn = (alpha = 1000) => `rgba(0, 112, 24, ${alpha / 1000})`; // rgb(0, 112, 24) - #007018
const feedbackAlert: AlphaFn = (alpha = 1000) => `rgba(245, 194, 0, ${alpha / 1000})`; // rgb(245, 194, 0) - #F5C200
const feedbackNegative: AlphaFn = (alpha = 1000) => `rgba(194, 6, 24, ${alpha / 1000})`; // rgb(194, 6, 24) - #C20618
const WhiteUpd: AlphaFn = (alpha = 1000) => `rgba(255, 255, 255, ${alpha / 1000})`; // rgb(255, 255, 255) - #EEEEEE
const borderLight: AlphaFn = (alpha = 1000) => `rgba(233, 233, 233, ${alpha / 1000})`; // rgb(233, 233, 233) - #E9E9E9

const shadowsRgbaUpd = 'rgba(41, 38, 47, 0.20)';

// MFD: Dark Additionals
const feedbackDarkPositive: AlphaFn = (alpha = 1000) => `rgba(58, 170, 82, ${alpha / 1000})`; // rgb(58, 170, 82)
const feedbackDarkNegative: AlphaFn = (alpha = 1000) => `rgba(255, 73, 91, ${alpha / 1000})`; // rgb(255, 73, 91)

type EllipsisLine = number | 'none' | 'nan';

interface EllipsisStyle {
    '-webkit-line-clamp': string | number;
    'line-clamp': string | number;
    '-webkit-box-orient': string;
    display: string;
    overflow: string;
}

const ellipsis = (line: EllipsisLine = 2): EllipsisStyle => {
    if (line === 'none' || line === 'nan') {
        return {
            '-webkit-line-clamp': 'unset',
            'line-clamp': 'unset',
            '-webkit-box-orient': 'unset',
            display: 'unset',
            overflow: 'unset',
        };
    }
    return {
        '-webkit-box-orient': 'vertical',
        display: '-webkit-box',
        '-webkit-line-clamp': line,
        'line-clamp': line,
        overflow: 'hidden',
    };
};

export const common = {
    // MUI CommonColors base (required for palette compatibility)
    black: '#000000',
    white: '#ffffff',
    ellipsis,
    raisinBlack: RaisinBlack,
    mostlyBlack: MostlyBlack,
    BlackFadded,
    Black4,
    White,
    AbuDhabiRed,
    AbuDhabiOrange,
    ADCalendar,
    DarkTurquoise,
    GlitteringSand,
    SeaPort,
    CategortTagColor,
    SandDune,
    DesrtSunset,
    Sunrise,
    Highlight,
    Sandstone,
    DesertDusk,
    DateBrown,
    PalmForest,
    OasisGreen,
    SpringGreen,
    WovenPalm,
    Mangroves,
    MarineBlue,
    ArabianGulf,
    TurquoiseShore,
    ContemporaryChrome,
    IlluminatedSkyline,
    EnergyBlue,
    CityscapeGrey,
    QuiteMarble,
    MysticGrey,
    LightGrey,
    Grey1,
    defaultBgGrey,
    SeashellWhite,
    RedRibbon,
    TripAdvisorThemeColor,
    UnselectedColor,
    SlateGray,
    ActiveGray,
    BGGray,
    DKGray,
    OverlayGray,
    LightSilver,
    NearWhite,
    NearWhite2,
    SeaGreen,
    DisabledGrey,
    Amarnath,
    DarkBlack,
    LightGrayCCC,
    GrayAAA,
    DisabledFavIcon,
    MediumGray2,
    TealBlue,
    Black,
    Axolotl,
    Pompadour,
    HalfDutchWhite,
    SandstoneUpd,
    Dune,
    SunriseUpd,
    Sunset,
    Haze,
    Coral,
    Safari,
    Pomengrate,
    Flamingo,
    Royal,
    Iris,
    Dusk,
    Midnight,
    Seaport,
    Pacific,
    Sky,
    Sea,
    Mangrove,
    Palm,
    Olive,
    Grey1Upd,
    Grey2Upd,
    Grey3,
    Grey4,
    PalmPressed,
    SunsetEnabled,
    SunsetPressed,
    SeaPortPressed,
    SurfaceSunken,
    feedbackPositive,
    feedbackAlert,
    feedbackNegative,
    feedbackDarkPositive,
    feedbackDarkNegative,
    shadowsRgbaUpd,
    WhiteUpd,
    borderLight,
};

export const background = {
    default: black3,
    transparent: 'transparent',
    yellow10: 'rgb(253, 248, 236)',
    seaport10: '#f0eeee',
    lightGray: LightGray,
    SandDuneLight,
    BGGray179,
    InfoBG: lightBGBlue,
};

export const border = {
    divider: mixins().Grey(100),
    error: ErrorRed,
    weatherTableBorder: MediumGray,
    mapCategory: PeacockBlue,
};

export const text = {
    primary: mixins().Black(),
    secondary: mixins().AbuDhabiOrange(),
    tertiary: 'rgb(112, 108, 108)',
    tertiary1: 'rgb(120, 123, 125)',
    disabled: mixins().Black(200),
    defaultText: mixins().Black(400),
    tabDefaultText: mixins().Black(500),
    error: ErrorRed,
    datePicker: datePickerTextColor,
    sectionHeading: PeacockBlue,
};

export const action = {
    hover: mixins().Black(40),
    hoverOpacity: 0.5,
    disabled: mixins().Black(200),
    disabledBackground: black3,
    disabledOpacity: 0.3,
};

export const categoryTagaction = {
    hover: mixins().Black(40),
    hoverOpacity: '0.5',
    disabled: mixins().Black(200),
    disabledBackground: 'transparent',
    disabledOpacity: '0.3',
};

export const secondary = {
    main: mixins().White(),
    contrastText: mixins().Black(),
};

export const primary = {
    main: mixins().Black(),
    contrastText: mixins().White(),
};

// Color Palette for Categories in Map
// Color is mapped to the DisplayName value of Category
export const categories: Record<string, string> = {
    Activities: '#879637',
    Hotels: '#7D9AAA',
    Events: '#690FA8',
    Restaurants: '#8683A4',
    Attractions: '#690FA8',
};

export const palette = {
    primary,
    secondary,
    text,
    common,
    action,
    categoryTagaction,
    background,
    border,
    categories,
};