import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function Search() {
  return (
    <div className=" text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-white h-8 px-5 pr-10 rounded-2xl  text-sm focus:outline-none ring"
      />
      <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
        <SearchIcon className="h-4 w-4 text-black"/>
      </button>
    </div>
  );
}
