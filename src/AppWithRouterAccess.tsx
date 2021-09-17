import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter, Router, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './rematch/store'
import { history } from "./helpers/history";

const DashBoard = React.lazy(() => import('./Pages/dashboard'))
const DashBoard2 = React.lazy(() => import('./Pages/dashboard2'))

const AppWithRouterAccess = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Router history={history}>
                                <Route path='/dashboard' component={DashBoard} />
                                <Route path='/dashboard2' component={DashBoard2} />

                            </Router>
                        </Suspense>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </React.Fragment>
    )
};
export default AppWithRouterAccess;