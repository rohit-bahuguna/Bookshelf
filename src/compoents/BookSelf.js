import React from 'react';
import BookSelfCard from './BookSelfCard';
import { useBooksData } from '../context/dataContext';
const BookSelf = () => {

    const { bookStore, setBookStore, updateBookStore } = useBooksData()




    return (
        <div className="px-10">
            {bookStore.map(bookSelf => {
                return (
                    <BookSelfCard
                        key={bookSelf.id}
                        bookSelf={bookSelf}
                        updateBookStore={updateBookStore}
                    />
                );
            })}
        </div>
    );
};

export default BookSelf;
