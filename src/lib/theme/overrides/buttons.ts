import { desktopMedia, pxToRem, mobileMedia, pxToRemMob, mobileMedia768 } from '../constants';
import shadows from 'theme/shadows';
import { mixins } from 'theme/mixins';
import { palette } from 'theme/palette';
import { getVariant } from 'theme/utils';
import { borderRadius } from 'theme/borderRadius';

type ButtonOverrides = Record<string, any>;

const buttons = (isRtl: boolean, selectedLang: string): ButtonOverrides => {
  const variants = getVariant(selectedLang);

  return (selectedLang === "en" || selectedLang === "ar")
    ? {
      MuiButton: {
        root: {
          boxShadow: shadows[0],
          padding: '0',
          borderRadius: 0,
          textAlign: 'left',
          color: 'inherit',
          textTransform: 'initial',
          ...variants.body1Bold,
          '&.btnWithBorder': {
            paddingTop: `var(--mfd-spacing-s)`,
            borderTop: '0',
            [desktopMedia]: {
              borderTop: `${pxToRem(1)} solid rgba(0, 0, 0, 0.2)`,
            },
          },
          '&.Mui-focusVisible': {
            outline: `${pxToRem(2)} solid ${palette.common.Seaport()}`,
            [mobileMedia768]: {
              outline: `${pxToRemMob(2)} solid ${palette.common.Seaport()}`,
            },
          },
          '&:hover': {
            backgroundColor: palette.background.transparent,
          },
        },
        contained: {
          borderRadius: pxToRem(28),
          padding: 'var(--mfd-spacing-xs) var(--mfd-spacing-m)',
          [mobileMedia768]: {
            borderRadius: pxToRemMob(28),
          },
          '& [class^="MuiButton-label"]': {
            color: mixins(isRtl).White(),
          },
          '&[class^="Mui-disabled"]': {
            backgroundColor: palette.action.disabledBackground,
            color: mixins(isRtl).White(),
          },
        },
        containedSizeSmall: {
          padding: `var(--mfd-spacing-xxs)  var(--mfd-spacing-m)`,
        },
        containedSizeLarge: {
          padding: `var(--mfd-spacing-xxs)  var(--mfd-spacing-m)`,
        },
        text: {
          padding: 0,
        },
        textSizeSmall: {
          padding: 0,
        },
        textPrimary: {
          color: mixins(isRtl).Black(),
          backgroundColor: palette.background.transparent,
          '&:hover': {
            backgroundColor: palette.background.transparent,
          },
          [mobileMedia]: {
            fontSize: pxToRemMob(16),
            lineHeight: pxToRemMob(24),
            '& [class^="MuiButton-iconSizeMedium"] > *:first-child': {
              fontSize: pxToRemMob(20),
              '& [class^="MuiSvgIcon-root"]': {
                fontSize: pxToRemMob(20),
              },
            },
            '& [class^="MuiButton-endIcon"]': {
              ...mixins(isRtl).marginLeft(`var(--mfd-spacing-s)`),
            },
          },
          '& [class^="MuiButton-endIcon"]': {
            color: mixins(isRtl).White(),
            backgroundColor: mixins(isRtl).AbuDhabiOrange(),
            borderRadius: '50%',
            padding: `var(--mfd-spacing-xxs)`,
            [desktopMedia]: {
              padding: `var(--mfd-spacing-xs)`,
            },
          },
          '&[class^="MuiButton-sizeSmall"]': {
            '& [class^="MuiButton-endIcon"]': {
              padding: pxToRem(10),
              [mobileMedia768]: {
                padding: pxToRemMob(10),
              }
            },
          },
          '&[class^="Mui-disabled"]': {
            '& [class^="MuiButton-endIcon"]': {
              backgroundColor: palette.action.disabledBackground,
            },
          },
        },
        textSecondary: {
          backgroundColor: palette.background.transparent,
          '& [class^="MuiButton-label"]': {
            color: mixins(isRtl).AbuDhabiOrange(),
          },
          '&[class^="Mui-disabled"]': {
            '& [class^="MuiButton-startIcon"]': {
              color: palette.action.disabled,
            },
          },
          '&:hover': {
            '& [class^="MuiButton-startIcon"]': {
              color: mixins(isRtl).White(),
              backgroundColor: mixins(isRtl).AbuDhabiOrange(),
            },
          },
        },
        sizeSmall: {
          ...variants.body2Bold,
        },
      },

      MuiButtonBase: {
        root: {
          '&.Mui-focusVisible': {
            outline: `2px solid ${palette.common.SeaPort}`,
          },
        },
      },
    }

    : {
      MuiButton: {
        root: {
          boxShadow: shadows[0],
          padding: '0',
          borderRadius: borderRadius.b0,
          textAlign: 'left',
          color: 'inherit',
          textTransform: 'initial',
          ...variants.body1Bold,
        },
      },

      MuiButtonBase: {
        root: {
          '&.Mui-focusVisible': {
            outline: `2px solid ${palette.common.SeaPort}`,
          },
        },
      },
    };
};

export default buttons;