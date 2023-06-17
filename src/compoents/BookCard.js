import React, { useState } from 'react';

const BookCard = ({ book, moveToAnotherCategory }) => {
    const { id, title, author, image } = book;
    const [showDropDown, setShowDropDOwn] = useState(false);

    return (
        <div className="flex flex-col relative border-2 p-5 shadow-xl rounded-2xl">
            <img src={image} alt={title} className="w-48 " />
            <h2 className="my-1 text-lg">
                {title}
            </h2>
            <p>
                Author : {author}
            </p>
            <button
                onClick={() => setShowDropDOwn(!showDropDown)}
                className=" border-2 px-2 rounded-full bg-sky-300 self-end	mt-5">
                Move to
            </button>
            {showDropDown &&
                <div className="absolute top-2/4 right-2.5 bg-gray-200 py-3 border-2 rounded-lg flex flex-col gap-1">
                    <p
                        className=" px-5  text-md hover:bg-sky-400 font-semibold hover:cursor-pointer "
                        onClick={e => moveToAnotherCategory(e.target.innerText, id, book)}>
                        Currently Reading
                    </p>
                    <p
                        className=" px-5 py-1 text-md hover:bg-sky-400 font-semibold hover:cursor-pointer "
                        onClick={e => moveToAnotherCategory(e.target.innerText, id, book)}>
                        Want to Read
                    </p>
                    <p
                        className=" px-5 py-1 text-md hover:bg-sky-400 font-semibold hover:cursor-pointer "
                        onClick={e => moveToAnotherCategory(e.target.innerText, id, book)}>
                        Read
                    </p>
                    <p
                        className="  px-5  text-md hover:bg-sky-400 font-semibold hover:cursor-pointer "
                        onClick={e => moveToAnotherCategory(e.target.innerText, id, book)}>
                        none
                    </p>
                </div>}
        </div>
    );
};

export default BookCard;
