import { Switch, Route} from 'react-router-dom'
import React from 'react'
import TestOne from './components/TestOne'
import TestTwo from './components/TestTwo'
import TestThree from './components/TestThree'
import MutComp from './components/MutComp'
import ImmComp from './components/ImmComp'


export default (
  <Switch>
    <Route component={TestOne} path='/' exact />
    <Route component={TestTwo} path='/testtwo' />
    <Route component={TestThree} path='/testthree' />
    <Route component={MutComp} path='/mutcomp' />
    <Route component={ImmComp} path='/immcomp' />
  </Switch>
)