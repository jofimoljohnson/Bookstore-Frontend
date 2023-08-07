import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <div>
      <Box display={'flex'} flexDirection={"column"} alignItems={"center"}>
        <Button LinkComponent={Link} to="/books"  sx={{marginTop:"15px",background:"orangered"}} variant='contained'>
          <Typography variant='h3'>View All Products</Typography>
        </Button>
      </Box>




    </div>
  )
}

export default Home