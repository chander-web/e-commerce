import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const MainView = lazy(() => import('../container/main/Main'));
const SignInView = lazy(() => import('../container/account/SignIn'));
const SignUpView = lazy(() => import("../container/account/SignUp"));
// const TshirtView = lazy(() => import("../container/tshirt/Tshirt"));

const Routes = _ => {
    return (
        <>
            <Suspense
                fallback={<div className="text-white text-center mt-3">Loading...</div>} >
                <Switch>
                    <Route exact path="/products/:data/:id" component={MainView} />
                    <Route path="/login" component={SignInView} />
                    <Route path="/register" component={SignUpView} />
                </Switch>
            </Suspense>
        </>
    );
};



export default Routes;