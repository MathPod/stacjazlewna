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
import ProductSite from "./site/ProductSite/ProductSite";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route  path="/produkt/:id">
            <ProductSite />
          </Route>
          <Route  path="/o-nas"></Route>
          <Route  path="/projekty"></Route>
          <Route  path="/produkty"></Route>
          <Route  path="/kontakt"></Route>
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
