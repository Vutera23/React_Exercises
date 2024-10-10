import { useState } from "react";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUser(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(x) {
    x.preventDefault();
    try {
      const user = {
        username,
        password,
      };

      const response = await fetch("", {
        method: "POST",
        headers: { "Content-type": "application:json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      const localUser = {
        id: data.id,
        role: data.role,
        token: data.token,
      };

      localStorage.setItem("user", JSON.stringify(localUser));
    } catch (error) {}
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleUser} value={username} />
        <input type="password" onChange={handlePassword} value={password} />
        <input type="submit" value={"login"} />
      </form>
    </div>
  );
}
