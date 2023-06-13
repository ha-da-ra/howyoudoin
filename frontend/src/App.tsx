import { Box, Container, Grid } from '@mui/material'
import { useState } from 'react'
import { HydAppBar } from './HdyAppBar'
import { MoodChart as MoodChart } from './MoodChart'

function App() {

  return (
    <Box >
      <HydAppBar />
      <Container maxWidth="lg" sx={{ height: "80vh", p:2 }}>
        <MoodChart />
      </Container>
    </Box>
  )
}

export default App
