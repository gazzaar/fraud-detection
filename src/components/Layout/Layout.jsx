import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Layout.css';

const Layout = () => {
  const { logout } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
            FDS
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            <Button color="inherit" component={NavLink} to="/" end>
              Dashboard
            </Button>
            <Button color="inherit" component={NavLink} to="/transactions">
              Transactions
            </Button>
            <Button color="inherit" component={NavLink} to="/alerts">
              Alerts
            </Button>
          </Box>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
