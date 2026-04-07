/*
  This will hold all the theming (Material theme Object) info for SiteA
  add updates to theme will reflect across website.
*/

import { createTheme, ThemeOptions } from '@mui/material/styles';
import { palette } from 'theme/palette';
import { borders } from 'theme/borders';
import spacing from 'theme/spacing';
import shadows from 'theme/shadows';
import { shadowsUpd } from 'theme/shadowsUpd';
import { getVariant, getFontFamily } from 'theme/utils';
import overrides from 'theme/overrides';

import { breakpoints, easing, arabicLang, hebrewLang } from 'theme/constants';
import { mixins } from 'theme/mixins';
import shape from 'theme/shape';

/**
 * Extend MUI Theme to support custom properties
 */
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      fontFamily: ReturnType<typeof getFontFamily>;
    };
    shadowsUpd: typeof shadowsUpd;
    borders: typeof borders;
    easing: typeof easing;
    isDirectionRTL: boolean;
    selectedLang: string;
  }

  interface ThemeOptions {
    custom?: {
      fontFamily: ReturnType<typeof getFontFamily>;
    };
    shadowsUpd?: typeof shadowsUpd;
    shape?: typeof shape;
    breakpoints?: typeof breakpoints;
    shadows?: typeof shadows;
    borders?: typeof borders;
    easing?: typeof easing;
    isDirectionRTL?: boolean;
    selectedLang?: string;
    mixins?: ReturnType<typeof mixins>;
  }
}

const theme = (selectedLang: string) => {
  const isRtl = selectedLang === arabicLang || selectedLang === hebrewLang;
  const variants = getVariant(selectedLang);
  const fontFamily = getFontFamily();

  const themeOptions: ThemeOptions = {
    palette: {
      ...palette,
    },

    typography: {
      fontFamily: fontFamily.primaryRegular,
      ...variants,
    },

    custom: {
      fontFamily,
    },

    shadows,
    shadowsUpd,

    breakpoints,
    spacing,
    shape,

    direction: isRtl ? 'rtl' : 'ltr',

    borders,
    easing,
    isDirectionRTL: isRtl,
    selectedLang,

    mixins: {
      ...mixins(isRtl),
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body: {
            color: 'inherit',
            margin: 0,
            backgroundColor: palette.common.White,
            overflowX: 'hidden',
            position: 'relative',
          },
          '.hero-banner-section': {
            width: '100%',
            height: '100vh',
            minHeight: '100vh',
            '& .slick-thumb li': {
              width: '192px',
              height: '118px',
            },
          },
          '.segment-title': {
            position: 'relative',
            marginBottom: 0,
          },
          'a:focus': {
            WebkitTextFillColor: 'inherit',
            outlineColor: palette.common.SeaPort,
          },
          '.img-in-exp-editor': {
            maxWidth: '100%',
          },
          '.preloadImages': {
            width: '1px',
            height: '1px',
            left: 0,
            position: 'absolute',
            visibility: 'hidden',
          },
          '.marginBottom-0': {
            marginBottom: '0 !important',
          },
        },
      },

      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },

      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },

      // merge your custom overrides here
      ...overrides(isRtl, selectedLang),
    },
  };

  return createTheme(themeOptions);
};

export default theme;