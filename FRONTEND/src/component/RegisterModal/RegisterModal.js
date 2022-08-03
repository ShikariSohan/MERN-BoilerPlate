import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
export default function RegisterModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // mail change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    props.handleClose(false);

    await axios
      .post("http://localhost:4000/api/user", newUser)
      .then(function (res) {
        console.log(newUser);
        console.log(res);
      })
      .catch(function (e) {
        console.log(e);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.handleClose(false);
      }}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <form onSubmit={submitHandler}>
        <Stack direction='column' spacing={4} sx={style}>
          <Typography variant='h6' sx={{ textAlign: "center" }}>
            SignUp
          </Typography>

          <TextField
            id='filled-basic'
            label='Email'
            type='text'
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            id='filled-basic'
            label='Password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />

          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}
