import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { Navbar } from '../../Navbar/navbar';
import { API } from '../../../db';


export function Signupman() {
	const navigate = useNavigate()

	const [firstname, setFirstName] = useState('')
	const [lastname, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch(`${API}/user/manager`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstname,
        lastname,
				email,
				password,
			}),
		})

		const data = await response.json()

    if(data.message === "Username already taken"){
      alert("User already exist try Another mail id")
    }

    if(data.message === "Password strength"){
      alert("Password must have 1 caps 1 small letter , number, special charecter and should be min 8 characters")
    }

		if (data.status === 'ok') {
      alert("Successfully Registered");
			navigate('/managerlogin')
		}
	}

	return (
		<div className='position'>
      <div>
        <Navbar/>
      </div>
      <div className='login-section pt-5 mt-5'>
			<h1 className='text-center'>signup</h1>
			<form onSubmit={registerUser}>
        <TextField
            style={{
              backgroundColor: "white",
              marginTop: "15px",
              width: "100%",
              borderRadius: "10px",
            }}
            label="First Name"
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Enter Firstname"
            value={firstname}
          />
				<br />
        <TextField
            style={{
              backgroundColor: "white",
              marginTop: "15px",
              width: "100%",
              borderRadius: "10px",
            }}
            label="Last Name"
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Enter Lastname"
            value={lastname}
          />
				<br />
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
            Register
          </Button>
			</form>
      <div className='text-center pt-2'>
      <Link className='text-decoration-none' to="/managerlogin"> Login</Link>
      </div>

		</div>
    </div>
	)
}