import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
        <Route path='/product/:productName' />
        <Route path='/product' />
        <Route path='/request-form/:category/:product' />
        <Route path='/about-us' />
        <Route path='/order-confirmation' />
    </Route>
);