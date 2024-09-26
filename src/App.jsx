import { Clock } from "./Clock.jsx";
import { SecondCounter } from "./SecondCounter";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <SecondCounter initialValue={0} incrementImport={1} />
      <hr />
      <Clock />
    </div>
  );
}
