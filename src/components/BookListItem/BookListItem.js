import React from 'react';

import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
        <section className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <h3 to="/" className="book-title">
                    {title}
                </h3>
                <span className="book-author">{author}</span>
                <span className="book-price">{price}</span>
                <button 
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">
                        Add to cart
                </button>
            </div>
        </section>
    );
};

export default BookListItem;