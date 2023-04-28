import React, { useState } from "react";

function Chatbox({
  onSubmit,
  loading = false,
}: {
  onSubmit?(message: string): void;
  loading: boolean;
}) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length === 0) return;

    setQuery("");
    onSubmit?.(query);
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-2 items-center">
      <textarea
        value={query}
        onChange={() => handleChange}
        placeholder="Enter text here..."
        className="w-96 border border-gray-400 rounded-lg px-4 py-2"
      />
      
      <div className="-rotate-45">
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Submit
      </button>
      </div>
    </form>
  );
}

export default Chatbox;
