import { Box, Container, Grid } from '@mui/material'
import { useState } from 'react'
import { HydAppBar } from './HdyAppBar'
import { LineChart } from './LineChart'

function App() {

  return (
    <Box >
      <HydAppBar />
      <Container maxWidth="lg" sx={{ height: "80vh", p:2 }}>
        <LineChart />
      </Container>
    </Box>
  )
}

export default App
