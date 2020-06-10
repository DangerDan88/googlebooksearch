import React from "react";

const Nav = () => {
  return (
    <nav className="border-2 border-red-500">
      <div className="flex justify-center w-full text-4xl bg-green-500 h-32 pt-10">
        {" "}
        <h1>Google Books Api</h1>{" "}
      </div>
      <div className="flex content-end bg-green-500">
        {" "}
        <ul>
          {" "}
          <li>
            <a
              className="text-lg text-white border-2 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-500 shadow-lg"
              href="/search"
            >
              Saved Books
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
