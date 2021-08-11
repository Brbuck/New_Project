import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/';
import { Onix } from './Pe/Carros';


import GlobalStyles from './Styles/GlobalStyles'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/carros/chevrolet/onix' component={Onix} />
      </Switch>
      <GlobalStyles />
    </Router>
    


  );
}

export default App;