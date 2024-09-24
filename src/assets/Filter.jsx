import { useEffect, useState } from "react";

export function Filter() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  async function dataFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    dataFetch();
  }, []);

  function handleInput(x) {
    setInput(x.target.value);
  }

  const userFilter = users.filter((item) =>
    item.name.toUpperCase().includes(input.toUpperCase())
  );
  return (
    <div>
      <h1>Users</h1>
      <input type="text" onChange={handleInput} value={input} />
      <ul>
        {userFilter.map((user) => (
          <li key={user.id}>
            {user.name},{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
