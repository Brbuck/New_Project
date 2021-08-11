import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderDropDown from './components/HeaderDropDown/';


import GlobalStyles from './Styles/GlobalStyles'

function App() {
  return (
    <Router>
      <HeaderDropDown />
      <Switch>
        
      </Switch>
      <GlobalStyles />
    </Router>
    


  );
}

export default App;