import React from 'react';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

const App = () => {
    return (
        <div>
            <h2>App body</h2>
            <ErrorIndicator />
            <Spinner />         
        </div>

    )
};

export default App;