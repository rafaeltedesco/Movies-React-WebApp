import {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'

class Routes extends Component {
  render(){
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filmes" component={Movies} />
          <Route path="/filmes/:id" component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default Routes