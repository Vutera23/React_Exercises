import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [welcomeName, setWelcomeName] = useState("");

  function handleWelcomName(event) {
    setWelcomeName(event.target.value);
  }
  return (
    <div>
      <input
        name="welcomeName"
        value={welcomeName}
        type="text"
        onChange={handleWelcomName}
      />
      <Welcome name={welcomeName} />
    </div>
  );
}
