'use client'

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { pxToRem } from '../../lib/theme/constants';

// CRA's Typography uses withStyles to generate MuiTypography-{variant} classes.
// In Next.js/MUI v7, withStyles is removed. We use styled() with dynamic variant application.

const defaultVariantMapping = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5',
  h51: 'span', h5Bold: 'h5',
  subTitle: 'h6', subTitleBold: 'h6',
  labelLight: 'h6', labelBold: 'h6', labelRegular: 'h6',
  labelBlack: 'h6', labelBlack2: 'span',
  cardTitle1: 'h5', cardTitle2: 'h5',
  body1: 'p', body1Regular: 'p', body1Bold: 'p', body1Bold22: 'p', body1a: 'p',
  body2: 'p', body2Light: 'p', body2Bold: 'p',
  body3: 'p', body3Bold: 'p', body4Bold: 'p', body4: 'p', body5: 'p',
  h1Upd: 'h1', h2Upd: 'h2', h3Upd: 'h3', h4Upd: 'h4', h5Upd: 'h5', h6Upd: 'h6',
  body1Upd: 'p', body2Upd: 'p', body3Upd: 'p',
  cta1Upd: 'span', cta2Upd: 'span', labelUpd: 'span',
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Typography = forwardRef(function Typography(props, ref) {
  const {
    align = 'inherit',
    className,
    classNameChild,
    color = 'initial',
    component,
    display = 'initial',
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    wordBreak = false,
    border = '',
    animateSettings = {},
    regularSpan = false,
    ...other
  } = props;

  const theme = useTheme();
  const mainElementRef = useRef(null);

  useImperativeHandle(ref, () => ({
    ref: mainElementRef,
    animPlay() { },
    animReverse() { },
    animYPlay() { },
    animYReverse() { },
  }));

  const Component =
    component ||
    (paragraph
      ? 'p'
      : variantMapping[variant] || defaultVariantMapping[variant]) ||
    'span';

  // CRA's style.js only generates classes for these specific variants.
  // Variants NOT in this set (e.g. body4) do NOT get withStyles-generated classes,
  // so they inherit from body instead of getting their own responsive overrides.
  const STYLED_VARIANTS = new Set([
    'small', 'body1', 'body1Regular', 'body1Bold', 'body1Bold22', 'body1a',
    'body2', 'body2Light', 'body2Bold', 'body3', 'body3Bold', 'body5',
    'body4Bold', 'quote', 'caption', 'button', 'radioButton',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h51', 'h5Bold', 'h52', 'h53Bold',
    'subTitle', 'subTitleBold', 'labelLight', 'labelBold', 'labelRegular',
    'labelBlack', 'labelBlack2', 'cardTitle1', 'cardTitle2', 'overline',
    'h1Upd', 'h2Upd', 'h3Upd', 'h4Upd', 'h5Upd', 'h6Upd',
    'body1Upd', 'body2Upd', 'body3Upd', 'cta1Upd', 'cta2Upd', 'labelUpd',
  ]);

  // Only apply variant styles for variants that CRA's withStyles actually generates
  const variantStyles = STYLED_VARIANTS.has(variant) ? (theme.typography[variant] || {}) : {};

  // Build color styles
  const colorStyles = {};
  if (color === 'primary') colorStyles.color = theme.palette.primary.main;
  else if (color === 'secondary') colorStyles.color = theme.palette.secondary.main;
  else if (color === 'textPrimary') colorStyles.color = theme.palette.text.primary;
  else if (color === 'textSecondary') colorStyles.color = theme.palette.text.secondary;
  else if (color === 'error') colorStyles.color = theme.palette.error?.main || 'red';
  else if (color === 'inherit') colorStyles.color = 'inherit';

  // Build dynamic color from palette.colors
  const colors = theme.palette.colors || {};
  if (color !== 'initial' && colors[color]) {
    colorStyles.color = colors[color].contrastText;
  }

  const style = {
    margin: 0,
    ...variantStyles,
    ...colorStyles,
    ...(noWrap && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }),
    ...(gutterBottom && theme.typography.gutterBottom),
    ...(paragraph && { marginBottom: pxToRem(16) }),
    ...(align !== 'inherit' && { textAlign: align }),
    ...(display === 'inline' && { display: 'inline' }),
    ...(display === 'block' && { display: 'block' }),
    ...(wordBreak && { wordBreak: 'break-word' }),
  };

  // Generate MuiTypography-{variant} class for compatibility with CRA selectors
  const muiClasses = clsx(
    'MuiTypography-root',
    variant !== 'inherit' && `MuiTypography-${variant}`,
    color !== 'initial' && `MuiTypography-color${capitalize(color)}`,
    noWrap && 'MuiTypography-noWrap',
    gutterBottom && 'MuiTypography-gutterBottom',
    align !== 'inherit' && `MuiTypography-align${capitalize(align)}`,
    display !== 'initial' && `MuiTypography-display${capitalize(display)}`,
    className,
  );

  // regularSpan: when true and children is a string, process [bracketed text]
  // into <span class="typography-regular-text"> with regular font weight
  let contentProps = {};
  let contentChildren = other?.children;

  // Add typography-regular-text style support
  const typographyStyle = {
    ...style,
    '& .typography-regular-text': {
      fontFamily: theme.custom?.fontFamily?.primaryRegular,
      fontWeight: 400,
    },
  };

  // Use MUI Box with `component` prop so `sx` supports media queries
  return (
    <Box
      component={Component}
      className={clsx(muiClasses, regularSpan && 'typography-regular-span')}
      ref={mainElementRef}
      sx={typographyStyle}
      {...contentProps}
      {...other}
    >
      {contentChildren}
    </Box>
  );
});

Typography.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  component: PropTypes.elementType,
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variant: PropTypes.string,
  variantMapping: PropTypes.object,
  wordBreak: PropTypes.bool,
};

export default Typography;