import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter, Router, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './rematch/store'
import { history } from "./helpers/history";

const DashBoard = React.lazy(() => import('./Pages/dashboard'))
const DashBoard2 = React.lazy(() => import('./Pages/dashboard2'))
const InterView = React.lazy(() => import('./Pages/interview'))
const Join = React.lazy(() => import('./Components/Join/Join'))
const Chat = React.lazy(() => import('./Components/Chat/Chat'))
const System = React.lazy(() => import('./Pages/system'))



const AppWithRouterAccess = () => {
    return (
        <React.Fragment>

            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Router history={history}>
                                <Route path='/' exact component={Join} />
                                <Route path='/dashboard3' component={DashBoard} />
                                <Route path='/dashboard2' component={DashBoard2} />
                                <Route path='/interview' component={InterView} />
                                <Route path='/system' component={System} />


                                <Route path='/chat' component={Chat} />


                            </Router>
                        </Suspense>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </React.Fragment>
    )
};
export default AppWithRouterAccess;