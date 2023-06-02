import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Home />
    <Switch>
      <Route exact path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)

export default App
