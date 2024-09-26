export function MouseClick() {
  function handleOneButtonClick(event) {
    console.log(event.target.name);
  }
  function handleTwoButtonClick(event) {
    event.target.name === "two"
      ? console.log(event.target.name)
      : console.log(event.target.src);
  }

  return (
    <div>
      <button name="one" onClick={handleOneButtonClick}>
        Click me
      </button>
      <button name="two" onClick={handleTwoButtonClick}>
        <img src="percorso" width={30} height={30} />
      </button>
    </div>
  );
}
