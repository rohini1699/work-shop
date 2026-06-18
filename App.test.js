import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = participants.find(
      (p) => p.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      setMessage("Email already registered!");
      return;
    }

    setParticipants([...participants, { name, email }]);

    setMessage(`Registration successful for ${name}`);

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>Workshop Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>

      <h2>Participants List</h2>

      <ul>
        {participants.map((p, index) => (
          <li key={index}>
            {p.name} - {p.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;