import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <div sx={{ mb: "100px", position:'fixed' , zIndex: '1000' }}>
      <AppBar sx={{ backgroundColor: "#232F3D" }}>
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1, ml: 1 }}
            >
              <MenuBookIcon />
            </IconButton>
          </NavLink>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Book Store
            </Typography>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/about" label="ABOUT Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
