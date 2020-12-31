import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import Header from './components/Header'
import Homescreen from './components/Homescreen'
import LocaleScreen from './components/LocaleScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path='/' component={Homescreen} exact />
          <Route path='/locale/:id' component={LocaleScreen} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
