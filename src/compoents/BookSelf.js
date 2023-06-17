import React, { useEffect, useState } from 'react';
import { bookStoreData } from '../utils/booksData';
import BookSelfCard from './BookSelfCard';
const BookSelf = () => {
    const [bookStore, setBookStore] = useState([]);

    useEffect(() => {

        setBookStore(bookStoreData)

    }, [bookStoreData])



    const updateBookStore = (newcategory, category, newBooks, PreviousBook) => {
        const updatedBookStore = bookStore
            .map(allBooks => {
                return allBooks.category === category
                    ? { ...allBooks, books: newBooks }
                    : allBooks;
            })
            .map(
                allBooks =>
                    allBooks.category === newcategory
                        ? { ...allBooks, books: [...allBooks.books, PreviousBook] }
                        : allBooks
            );

        setBookStore(updatedBookStore);
    };
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
