import React from "react";

const SearchForm = (props) => {
  return (
    <div className="flex justify-center bg-blue-700 h-16">
      <form onSubmit={props.searchBook}>
        <input onChange={props.handleSearch} type="text" />
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Search Books
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
