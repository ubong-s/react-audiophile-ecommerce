import { ThemeProvider } from 'styled-components';

const colors = {
   bg: '#fafafa',
   accent: '#d87d4a',
   accent_light: '#fbaf85',
   gray: '#f1f1f1',
   light_gray: '#d3d3d3',
   white: '#fff',
   black: '#191919',
   text: 'rgba(0,0,0,0.5)',
   text_light: 'rgba(255,255,255,0.5)',
   divider: 'rgba(255,255,255,0.1)',
   placeholder: 'rgba(0,0,0,.4)',
   input_border: '#CFCFCF',
   input_error: '#CD2C2C',
};

const typography = {
   fonts: {
      manrope: `'Manrope', sans-serif`,
   },
   weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
   },
};

const breakpoints = {
   mobile: '375px',
   tablet: '768px',
   desktop: '1024px',
   large: '1100px',
   hd: '1440px',
};

const misc = {
   rounded: {
      xs: '5px',
      sm: '10px',
      md: '15px',
      lg: '20px',
      full: '999px',
   },

   transition: {
      ease: 'all 0.5s ease-in-out',
      linear: 'all 0.5s linear',
   },
};

const Theme = ({ children }) => (
   <ThemeProvider theme={colors}>{children}</ThemeProvider>
);

export { colors, typography, breakpoints, misc, Theme };
