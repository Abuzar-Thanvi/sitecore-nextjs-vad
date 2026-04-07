'use client';

import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { customMediaQueryUpdDown, customMediaQueryUpdUp, pxToRem, pxToRemMob } from '../../lib/theme/constants';
import { shadowsUpd } from '../../lib/theme/shadowsUpd';
import Typography from './Typography';
const StyledButton = styled(Button)(({ theme }) => {
  return {
    // Default Variant
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: theme.palette.common.Palm(),
    borderRadius: pxToRem(100),
    height: pxToRem(48),
    transition: 'all 0.2s ease-in-out',
    backgroundClip: 'padding-box',
    overflow: 'visible',
    width: '100%',
    [customMediaQueryUpdDown('sm')]: {
      borderRadius: pxToRemMob(100),
      height: pxToRemMob(48),
    },
    '&::before': {
      width: `calc(100% + 6px)`,
      height: `calc(100% + 6px)`,
      content: '""',
      position: 'absolute',
      top: `-3px`,
      ...theme.mixins.left(-3),
      bottom: 0,
      borderRadius: pxToRem(100),
      border: `3px solid ${theme.palette.common.Mangrove(300)}`,
      [customMediaQueryUpdDown('sm')]: {
        borderRadius: pxToRemMob(100),
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: pxToRem(100),
      border: `0.5px solid ${theme.palette.common.WhiteUpd(300)}`,
      margin: '4px',
      [customMediaQueryUpdDown('sm')]: {
        borderRadius: pxToRemMob(100),
      },
      [customMediaQueryUpdUp('xxl1920')]: {
        margin: 'var(--mfd-spacing-xxxs)',
      },
    },

    // MUI v7: label slot removed — target .contentWrapper span we add manually
    '& .contentWrapper': {
      padding: `${pxToRem(17)} ${pxToRem(36)}`,
      color: theme.palette.common.WhiteUpd(),
      transition: 'all 0.1s ease-in-out',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      [customMediaQueryUpdDown('sm')]: {
        padding: `${pxToRemMob(17)} ${pxToRemMob(36)}`,
      },
      '& .buttonText': {
        // Spread full cta2Upd (with responsive fontSize overrides),
        // then force lineHeight with !important (same pattern as TagUpd fix)
        ...theme.typography.cta2Upd,
        textWrap: 'nowrap',
        textTransform: 'uppercase',
        lineHeight: '1 !important',
        ...(theme?.direction === 'ltr' && {
          [customMediaQueryUpdUp('xxl')]: {
            marginTop: `${pxToRem(1)} !important`,
          },
        }),
        // cta1Upd variant for withoutBorder buttons
        '&.cta1': {
          ...theme.typography.cta1Upd,
          lineHeight: '1 !important',
        },
      },
      '& .svgWrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...theme.mixins.marginLeft('var(--mfd-spacing-xxs)'),
        ...theme.mixins.marginRight(0),
        height: pxToRem(12),
        width: pxToRem(12),
        [customMediaQueryUpdDown('lg')]: {
          height: pxToRemMob(12),
          width: pxToRemMob(12),
        },
        '& svg': {
          height: pxToRem(12),
          width: pxToRem(12),
          transition: 'all 0.2s ease-in-out',
          [customMediaQueryUpdDown('lg')]: {
            height: pxToRemMob(12),
            width: pxToRemMob(12),
          },
        },
        '&.startIcon': {
          ...theme.mixins.marginRight(pxToRem(8)),
          ...theme.mixins.marginLeft(0),
          [customMediaQueryUpdDown('sm')]: {
            ...theme.mixins.marginRight(pxToRemMob(8)),
          },
        },
        '&.rotateSvg': {
          '& svg': {
            transform: 'none',
            '[dir="rtl"] &': {
              transform: 'rotate(180deg)',
            }
          },
        },
      },
    },

    '&:not(.loadingButton):hover': {
      backgroundColor: theme.palette.common.Palm(),
      [customMediaQueryUpdUp('md')]: {
        backgroundClip: ' padding-box',
        background: theme.palette.common.Mangrove(),
        '&::after': {
          borderColor: theme.palette.common.WhiteUpd(300),
        },
        '& .contentWrapper': {
          '& .svgWrapper': {
            '& svg': { transform: 'none' },
            '&.animateSvg.startIcon': {
              '& svg': {
                transform: 'translateX(-0.125rem)',
                '[dir="rtl"] &': { transform: 'translateX(0.125rem)' }
              }
            },
            '&.animateSvg.endIcon': {
              '& svg': {
                transform: 'translateX(0.125rem)',
                '[dir="rtl"] &': { transform: 'translateX(-0.125rem)' }
              }
            },
            '&.animateSvg.rotateSvg.startIcon': {
              '& svg': {
                transform: 'translateX(-0.125rem)',
                '[dir="rtl"] &': { transform: 'translateX(0.125rem) rotate(180deg)' }
              }
            },
            '&.animateSvg.rotateSvg.endIcon': {
              '& svg': {
                transform: 'translateX(0.125rem)',
                '[dir="rtl"] &': { transform: 'translateX(-0.125rem) rotate(180deg)' },
              },
            },
          },
        },
      }
    },

    '&:disabled': {
      background: theme.palette.common.Grey3(),
      border: 'none',
      cursor: 'default',
      '&::before': { borderColor: 'transparent' },
      '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
      '& .contentWrapper': {
        color: theme.palette.common.Grey2Upd(),
        padding: `${pxToRem(17)} ${pxToRem(36)}`,
        [customMediaQueryUpdDown('sm')]: {
          padding: `${pxToRemMob(17)} ${pxToRemMob(36)}`,
        },
        '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
      },
    },

    '&:not(.loadingButton):active': {
      background: `${theme.palette.common.PalmPressed()} !important`,
      '&::before': { borderColor: 'transparent' },
      '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
      '& .contentWrapper': {
        color: theme.palette.common.Grey2Upd(),
        '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
      },
    },

    '&.loadingButton': {
      background: theme.palette.common.Palm(),
      cursor: 'default',
      pointerEvents: 'none',
      height: pxToRem(48),
      [customMediaQueryUpdDown('sm')]: { height: pxToRemMob(48) },
      '&::before': { borderColor: theme.palette.common.Mangrove(300) },
      '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
      '& .contentWrapper': {
        padding: `${pxToRem(18)} ${pxToRem(94)}`,
        [customMediaQueryUpdDown('sm')]: { padding: `${pxToRemMob(18)} ${pxToRemMob(94)}` },
        '& .circularProgress': {
          color: theme.palette.common.WhiteUpd(),
          width: `${pxToRem(12)} !important`,
          height: `${pxToRem(12)} !important`,
          [customMediaQueryUpdDown('sm')]: {
            width: `${pxToRemMob(12)} !important`,
            height: `${pxToRemMob(12)} !important`,
          },
          '& svg': {
            width: pxToRem(12),
            height: pxToRem(12),
            [customMediaQueryUpdDown('sm')]: {
              width: pxToRemMob(12),
              height: pxToRemMob(12),
            },
          }
        },
      },
    },

    // ── Variant: buttonOutline ──
    '&.buttonOutline': {
      background: 'transparent',
      '&::before': {
        border: `1px solid ${theme.palette.common.Palm()}`,
        width: `calc(100% + 2px)`, height: `calc(100% + 2px)`,
        top: `-1px`, ...theme.mixins.left(-1),
      },
      '&::after': { border: `0.5px solid ${theme.palette.common.Mangrove(300)}` },
      '& .contentWrapper': {
        color: theme.palette.common.Palm(),
        '& .svgWrapper svg path': { fill: theme.palette.common.Palm() },
      },
      '&:not(.loadingButton):hover': {
        backgroundColor: 'transparent',
        [customMediaQueryUpdUp('md')]: {
          backgroundColor: theme.palette.common.Palm(),
          '&::before': {
            border: `3px solid ${theme.palette.common.Mangrove(300)}`,
            width: `calc(100% + 6px)`, height: `calc(100% + 6px)`,
            top: `${pxToRem(-3)}`, ...theme.mixins.left(-3),
          },
          '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
          '& .contentWrapper': {
            color: theme.palette.common.WhiteUpd(),
            '& .svgWrapper svg path': { fill: theme.palette.common.WhiteUpd() },
          },
        },
      },
      '&:disabled': {
        background: theme.palette.common.Grey3(),
        '&::before': { border: 'none' },
        '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
        '& .contentWrapper': {
          color: `${theme.palette.common.Grey2Upd()} `,
          '& .svgWrapper svg path': { fill: `${theme.palette.common.Grey2Upd()}` },
        },
      },
      '&:not(.loadingButton):active': {
        background: `${theme.palette.common.PalmPressed()} !important`,
        '&::before': { borderColor: 'transparent !important', boxShadow: 'none' },
        '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
        '& .contentWrapper': {
          color: `${theme.palette.common.Grey2Upd()} !important`,
          '& .svgWrapper svg path': { fill: `${theme.palette.common.Grey2Upd()} !important` },
        },
      },
      '&.loadingButton': {
        background: theme.palette.common.WhiteUpd(),
        '&::before': {
          border: `3px solid ${theme.palette.common.Mangrove(300)}`,
          width: `calc(100% + 6px)`, height: `calc(100% + 6px)`,
          top: `-3px`, ...theme.mixins.left(-3),
        },
        '&::after': { borderColor: theme.palette.common.Mangrove(300) },
        '& .contentWrapper .circularProgress': { color: theme.palette.common.Palm() },
      },
    },

    // ── Variant: withoutBorder ──
    '&.withoutBorder': {
      padding: 0, background: 'transparent', height: 'fit-content', borderRadius: 0,
      '&::before': { border: 'none', borderRadius: 0, width: 0, height: 0, top: 0, left: 0 },
      '&::after': { border: 'none', margin: 0, borderRadius: 0 },
      '& .contentWrapper': {
        color: theme.palette.common.Palm(), padding: 0,
        '@media (min-width: 769px) and (max-width: 850px)': {
          '& .buttonText': { marginTop: `${pxToRemMob(2)}!important` },
        },
        '& .svgWrapper svg path': { fill: theme.palette.common.Palm() },
      },
      '&:not(.loadingButton):hover': {
        backgroundColor: 'transparent',
        [customMediaQueryUpdUp('md')]: {
          '&::after': { borderColor: 'transparent' },
          '& .contentWrapper': {
            color: theme.palette.common.Mangrove(),
            '& .svgWrapper svg path': { fill: theme.palette.common.Mangrove() },
          },
        },
      },
      '&:disabled': {
        background: 'transparent', color: theme.palette.common.Grey2Upd(), cursor: 'default',
        '&::before': { borderColor: 'transparent' }, '&::after': { borderColor: 'transparent' },
        '& .contentWrapper': {
          padding: 0, color: theme.palette.common.Grey2Upd(),
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
        },
      },
      '&:not(.loadingButton):active': {
        background: 'transparent !important',
        '&::before': { borderColor: 'transparent' }, '&::after': { borderColor: 'transparent' },
        '& .contentWrapper': {
          color: `${theme.palette.common.PalmPressed()} !important`,
          '& .svgWrapper svg path': { fill: `${theme.palette.common.PalmPressed()} !important` },
        },
      },
    },

    // ── Variant: ghostButton ──
    '&.ghostButton': {
      background: theme.palette.common.WhiteUpd(),
      '&::before': { border: `3px solid ${theme.palette.common.WhiteUpd(300)}`, backgroundClip: 'padding-box' },
      '&::after': { border: `0.5px solid ${theme.palette.common.Mangrove(300)}` },
      '& .contentWrapper': {
        color: theme.palette.common.Palm(),
        '& .svgWrapper svg path': { fill: theme.palette.common.Palm() },
      },
      '&:not(.loadingButton):hover': {
        backgroundColor: theme.palette.common.WhiteUpd(),
        [customMediaQueryUpdUp('md')]: {
          '&::before': { borderColor: 'transparent', backgroundClip: 'padding-box' },
          '&::after': { borderColor: theme.palette.common.Mangrove(300) },
        }
      },
      '&:disabled': {
        background: theme.palette.common.Grey3(), border: 'none', cursor: 'default',
        '&::before': { border: 'none' }, '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
        '& .contentWrapper': {
          color: theme.palette.common.Grey2Upd(),
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
        },
      },
      '&:not(.loadingButton):active': {
        background: `${theme.palette.common.Grey2Upd()} !important`,
        '&::before': { borderColor: 'transparent' },
        '&::after': { borderColor: `${theme.palette.common.WhiteUpd(300)} !important` },
        '& .contentWrapper': {
          color: theme.palette.common.Grey1Upd(),
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey1Upd() },
        },
      },
      '&.loadingButton': {
        background: theme.palette.common.WhiteUpd(), cursor: 'default',
        '&::before': { borderColor: 'transparent', border: 'none', left: 0, top: 0, width: '100%', height: '100%' },
        '&::after': { borderColor: 'transparent' },
        '& .contentWrapper': {
          padding: `${pxToRem(18)} ${pxToRem(94)}`,
          [customMediaQueryUpdDown('sm')]: { padding: `${pxToRemMob(18)} ${pxToRemMob(94)}` },
          '& .circularProgress': { color: theme.palette.common.Palm() },
        },
      },
    },

    // ── Variant: ghostButtonOutline ──
    '&.ghostButtonOutline': {
      background: 'transparent', color: 'transparent',
      '&::before': {
        border: `1px solid ${theme.palette.common.WhiteUpd()}`,
        width: `calc(100% + 2px)`, height: `calc(100% + 2px)`,
        top: `-1px`, ...theme.mixins.left(-1),
      },
      '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
      '& .contentWrapper': {
        color: theme.palette.common.WhiteUpd(),
        '& .svgWrapper svg path': { fill: theme.palette.common.WhiteUpd() },
      },
      '&:not(.loadingButton):hover': {
        backgroundColor: 'transparent',
        [customMediaQueryUpdUp('md')]: {
          backgroundColor: theme.palette.common.WhiteUpd(),
          '&::before': { borderColor: theme.palette.common.WhiteUpd() },
          '&::after': { borderColor: theme.palette.common.Mangrove(300) },
          '& .contentWrapper': {
            color: theme.palette.common.Palm(),
            '& .buttonText': {
              ...(theme.direction === 'ltr' && {
                [customMediaQueryUpdUp('xxl')]: { lineHeight: 1.2 },
              }),
            },
            '& .svgWrapper svg path': { fill: theme.palette.common.Palm() },
          },
        },
      },
      '&:disabled': {
        background: 'transparent', cursor: 'default',
        '&::before': { borderColor: theme.palette.common.Grey2Upd() },
        '&::after': { borderColor: theme.palette.common.Grey2Upd() },
        '& .contentWrapper': {
          color: theme.palette.common.Grey2Upd(),
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
        },
      },
      '&:not(.loadingButton):active': {
        background: `${theme.palette.common.Grey2Upd()} !important`,
        '&::before': { borderColor: 'transparent !important' },
        '&::after': { borderColor: `${theme.palette.common.WhiteUpd(300)} !important` },
        '& .contentWrapper': {
          color: `${theme.palette.common.WhiteUpd(300)} !important`,
          '& .svgWrapper svg path': { fill: `${theme.palette.common.WhiteUpd(300)} !important` },
        },
      },
      '&.loadingButton': {
        background: 'transparent', cursor: 'default',
        '&::before': { borderColor: theme.palette.common.WhiteUpd() },
        '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
      },
    },

    // ── Variant: ghostButtonWithoutBorder ──
    '&.ghostButtonWithoutBorder': {
      padding: 0, borderRadius: 0, background: 'transparent', maxHeight: 'fit-content',
      '&::before': { border: 'none', borderRadius: 0, width: 0, height: 0, top: 0, left: 0 },
      '&::after': { border: 'none', borderRadius: 0, margin: 0 },
      '& .contentWrapper': {
        color: theme.palette.common.WhiteUpd(), padding: 0,
        '@media (min-width: 769px) and (max-width: 850px)': {
          '& .buttonText': { marginTop: `${pxToRemMob(2)}!important` },
        },
        '& .buttonText': {
          ...theme.typography.cta1Upd,
          ...(theme.direction === 'ltr' && {
            [customMediaQueryUpdUp('xxl')]: { lineHeight: 1 },
          }),
        },
        '& .svgWrapper svg path': { fill: theme.palette.common.WhiteUpd() },
      },
      '&:not(.loadingButton):hover': {
        backgroundColor: 'transparent',
        [customMediaQueryUpdUp('md')]: { '&::after': { borderColor: 'transparent' } },
      },
      '&:disabled': {
        background: 'transparent', borderColor: 'transparent', cursor: 'default', height: 'fit-content',
        '&::before': { borderColor: 'transparent' }, '&::after': { borderColor: 'transparent' },
        '& .contentWrapper': {
          color: theme.palette.common.Grey2Upd(), padding: 0,
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
        },
      },
      '&:not(.loadingButton):active': {
        background: 'transparent !important',
        '&::before': { borderColor: 'transparent' }, '&::after': { borderColor: 'transparent' },
        '& .contentWrapper': {
          color: theme.palette.common.Grey2Upd(),
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
        },
      },
    },

    // ── Variant: iconButton ──
    '&.iconButton': {
      background: theme.palette.common.WhiteUpd(),
      boxShadow: shadowsUpd.raised,
      minWidth: pxToRem(48), minHeight: pxToRem(48), height: pxToRem(48),
      '&::before': {
        width: '100%', height: '100%', top: 0,
        border: `1px solid ${theme.palette.common.Palm()}`,
        ...theme.mixins.left(0),
      },
      [customMediaQueryUpdDown('sm')]: {
        minWidth: pxToRemMob(48), minHeight: pxToRemMob(48), height: pxToRemMob(48),
      },
      '&::after': {
        content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: pxToRem(300), border: `0.5px solid ${theme.palette.common.Mangrove(300)}`,
        margin: '4px',
        [customMediaQueryUpdDown('sm')]: { borderRadius: pxToRemMob(300) },
        [customMediaQueryUpdUp('xxl1920')]: { margin: 'var(--mfd-spacing-xxxs)' },
      },
      '& .contentWrapper': {
        padding: `${pxToRem(12)} 0`,
        [customMediaQueryUpdDown('sm')]: { padding: `${pxToRemMob(12)} 0` },
        '& .svgWrapper': {
          ...theme.mixins.marginLeft(0),
          height: pxToRem(16), width: pxToRem(16),
          [customMediaQueryUpdDown('sm')]: { height: pxToRemMob(16), width: pxToRemMob(16) },
          '& svg': {
            height: pxToRem(16), width: pxToRem(16),
            [customMediaQueryUpdDown('sm')]: { height: pxToRemMob(16), width: pxToRemMob(16) },
            '& path': { fill: theme.palette.common.Palm() },
          },
          '&.startIcon': { ...theme.mixins.marginRight(0) },
        },
      },
      '&:not(.loadingButton):hover': {
        backgroundColor: theme.palette.common.WhiteUpd(),
        [customMediaQueryUpdUp('md')]: {
          background: theme.palette.common.Palm(),
          '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
          '& .contentWrapper .svgWrapper svg path': { fill: theme.palette.common.WhiteUpd() },
        },
      },
      '&:disabled': {
        background: theme.palette.common.WhiteUpd(), cursor: 'default',
        '&::before': { borderColor: theme.palette.common.Grey3() },
        '&::after': { borderColor: theme.palette.common.Grey3() },
        '& .contentWrapper': {
          padding: `${pxToRem(12)} 0`,
          [customMediaQueryUpdDown('sm')]: { padding: `${pxToRemMob(12)} 0` },
          '& .svgWrapper svg path': { fill: theme.palette.common.Grey2Upd() },
        },
      },
      '&:not(.loadingButton):active': {
        background: `${theme.palette.common.PalmPressed()} !important`,
        '&::before': { borderColor: theme.palette.common.Palm() },
        '&::after': { borderColor: theme.palette.common.WhiteUpd(300) },
        '& .contentWrapper .svgWrapper svg path': { fill: `${theme.palette.common.Grey2Upd()} !important` },
      },
    },
  }
});

