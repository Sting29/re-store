import React from 'react';

import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {

    console.log(bookstoreService.getBooks());

    return <h2>App</h2>
};

export default withBookstoreService()(App);