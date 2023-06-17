import React, { useState } from 'react'

const Search = () => {
    const [searchData, setSearchData] = useState()
    return (
        <div>
            <input type='text' value={searchData} onChange={(e) => setSearchData(e.target.value)} />
        </div>
    )
}

export default Search