const ButtonUpd = ({
  variant = '',
  disabled = false,
  href = '',
  target = '',
  onClick = () => { },
  onMouseEnter = () => { },
  onMouseLeave = () => { },
  isLoading = false,
  startIcon = '',
  endIcon = '',
  ariaLabel = '',
  className = '',
  rotateIconOnRTL = false,
  btnText = '',
  animateSvg = true,
  buttonType = 'button',
  customTextVariant = '',
}) => {
  const btnVariant = variant
  const isIconButton = btnVariant === 'iconButton';
  const isWithoutBorderButton = btnVariant === 'withoutBorder' || btnVariant === 'ghostButtonWithoutBorder';

  return (
    !(isIconButton ? (startIcon || endIcon) : btnText || !(startIcon || endIcon))
      ? <></> :
      <StyledButton
        className={`${className} ${btnVariant} ${disabled ? 'disabled' : ''} ${isLoading ? 'loadingButton' : ''}`}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        href={href || undefined}
        target={target || undefined}
        type={buttonType}
      >
        {/* MUI v7: no label wrapper — add contentWrapper span manually */}
        <span className="contentWrapper">
          {startIcon && <span className={`svgWrapper startIcon ${animateSvg ? `animateSvg` : ''} ${rotateIconOnRTL ? 'rotateSvg' : ''}`}>{startIcon}</span>}

          {!isIconButton && !isLoading && <Typography className={'buttonText'} variant={customTextVariant ? customTextVariant : isWithoutBorderButton ? 'cta1Upd' : 'cta2Upd'} component={'span'}>{btnText}</Typography>}

          {endIcon && <span className={`svgWrapper endIcon ${animateSvg ? `animateSvg` : ''} ${rotateIconOnRTL ? ' rotateSvg' : ''}`}>{endIcon}</span>}

          {isLoading && <CircularProgress size={12} className='circularProgress' />}
        </span>
      </StyledButton>
  );
};

export default ButtonUpd;