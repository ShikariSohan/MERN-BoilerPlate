import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RegisterModal from "../component/RegisterModal/RegisterModal";
import LoginModal from "../component/RegisterModal/LoginModal";

export default function Home() {
  const [Modal, setModalOpen] = useState(false);
  const [signInModal, setsignInModalOpen] = useState(false);
  const [type, setType] = useState("");

  const signUpHandler = () => {
    setType("signUp");
    setModalOpen(true);
  };
  const signInHandler = () => {
    console.log("yoooooo");
    setsignInModalOpen(true);
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction='row'>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                color: "black",
                fontFamily: "futura",
                fontWeight: "bold",
              }}>
              MyApp
            </Typography>
          </Stack>

          <Stack direction='row' spacing={4}>
            <Button onClick={signInHandler}>SignIn</Button>
            <Button onClick={signUpHandler}>SignUp</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {Modal && <RegisterModal open={Modal} handleClose={setModalOpen} />}
      {signInModal && (
        <LoginModal open={signInModal} handleClose={setsignInModalOpen} />
      )}
      <Typography variant='h1' component='h2'>
        HOME PAGE REACT BOILERPLATE
      </Typography>
    </>
  );
}
