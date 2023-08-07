import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { LuBook } from "react-icons/lu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:"#232F3D"}} position="stickey">
                <Toolbar>
                  <NavLink to="/" style={{color:"white"}}>
                        <Typography>
                            <LuBook />
                        </Typography>
                  </NavLink>
                    <Tabs 
                    sx={{ml:"auto"}}
                    
                    textColor="inherit" 
                    indicatorColor="secondary"
                     value={value}
                      onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                        <Tab LinkComponent={NavLink} to="/books" label="Books" />

                        <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
