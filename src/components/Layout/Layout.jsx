import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Layout.module.css';

const Layout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to landing page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '101vh',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <AppBar position="static">
        <Toolbar sx={{ px: 0 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ ml: 2, mr: 4, fontWeight: 500 }}
          >
            FDS
          </Typography>
          <Box sx={{ flexGrow: 2, display: 'flex', gap: 3 }}>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/upload"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Upload Data
            </NavLink>
            <NavLink
              to="/dashboard/transactions"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Transactions
            </NavLink>
            <NavLink
              to="/dashboard/alerts"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Alerts
            </NavLink>
          </Box>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
