import { createTheme } from '@mui/material/styles';
import components from './Components';
import { defaultTheme } from './DefaultColors';

const ThemeSettings = () => {
  const theme = createTheme(defaultTheme);
  theme.components = components(theme);

  return theme;
};


export { ThemeSettings };
