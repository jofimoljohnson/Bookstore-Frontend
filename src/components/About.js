import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
    //aboutt section 
    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Typography sx={{ fontFamily: "sanserif" }} variant="h2">
                  This is a CRUD Application 
                </Typography>
                <Typography variant="h3">By mernstack</Typography>
            </Box>
        </div>
    );
}

export default About;
