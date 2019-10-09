import React from 'react';

import BookList from '../BookList/';

const HomePage = () => {

    const array = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard'
        }
    ];

    return(
        <BookList books={array} />
    );
};

export default HomePage; 