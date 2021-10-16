import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './Styles/GlobalStyles'
import light from './Styles/themes/ligth';
import dark from './Styles/themes/dark';
import Routes from './routes'
import Header from './components/Header/';
import usePeristedState from './utils/usePersistedState'

function App() {
  const [theme, setTheme] = usePeristedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
