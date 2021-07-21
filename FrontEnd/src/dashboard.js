import Sidebar from "./Components/SideBar/sidebar";
import Topbar from "./Components/TopBar/topbar";
import "./styles/dashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Dashboard/Home/home";
import UserList from "./Pages/Dashboard/userList/UserList";
import User from "./Pages/Dashboard/user/User";
import NewUser from "./Pages/Dashboard/newUser/NewUser";
import ProductList from "./Pages/Dashboard/productList/ProductList";
import Product from "./Pages/Dashboard/product/Product";
import NewProduct from "./Pages/Dashboard/newProduct/NewProduct";

function Dashboard() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
