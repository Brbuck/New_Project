import Formulario from './components/Form/index';
import './Styles/style.css'

function App() {
  return (

      <Formulario />
     
  );
}

export default App;import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/';


import GlobalStyles from './Styles/GlobalStyles'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        
      </Switch>
      <GlobalStyles />
    </Router>
    


  );
}

export default App;