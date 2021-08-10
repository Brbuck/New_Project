import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/';


import GlobalStyles from './Styles/GlobalStyles'

function App() {
  return (
    <Router>
      <HeaderDrop />
      <Switch>
        
      </Switch>
      <GlobalStyles />
    </Router>
    


  );
}

export default App;