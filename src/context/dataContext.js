import {
    createContext,
    useContext,
    useState,


} from 'react';
import { bookStoreData } from '../utils/booksData';

const productContext = createContext(null);

const useBooksData = () => useContext(productContext);

const BooksDataProvider = ({ children }) => {
    const [bookStore, setBookStore] = useState(bookStoreData);

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

    const moveToAnotherCategory = (newcategory, bookId, PreviousBooks, books, category) => {
        const newBooks = books.filter(({ id }) => id !== bookId);

        updateBookStore(newcategory, category, newBooks, PreviousBooks)
    }

    return (
        <productContext.Provider
            value={{ bookStore, setBookStore, updateBookStore, moveToAnotherCategory }}>
            {children}
        </productContext.Provider>
    );
};

export { useBooksData, BooksDataProvider };