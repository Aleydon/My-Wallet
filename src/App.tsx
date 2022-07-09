import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import Layout from './components/Layout';

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}
