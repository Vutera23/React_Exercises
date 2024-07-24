import { Age } from "./Age";

export function Welcome({ name = Emanuele, age = 28 }) {
  return (
    <div>
      <p>
        Welcome,
        <strong> {name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
}