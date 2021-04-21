import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const MainView = lazy(() => import('../container/main/Main'));
const LandingView = lazy(() => import('../container/landing/Landing'));
const SignInView = lazy(() => import('../container/account/SignIn'));
const SignUpView = lazy(() => import('../container/account/SignUp'));
const ProductDetails = lazy(() => import('../container/product/Details'));
const NotFoundView = lazy(() => import('../components/404'));




const Routes = () => {

  return (
    <>
      <Suspense
        fallback={<div className="text-white text-center mt-3">Loading...</div>} >
        <Switch>
          <Route exact={true} path="/" component={LandingView} />
          <Route path="/login" component={SignInView} />
          <Route path="/register" component={SignUpView} />
          <Route path="/products/details/:slug" component={ProductDetails} />
          <Route exact={true} path="/products/:slug" component={MainView} />
          <Route component={NotFoundView} />

        </Switch>
      </Suspense>
    </>
  );
};



export default Routes;