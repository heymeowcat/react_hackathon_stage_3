import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import TtyIcon from "@mui/icons-material/Tty";

export const Header = () => {
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const user = sessionStorage.getItem("email");
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:640px)");

  const handleClose = () => {
    // setAnchorEl(null);
    sessionStorage.clear();
    toast.success("Successfully Logout ", {
      theme: "colored",
    });
    navigate("/");
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{ justifyContent: "space-between", background: "#0C356A" }}
        >
          <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }}>
            <TtyIcon style={{ width: 50 }} />
            <Typography
              onClick={() => navigate("/home")}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                ":hover": {
                  cursor: "pointer",
                },
              }}
              style={{ alignContent: "center" }}
            >
              Telecom Services
            </Typography>
          </Box>
          {isNonMobile ? (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {" "}
                Logged User{" "}
              </Typography>
              <span>:</span>{" "}
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                style={{ marginLeft: 4 }}
              >
                {" "}
                {user}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClose}
                color="inherit"
              >
                <LogoutIcon style={{ marginLeft: 4 }} />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MoreVertIcon sx={{ color: "#fff" }} />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Logged User <span>:</span>{" "}
                    <Typography style={{ marginLeft: 4 }}> {user}</Typography>
                  </Box>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LogoutIcon />
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
