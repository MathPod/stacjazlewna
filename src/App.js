import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./site/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/produkty"></Route>
          <Route path="/kontakt"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <h1>Hello</h1>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
