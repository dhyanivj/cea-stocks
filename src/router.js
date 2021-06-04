import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import Table from './components/table/Table';
import MainPage from './components/MainPage';
import SomePage from './components/SomePage';
import SomeOtherPage from './components/SomeOtherPage';
import Dropdown from './components/dropdown/Dropdown';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/table" component={Table}>
    <IndexRoute component={MainPage} />
    <Route path="/dropdown" component={Dropdown} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);  