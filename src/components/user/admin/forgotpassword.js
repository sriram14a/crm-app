import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import { API } from "../../../db";

export function ForgotPassword() {
  const [email,setEmail] = useState("")
  const navigate = useNavigate();

  async function handlePassword(event) {
    event.preventDefault();

    const response = await fetch(`${API}/user/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email
      }),
    })

    const data = await response.json();
    if (data.status === "User Not Exists") {
      alert("User Not Exists");
    }
    if (data.status === "verified") {
      navigate("/adminlogin")
    }
  }

  return (
    <div className="position">
      <div>
        <Navbar/>
      </div>
      <div className="login-section pt-5 mt-5">
        <h1 className="text-center">Forgot Password</h1>
        <form onSubmit={handlePassword}>
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

      <Button
        sx={{
          ":hover": {
            bgcolor: "black",
            color: "white",
          },
          marginTop: "15px",
          width: "100%",
          color: "black",
          transition: ".5s ease-in-out",
          borderRadius: "10px",
        }}
        type="submit"
        variant="text"
      >
        Send password Reset Link
      </Button>
      </form>

      <div className="pt-2 text-center">
        <span >New user?</span>
        <Link className="text-decoration-none" to="/adminsignup"> Create an account!</Link>
      </div>
    </div>
    </div>
  );
}
