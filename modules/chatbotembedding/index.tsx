import React, { useState } from "react";

interface User {
  input: string;
  output: string;
}

const UserForm = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [answer, setAnswer] = useState<User[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = { input, output };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/embeddings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      setAnswer([...answer, data]);
      setInput("");
      setOutput("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="Enter text here..."
            className="w-96 border border-gray-400 rounded-lg px-4 py-2"
          />
          <button className="mt-3 ml-[18rem] h-8 w-24 bg-blue-500 text-white rounded-lg">
            Go To
          </button>
          
        </div>
      </form>
      {answer.length > 0 && (
        <div className="grid grid-row-1 gap-4 sm:grid-row-2 md:grid-row-3 lg:grid-row-4 xl:grid-row-5 h-24 w-96">
          {answer.map((answers, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="text-sm font-medium mb-2">{answers.input}</div>
              <div className="text-sm font-medium mb-2">{answers.output}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserForm;
