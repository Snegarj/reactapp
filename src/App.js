
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import {Header} from "./container/Header";

import {ProductList} from "./container/ProductList";
import {ProductDetail} from "./container/ProductDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId"  component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

