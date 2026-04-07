import { desktopMedia, pxToRem } from '../constants';
import { palette } from '../palette';

type TabsOverrides = Record<string, any>;

const tabs = (): TabsOverrides => {
  return {
    MuiTab: {
      root: {
        marginRight: pxToRem(40),
        marginTop: pxToRem(2),
        marginBottom: pxToRem(2),
        marginLeft: pxToRem(2),
      },
    },

    MuiTabs: {
      vertical: {
        '.FaqAccordion &': {
          flex: '0 0 100%',
          [desktopMedia]: {
            flex: '0 0 33.33%',
          },
        },
        '&$root .Mui-focusVisible': {
          border: `2px solid ${palette.common.SeaPort}`,
        },
      },
    },

    MuiTabPanel: {
      root: {
        '.FaqAccordion &': {
          flex: '0 0 100%',
          [desktopMedia]: {
            flex: '0 0 66.66%',
          },
        },
      },
    },
  };
};

export default tabs;