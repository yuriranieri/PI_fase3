import React from 'react'

import { Router, Switch, Route } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Ranking from '../pages/Ranking'
import Questions from '../pages/Questions'
import NotFound from './NotFound'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/"/>
            <Route component={Register} exact path="/register"/>
            <Route component={Ranking} exact path="/ranking"/>
            <Route component={Questions} exact path="/questions"/>
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Routes