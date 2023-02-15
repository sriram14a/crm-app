import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "../../db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function AddUser() {
  const navigate = useNavigate();

  const [name, setName] = useState('')
	const [position, setPosition] = useState('')
	const [email, setEmail] = useState('')
	const [id, setId] = useState('')

  const createUser = (event) => {
    event.preventDefault();
    fetch(`${API}/adduser`, {
      method: "POST",
      body: JSON.stringify({
				name,
        position,
				email,
				id
			}),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate("/getuser"));
  };

  return (
    <form
      onSubmit={createUser}
      className="d-flex flex-column p-5 background"
    >
      <TextField
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        value={name}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
       <TextField
        label="position"
        variant="outlined"
        onChange={(event) => setPosition(event.target.value)}
        value={position}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
       <TextField
        label="email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
       <TextField
        label="id"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
        value={id}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
      <div className="d-flex">
        <Button
          type="submit"
          variant="contained"
          onClick={createUser}
          sx={{
            backgroundColor: "black",
            borderRadius: "10px",
            margin: "10px",
            "&:hover": {
              border: "transparant",
              color: "black",
              backgroundColor: "white",
            },
          }}
        >
          Add User
        </Button>
        <Button
          onClick={() => navigate(-1)}
          variant="text"
          sx={{ color: "black" }}
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </form>
  );
}
