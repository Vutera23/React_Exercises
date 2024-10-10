import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleTodo(event) {
    event.preventDefault();
    const input = event.target.children[0];
    const formTodo = new FormData(event.target);
    const todo = formTodo.get("todo");
    setTodos((t) => [...t, todo]);
    input.value = "";
  }

  function handleResetButton() {
    setTodos(() => []);
  }

  function handleSingleLi(index) {
    const newTodos = todos.filter((t, i) => i !== index);
    setTodos(newTodos);
  }
  console.log(todos);

  return (
    <section>
      <form onSubmit={handleTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => handleSingleLi(index)}>
              Remove
            </button>
            <br />
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleResetButton}>
        Reset
      </button>
    </section>
  );
}
