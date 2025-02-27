import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Layout.module.css';

const Layout = () => {
  const { logout } = useAuth();
  const { mode, toggleTheme } = useTheme();

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
              to="/"
              end
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Transactions
            </NavLink>
            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Alerts
            </NavLink>
          </Box>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 2,
          bgcolor: 'grey.51',
          p: 4,
        }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
