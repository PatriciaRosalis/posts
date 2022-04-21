import React from "react";

export default function Nav() {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("search", e.target.value);
  };

  return (
    <div className="flex justify-between w-full bg-white h-12 ">
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <input
          placeholder="search"
          className="pl-2 "
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
}
