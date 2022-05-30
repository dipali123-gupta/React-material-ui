import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  Icon,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { CodeOffOutlined, Mail, Notifications } from "@mui/icons-material";
import { width } from "@mui/system";

const StyledToolbar = styled(Toolbar)({
  dispaly: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  dispaly: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
    const [open, setOpen] = useState(false)




  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {" "}
          Dev-con
        </Typography>
        <CodeOffOutlined sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar src="https://www.pexels.com/photo/woman-wearing-sunhat-1382731/" sx={{ width: 30, height: 30 }} onClick={e=>setOpen(true)} />
        </Icons>

        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="span">Dipali</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      open={open}
      onClose={(e) => setOpen(false)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem >Profile</MenuItem>
      <MenuItem >My account</MenuItem>
      <MenuItem >Logout</MenuItem>
    </Menu>
    </AppBar>
  );
}

export default Navbar;
