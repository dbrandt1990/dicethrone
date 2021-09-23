import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Ranks from './components/Ranks';
import GameContainer from './containers/GameContainer';
import HomePage from './containers/Homepage';
import RulesContainer from './containers/RulesContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/signup' render={() => <Signup />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/ranks' render={() => <Ranks />} />
          <Route exact path='/game' render={() => <GameContainer />} />
          <Route exact path='/rules' render={() => <RulesContainer />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
