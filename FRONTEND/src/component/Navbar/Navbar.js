import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const CustomButton = styled("button")({
  variant: "text",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Roboto",
  fontSize: "15px",
  border: "none",
  backgroundColor: "inherit",
  cursor: "pointer",
});
export default function Navbar() {
  const [signUpModal, setsignUpModalOpen] = useState(false);
  const signUpHandler = () => {
    setsignUpModalOpen(true);
  };
  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: "black",
          marginLeft: "20px",
          boxShadow: "none",
          color: "black",
        }}>
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
              HireMe
            </Typography>
          </Stack>

          <Stack direction='row' spacing={4}>
            <CustomButton>Explore</CustomButton>
            <CustomButton>Become a service provider</CustomButton>
            <CustomButton onClick={signUpHandler}>SignIn</CustomButton>
            <CustomButton>Join</CustomButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
