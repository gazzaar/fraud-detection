import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Layout.module.css';

const Layout = () => {
  const { logout } = useAuth();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 4, fontWeight: 500 }}
            >
              FDS
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
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
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'grey.50',
          p: 3,
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
