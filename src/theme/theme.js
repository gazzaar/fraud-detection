const PRIMARY = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};

const SUCCESS = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
};

const getDesignTokens = () => ({
  palette: {
    primary: PRIMARY,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    background: {
      default: '#F8FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212B36',
      secondary: '#637381',
    },
    grey: {
      51: '#F9FAFB',
      100: '#F2F4F7',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9DA4AE',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default getDesignTokens;
