function onLogin(data) {
  console.log(`LOGIN
  Username: ${data.target.elements.namedItem("username").value}
  Password: ${data.target.elements.namedItem("password").value}
  Remember: ${data.target.elements.namedItem("remember").checked}
  `);
}
export function UncontrolledLogin() {
  function handleLoginUC(event) {
    event.preventDefault();
    onLogin(event);
  }

  function loginWithFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(`LOGIN FORM DATA
  Username: ${formData.get("username")}
  Password: ${formData.get("password")}
  Remember: ${formData.get("remember") === "on" ? true : false}`);
  }

  function checkButton(event) {
    event.preventDefault();
    event.nativeEvent.submitter.name === "event.target"
      ? handleLoginUC(event)
      : loginWithFormData(event);
  }

  return (
    <form onSubmit={checkButton}>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <input name="remember" type="checkbox" />
      <button name="event.target">Login</button>
      <button name="form data">Login Form Data</button>
    </form>
  );
}
