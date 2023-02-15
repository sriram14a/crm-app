import { useEffect, useState } from "react";
import { API } from "../../../db";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export function Employeedashboard() {
  const [lead, setLead] = useState([]);
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();


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
    fetch(`${API}/user/employeedata`, {
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
   navigate("/employeelogin")
  }

  return (
    <div className="background scroller container pt-5">
      <div className="d-flex justify-content-between">
      <div>
        <h1 className="text-center">Employee Dashboard</h1>
      </div>
      <div className="text-align">
        <span className="text-align bg-success text-light rounded p-2 fw-bold ">{userData.email}</span>
      <Button sx={{color:"black",marginRight:"10px",':hover': {
              bgcolor: 'black', 
              color: 'white'}}} variant="text" onClick={() => logout()}>logout</Button>
      </div>
      </div>

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

    </tr>
  </thead>
  <tbody>
  {lead.map((ldd,index) => (
            <tr >
              <th scope="row">{ldd.serviceStatus}</th>
      <td>{ldd.date}</td>
      <td>{ldd.id}</td>
      <td>{ldd.contacted}</td>
            </tr>
          ))}
  </tbody>
</table>
    </div>
  );
}
