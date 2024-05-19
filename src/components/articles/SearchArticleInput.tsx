"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchArticleInput = () => {
  const router = useRouter()
  const [SearchText, setSearchText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();


    router.push(`/articles/search?searchText=${SearchText}`)

  };
  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto">
      <input
        className="w-full p-3 border-none rounded  text-xl text-gray-900"
        type="search"
        placeholder="Search for article"
        value={SearchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchArticleInput;
