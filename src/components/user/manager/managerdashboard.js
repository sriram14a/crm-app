import { useEffect, useState } from "react";
import { API } from "../../../db";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function ManagerDashboard() {
  const [userList, setUserList] = useState([]);
  const [lead, setLead] = useState([]);
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const getUser = () => {
    fetch(`${API}/adduser`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((usr) => {
        setUserList(usr);
      });
  };
  useEffect(() => getUser(), []);

  const getLead = () => {
    fetch(`${API}/addlead`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ld) => {
        setLead(ld);
      });
  };

  useEffect(() => getLead(), []);

  useEffect(() => {
    fetch(`${API}/user/managerdata`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data.data));
  }, []);

  const logout = ()=>{
    window.localStorage.clear();
    navigate("/managerlogin")
  }

  return (
    <div className="background scroller container pt-5">
      <div className="d-flex justify-content-between">
      <div>
        <h1 className="text-center">Manager Dashboard</h1>
      </div>
      <div className="text-align">
        <span className="text-align bg-success text-light rounded p-2 fw-bold ">{userData.email}</span>
      <Button sx={{color:"black",marginRight:"10px",':hover': {
              bgcolor: 'black', 
              color: 'white'}}} variant="text" onClick={() => logout()}>logout</Button>
      </div>
      
      </div>
      <div className="pt-2 m-3">
      </div>
      <h2>Employee details</h2>

      <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">position</th>
      <th scope="col">Email</th>

    </tr>
  </thead>
  <tbody>
  {userList.map((us) => (
            <tr >
              <th scope="row">{us.id}</th>
      <td>{us.name}</td>
      <td>{us.position}</td>
      <td>{us.email}</td>
            </tr>
          ))}
  </tbody>
</table>


<h2 className="pt-5">Lead status</h2>
<Button sx={{backgroundColor:"black",color:"white",marginRight:"10px",':hover': {
              bgcolor: 'black', 
              color: 'white'}}} variant="text" onClick={() => navigate("/addlead")}> Add Lead</Button>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Status</th>
      <th scope="col">date</th>
      <th scope="col">id</th>
      <th scope="col">contacted</th>
      <th scope="col">delete</th>

    </tr>
  </thead>
  <tbody>
  {lead.map((ldd) => (
            <tr >
              <th scope="row">{ldd.serviceStatus}</th>
      <td>{ldd.date}</td>
      <td>{ldd.id}</td>
      <td>{ldd.contacted}</td>
              <td><IconButton
              color="error"
              aria-label="deleteButton"
              onClick={() => {
                fetch(`${API}/addlead/${ldd.id}`, {
                  method: "DELETE",
                }).then(() => getLead());
              }}
            >
              <DeleteIcon />
            </IconButton></td>
            </tr>
          ))}
  </tbody>
</table>
    </div>
  );
}
