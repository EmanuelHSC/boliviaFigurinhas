// src/components/navBar.jsx

import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { createTheme, ThemeProvider, styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import ProfileMenu from "./profileMenu";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 8,
  width: "auto",
  minWidth: 500,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E7F00", 
    },
    text: {
      primary: "#ffffff",
    },
  },
});


const StyledToolbar = styled(Toolbar)({
  minHeight: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: "all 0.3s ease",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const HoverableIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[700], 0.35),
    transition: "background-color 0.3s",
  },
}));

const HoverableProfileMenu = styled(ProfileMenu)(({ theme }) => ({
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[700], 0.35),
    transition: "background-color 0.3s",
  },
}));

export default function NavBar() {
  const quantityCart = useSelector((state) => state.cart.qtd);

  const handleHomeClick = () => {
    console.log("Home Clicked!");
  };

  const handleCartClick = () => {
    console.log("Shopping Cart Clicked!");
  };

  const handleProfileClick = () => {
    console.log("Profile Clicked!");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <StyledToolbar>
          <Link to="/">
            <IconButton color="#001000" onClick={handleHomeClick}>
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, fontSize: "1.25rem" }} color="textPrimary">
            Bolivia Figurinhas
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Busque aqui seu produto..." inputProps={{ "aria-label": "search" }} />
          </Search>
          <div>
            <Link to="/carrinho" style={{ textDecoration: "none", color: "inherit" }}>
              <HoverableIconButton color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={quantityCart ? quantityCart : "0"}>
                  <ShoppingCartIcon />
                </Badge>
              </HoverableIconButton>
            </Link>
            <HoverableProfileMenu color="inherit" onClick={handleProfileClick}>
              <PersonIcon />
            </HoverableProfileMenu>
          </div>
        </StyledToolbar>
      </AppBar>
    </ThemeProvider>
  );
}
