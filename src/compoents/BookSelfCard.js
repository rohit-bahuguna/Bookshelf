import React, { useState } from 'react'
import BookCard from './BookCard'
import { useBooksData } from '../context/dataContext'

const BookSelfCard = ({ bookSelf, updateBookStore }) => {
    const { id, books, category } = bookSelf
    const { moveToAnotherCategory } = useBooksData()
    return (
        <div className='flex flex-col '>
            <h1 className='text-3xl font-bold text-indigo-500 py-2  w-fit'>{category}</h1>
            <section className='flex gap-10 border-b-2 border-black py-5'>
                {
                    books.length > 0 ? books.map(((book) => {
                        return (
                            <BookCard key={book.id} book={book} category={books} books={books} />
                        )
                    })) :
                        <p className=' text-xl'>There is no book in this section</p>
                }
            </section>
        </div>
    )
}

export default BookSelfCard