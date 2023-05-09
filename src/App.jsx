import 'bootstrap/dist/css/bootstrap.min.css'
import DashBaord from './pages/DashBoard'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

function App() {

  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Router >
        <Switch>

          <Route exact path='/'>
            <DashBaord />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="*">
            <div>
              <h1>There is nothing here</h1>
              <p>You have put in a wrong page</p>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
