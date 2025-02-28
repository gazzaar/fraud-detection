// import './AlertSection.css';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import styles from '../Dashboard/Dashboard.module.css';

const AlertSection = ({ data }) => {
  const [severityFilter, setSeverityFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Transform suspicious transactions into alerts
  const alerts = Object.entries(data)
    .filter(([_, [isFraud]]) => isFraud === true)
    .map(([id, [_, details]]) => ({
      id,
      userName: details.fullname || 'N/A',
      amount: details.amount,
      isFraud: 'Yes',
      reason: details.reason || 'Suspicious Activity',
    }));

  const filteredAlerts = alerts.filter(
    (alert) =>
      searchTerm === '' ||
      alert.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return 'error';
      case 'Under Review':
        return 'warning';
      case 'Resolved':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="h4" component="h1">
            Fraud Alerts
          </Typography>
        </div>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 3 }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ minWidth: 200 }}
          />
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Severity</InputLabel>
            <Select
              value={severityFilter}
              label="Severity"
              onChange={(e) => setSeverityFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Fraud</TableCell>
                  <TableCell>Reason</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow
                    key={alert.id}
                    sx={{
                      bgcolor: 'error.lighter',
                      '&:hover': {
                        bgcolor: 'error.light',
                      },
                    }}
                  >
                    <TableCell>{alert.id}</TableCell>
                    <TableCell>{alert.userName}</TableCell>
                    <TableCell>{alert.amount}</TableCell>
                    <TableCell>{alert.isFraud}</TableCell>
                    <TableCell>{alert.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </Container>
  );
};

export default AlertSection;
