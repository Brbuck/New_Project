import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/';
import { City, Civic, Compass, Cruze, Onix, Tracker, Renegade, Corolla, Hilux, Nivus, Polo } from './Page/Carros';
import Former from './components/Form'

import GlobalStyles from './Styles/GlobalStyles'
import { S100RR, S100XR, CB1000R, CBR1000RR_Fireblade, Vulcan, Z1000, Z900 } from './Page/Motos';
import light from './Styles/themes/ligth';
import dark from './Styles/themes/dark';

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
          <Switch>
            <Route path='/carros/chevrolet/onix' component={Onix} />
            <Route path='/carros/chevrolet/cruze' component={Cruze} />
            <Route path='/carros/chevrolet/tracker' component={Tracker} />
            <Route path='/carros/honda/civic' component={Civic} />
            <Route path='/carros/honda/city' component={City} />
            <Route path='/carros/jeep/compass' component={Compass} />
            <Route path='/carros/jeep/renegade' component={Renegade} />
            <Route path='/carros/toyota/corolla' component={Corolla} />
            <Route path='/carros/toyota/hilux' component={Hilux} />
            <Route path='/carros/vw/nivus' component={Nivus} />
            <Route path='/carros/vw/polo' component={Polo} />
            <Route path='/motos/bmw/s1000rr' component={S100RR} />
            <Route path='/motos/bmw/s1000xr' component={S100XR} />
            <Route path='/motos/honda/cb_1000r' component={CB1000R} />
            <Route path='/motos/honda/cbr_1000rr_fireblade' component={CBR1000RR_Fireblade} />
            <Route path='/motos/Kawasaki/vulcan' component={Vulcan} />
            <Route path='/motos/Kawasaki/z1000' component={Z1000} />
            <Route path='/motos/Kawasaki/z900' component={Z900} />
            <Route path='/login' component={Former} />
          </Switch>
          <GlobalStyles />
        </Router>
      </ThemeProvider>
  );
}

export default App;