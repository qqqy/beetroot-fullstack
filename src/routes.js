import { Switch, Route} from 'react-router-dom'
import React, { Component } from 'react'
import TestOne from './components/TestOne'
import TestTwo from './components/TestTwo'
import TestThree from './components/TestThree'


export default (
  <Switch>
    <Route component={TestOne} path='/' exact />
    <Route component={TestTwo} path='/testtwo' />
    <Route component={TestThree} path='/testthree' />
  </Switch>
)