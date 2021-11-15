import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/MenuIcon";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import { Container } from "@mui/material";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Watch Shop
          </Typography>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button style={{ color: "white" }}>Home</Button>
          </Link>
          {user.email ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button style={{ color: "white" }}>Dashboard</Button>
              </Link>
              <img
                src={user?.photoURL}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "60%",
                  marginRight: "3px",
                }}
                alt=""
              />
              <Typography> {user.displayName}</Typography>
              <Button style={{ color: "white" }} onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
