import { alpha } from '@mui/material';

const PRIMARY = {
  lighter: '#D1E9FC',
  light: '#76B0F1',
  main: '#2065D1',
  dark: '#103996',
  darker: '#061B64',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: PRIMARY,
          success: SUCCESS,
          warning: WARNING,
          error: ERROR,
          background: {
            default: '#F8F9FA',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#212B36',
            secondary: '#637381',
          },
        }
      : {
          primary: PRIMARY,
          success: SUCCESS,
          warning: WARNING,
          error: ERROR,
          background: {
            default: '#161C24',
            paper: '#212B36',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#919EAB',
          },
        }),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          ...(mode === 'dark' && {
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
          }),
        }),
      },
    },
  },
});

export default getDesignTokens;
