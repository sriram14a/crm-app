import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Navbar } from "../../Navbar/navbar";
import { API } from "../../../db";

export function Loginman() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch(`${API}/user/manager/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.message === "Successfully login") {
      localStorage.setItem("token", data.email);
      alert("Login successful");
      window.localStorage.setItem("token", data.data);
      navigate("/managerdashboard");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="position">
      <div>
        <Navbar />
      </div>
      <div className="pt-5 mt-5 login-section">
        <h1 className="text-center">manager</h1>
        <form onSubmit={loginUser}>
          <TextField
            style={{
              backgroundColor: "white",
              marginTop: "15px",
              width: "100%",
              borderRadius: "10px",
            }}
            label="Mail id"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email id"
            value={email}
          />
          <br />
          <TextField
            style={{
              backgroundColor: "white",
              marginTop: "15px",
              width: "100%",
              borderRadius: "10px",
            }}
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
            type="text"
            placeholder="Enter Password"
            value={password}
          />
          <br />
          <Button
           sx={{
            ':hover': {
              bgcolor: 'black', 
              color: 'white',
            },
            marginTop: "15px",
              width: "100%",
              color: "black",
              transition:".5s ease-in-out",
              borderRadius:"10px"
             
          }}
            type="submit"
            variant="text"
          >
            Login
          </Button>
        </form>
        <div className="text-center pt-2 justify-content-around d-flex">
        <Link className="text-decoration-none" to="/managersignup">
          Signup
        </Link>
        <Link className="text-decoration-none" to="/managerforgotPassword">
          ForgotPassword
        </Link> 
        </div>
      </div>
    </div>
  );
}
