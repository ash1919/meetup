import React, {useState} from 'react'
import "./speakers"
import ReactDOM from 'react-dom/client';

export default function SearchBar({filter}){
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const debounceSearch = (event, debounceTimeout) => {
    const value = event.target.value;
    // filter(value);
    console.log("hey speaker die")
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    const timeout = setTimeout(() => {
      
       filter(value);
    }, 500);
    setDebounceTimeout(timeout); 
};

  return (
<section>
        <form className=" container pt-10 text-white relative bg-no-repeat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8 relative left-3 top-10 pl-2 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Find speakers"
              onChange={(e)=> debounceSearch(e,debounceTimeout)}
              className="w-full border-transparent caret-white rounded p-4 pl-16 mx-auto bg-[#CDCDCD1A] form-control"
            />
          </form>
    </section> 
  )
}
