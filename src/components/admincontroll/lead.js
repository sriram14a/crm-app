import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "../../db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function AddLead() {
  const navigate = useNavigate();

	const [service, setService] = useState('')
	const [contacted, setContacted] = useState('')
	const [serviceStatus, setServiceStatus] = useState('')
	const [date, setDate] = useState('')
	const [id, setId] = useState('')

  const createLead = (event) => {
    event.preventDefault();
   const response =  fetch(`${API}/addlead`, {
      method: "POST",
      body: JSON.stringify({
				service,
        serviceStatus,
				date,
				id,
                contacted
			}),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate(-1));
  };

  

  return (
    <form
      onSubmit={createLead}
      className="d-flex flex-column p-5 background"
    >
      <TextField
        label="Service"
        variant="outlined"
        onChange={(event) => setService(event.target.value)}
        value={service}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
       <TextField
        label="Status"
        variant="outlined"
        onChange={(event) => setServiceStatus(event.target.value)}
        value={serviceStatus}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
      <TextField
        label="date"
        variant="outlined"
        onChange={(event) => setDate(event.target.value)}
        value={date}
        sx={{
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      />
       
       <TextField
        label="Contacted"
        variant="outlined"
        onChange={(event) => setContacted(event.target.value)}
        value={contacted}
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
          onClick={createLead}
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
          Add Lead
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
