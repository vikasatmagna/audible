
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './pages/Home'
import Pra from './pages/Pra'
import Prc from './pages/Prc'
function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Pra" component={Pra} />
      <Route path="/Prc" component={Prc} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
