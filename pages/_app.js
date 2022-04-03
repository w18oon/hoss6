import { CssBaseline, ThemeProvider } from '@mui/material';
// import '../styles/globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
