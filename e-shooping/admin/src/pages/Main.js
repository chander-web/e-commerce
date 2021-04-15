import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import ProductPage from '../pages/ProductPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/product" component={ProductPage} />
        </Switch>
    </main>
);
export default Main;