import React, { useState } from "react";

interface User {
  name: string;
  email: string;
 
}

const UserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createdUsers, setCreatedUsers] = useState<User[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = { name, email};

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      setCreatedUsers([...createdUsers, data]); // add the created user to the state array
      setName(""); // reset the form values
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <button type="submit">Create User</button>
      </form>
      {createdUsers.length > 0 && (
        <div>
          <h2>Created Users:</h2>
          {createdUsers.map((user, index) => (
            <div key={index}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserForm;
