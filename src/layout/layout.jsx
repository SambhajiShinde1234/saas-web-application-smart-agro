import { Box } from '@mui/material'
import React from 'react'

const layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <Sidebar />
        <main>
            <Navbar />
            
        </main>
    </Box>
  )
}

export default layout