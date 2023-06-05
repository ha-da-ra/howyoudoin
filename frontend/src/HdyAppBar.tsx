
import { AppBar,  Icon, IconButton, Toolbar, Typography } from '@mui/material'

export function HydAppBar (){
    return ( <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        color="inherit"
        sx={{ mr: 2 }}
      >
        <Icon>menu</Icon>
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        How you doin?
      </Typography>
    </Toolbar>
  </AppBar>);
}