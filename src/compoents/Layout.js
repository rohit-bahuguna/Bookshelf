import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <header className='border border-gray-200 px-16 py-5 flex justify-between mb-2'>
                <Link to="/">
                    <h1 className='text-3xl text-sky-500 font-bold'>BookSelf</h1>
                </Link>
                <Link to="/search">
                    <button className='border px-3 rounded-full text-lg bg-sky-400'>Search Books</button>
                </Link>
            </header>
            {
                children
            }
        </div>
    )
}

export default Layout