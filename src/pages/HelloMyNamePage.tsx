import { useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");

  const handleGreet = () => {
    if (name.trim() === "") {
      alert("Please insert your name");
    } else {
      alert(`Hello, ${name}!`);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h3>Hello My Name</h3>

      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleGreet}>
        Greet Me
      </button>

      {name.trim() === "" ? (
        <p className="text-danger mt-2">Please insert your name</p>
      ) : (
        <p className="mt-2">Hello, {name}!</p>
      )}
    </div>
  );
}
