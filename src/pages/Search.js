import React, { useState } from 'react'
import { useBooksData } from '../context/dataContext'
import BookSelfCard from '../compoents/BookSelfCard'
import BookCard from '../compoents/BookCard'
const Search = () => {
    const [searchData, setSearchData] = useState()
    const [searchResult, setSearchResult] = useState([])
    const { bookStore, setBookStore, updateBookStore, moveToAnotherCategory } = useBooksData()

    const searchBooks = (e) => {
        setSearchData(e.target.value)
        let allBooks = []
        bookStore.forEach(element => {

            allBooks = [...allBooks, ...element.books]
        });

        setSearchResult(allBooks.filter(({ title }) => title.includes(searchData)))
    }


    return (
        <div>
            <div className='flex justify-center'>
                <input type='text' value={searchData} onChange={searchBooks}
                    placeholder='Search Book by Title'
                    className=' border-2 w-[80vw] py-3 placeholder:text-xl text-xl px-5 mt-5 ' />

            </div>

            <div className='flex gap-5  justify-center py-10'>
                {searchResult.length > 0 ? searchResult.map(({ image, title, author }) => {
                    return (
                        <div className="flex flex-col relative border-2 p-5 shadow-xl rounded-2xl">
                            <img src={image} alt={title} className="w-48 " />
                            <h2 className="my-1 text-lg">
                                {title}
                            </h2>
                            <p>
                                Author : {author}
                            </p>

                        </div>
                    );
                }) : ""
                }
            </div>
        </div>
    )
}

export default Search