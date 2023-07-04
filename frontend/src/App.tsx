import { Box, Container, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { HydAppBar } from './HdyAppBar'
import { MoodChart as MoodChart } from './MoodChart'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider, DesktopDatePicker  } from '@mui/x-date-pickers';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function App() {
  var date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const changeYear = function (date: Date) {
    setYear(date.getFullYear());
  };
  const changeMonth = function (date: Date) {
    setMonth(date.getMonth());
  };
  return (
    <Box >
      <HydAppBar />
      <Container maxWidth="lg" sx={{ height: "80vh", p: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker  disableFuture label={'Month'} views={['month', 'year']} 
            onYearChange={changeYear} 
            onMonthChange={changeMonth}
            defaultValue={date}
            slotProps={{
              textField: {
                disabled: true
              },
            }} />
        </LocalizationProvider>
        <MoodChart year={year} month={month} />
      </Container>
    </Box>
  )
}

export default App
