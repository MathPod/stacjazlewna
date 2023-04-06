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
import ProductCategory from "./site/ProductCategory/ProductCategory";
import { useEffect, useState } from "react";

function App() {
  const [devicesData, setDevicesData] = useState([]);
  const [filteredCategoryDevices, setFilteredCategoryDevices] = useState([]);

  const filterCategoryDevices = (data) => {
    let filteredArray = [];
    let flaga = false;

    data.forEach((object, index) => {
      filteredArray.forEach((element) => {
        element.category_pl === object.category_pl
          ? (flaga = true)
          : (flaga = false);
      });
      if (flaga === false) filteredArray.push(object);
    });

    setFilteredCategoryDevices(filteredArray);
  };

  useEffect(() => {
    fetch("/jsonData/devicesData.json")
      .then((res) => res.json())
      .then((data) => {
        filterCategoryDevices(data);
        setDevicesData(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route path="/o-nas"></Route>
          <Route path="/projekty"></Route>
          <Route path="/produkty"></Route>
          <Route path="/kontakt"></Route>

          {filteredCategoryDevices.map((element) => {
            return (
                <Route path={`/${element.category_url_pl}/:name`}>
                  <ProductSite />
                </Route>
            );
          })}

          {filteredCategoryDevices.map((element) => {
            return (
                <Route path={`/${element.category_url_pl}`}>
                  <ProductCategory
                    devicesData={devicesData}
                    title={element.category_pl}
                  />
                </Route>
            );
          })}

          
                
           


          <Route path="/">
            <Home filteredCategoryDevices={filteredCategoryDevices} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
