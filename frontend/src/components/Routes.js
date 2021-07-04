import React from 'react'

import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Ranking from '../pages/Ranking'
import Questions from '../pages/Questions'
import NotFound from './NotFound'

import { isAuth } from '../utils/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location }  }} />
        )
    )}/>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/ranking" component={Ranking} />
            <PrivateRoute path="/questions" component={Questions} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Routes