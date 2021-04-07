import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const MainView = lazy(() => import('../container/main/Main'));
const SignInView = lazy(() => import('../container/account/SignIn'));
const SignUpView = lazy(() => import("../container/account/SignUp"));
const ProductDetails = lazy(() => import("../container/product/Details"));


const Routes = _ => {
    return (
        <>
            <Suspense
                fallback={<div className="text-white text-center mt-3">Loading...</div>} >
                <Switch>

                    <Route path="/login" component={SignInView} />
                    <Route path="/register" component={SignUpView} />
                    <Route path="/products/details" component={ProductDetails} />
                    <Route exact path="/products/:data" component={MainView} />

                </Switch>
            </Suspense>
        </>
    );
};



export default Routes;