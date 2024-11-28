import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Successfully toasted!");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.token) {
      } else {
        alert("Wrong value");
      }
    } else {
      alert("The problem happened on the server");
    }
  };

  return (
    <>
      <Toaster></Toaster>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" onClick={notify}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
