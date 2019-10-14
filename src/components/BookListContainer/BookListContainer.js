import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, onAddedToCart } from '../../actions';
import { compose } from '../../utils';

import BookList from '../BookList';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './BookListContainer.css';

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if(loading) {
            return <Spinner />
        }

        if(error) {
            return <ErrorIndicator />
        }

         return <BookList books={books} onAddedToCart={onAddedToCart} />
    };
};

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(onAddedToCart(id))
    };
};

export default compose (
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);