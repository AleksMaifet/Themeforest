const fontFamily = ['Manrope', 'Open Sans', 'sans-serif'];
const fontSizeBase = '10px';

const container = {
  display: 'flex',
  'justify-content': 'space-between',
  'align-items': 'center',
  width: '100%',
  'max-width': '1100px',
  padding: '0 15px',
};

/// Colors
const colors = {
  Primary: '#185CFF',
  Secondary: '#002B4E',
  Tertiary: '#F0F9FF',
  HelperBlue1: '#194060',
  HelperBlue2: '#607D94',
  HelperBlue3: '#C9DCEC',
  Black: '#292D33',
  Grey: '#9497A1',
  Background: '#F1F6FA',
  Error: '#C14040',
  White: '#FFFFFF',
};

/// Shadow-box
const boxShadows = [
  '0 12px 30px rgba(24, 92, 255, 0.18)',
  '0 2px 20px 17px rgba(24, 92, 255, 0.04)',
  '0 12px 30px 17px rgba(24, 92, 255, 0.04)',
  '0 4px 12px rgba(12, 68, 204, 0.1)',
];

/// Size
const size = {
  xs: 350,
  sm: 550,
  md: 768,
  xl: 1110,
};

/// Space
const spaces = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
];

/// Opacity
const opacity = {
  opacity0: 0,
  opacity50: 0.5,
  opacity100: 1,
};

/// TextStyle
const textSize = {
  xs: 1,
  sm: 1.5,
  md: 2,
  lg: 3,
  xl: 4,
  xll: 5,
  xlll: 6,
};

export default {
  fontFamily,
  fontSizeBase,
  spaces,
  size,
  opacity,
  textSize,
  colors,
  boxShadows,
  container,
};
