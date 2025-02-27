// import './AlertSection.css';
import {
  Box,
  Chip,
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

const AlertSection = () => {
  const [severityFilter, setSeverityFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with API call
  const alerts = [
    {
      id: 1,
      timestamp: '2024-03-20 10:30 AM',
      description: 'Multiple high-value transactions in short period',
      severity: 'High',
      status: 'New',
      transactionId: 'TXN123456',
    },
    {
      id: 2,
      timestamp: '2024-03-20 10:15 AM',
      description: 'Unusual location for transaction',
      severity: 'Medium',
      status: 'Under Review',
      transactionId: 'TXN123457',
    },
    {
      id: 3,
      timestamp: '2024-03-20 10:00 AM',
      description: 'Transaction pattern deviation detected',
      severity: 'Low',
      status: 'Resolved',
      transactionId: 'TXN123458',
    },
  ];

  const filteredAlerts = alerts.filter(
    (alert) =>
      (severityFilter === 'all' || alert.severity === severityFilter) &&
      (searchTerm === '' ||
        alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alert.transactionId.toLowerCase().includes(searchTerm.toLowerCase()))
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
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Fraud Alerts
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
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
                <TableCell>Time</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Severity</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAlerts.map((alert) => (
                <TableRow
                  key={alert.id}
                  sx={{
                    bgcolor:
                      alert.severity === 'High'
                        ? 'error.lighter'
                        : alert.severity === 'Medium'
                        ? 'warning.lighter'
                        : 'inherit',
                    '&:hover': {
                      bgcolor:
                        alert.severity === 'High'
                          ? 'error.light'
                          : alert.severity === 'Medium'
                          ? 'warning.light'
                          : 'grey.100',
                    },
                  }}
                >
                  <TableCell>{alert.timestamp}</TableCell>
                  <TableCell>{alert.description}</TableCell>
                  <TableCell>{alert.transactionId}</TableCell>
                  <TableCell>{alert.severity}</TableCell>
                  <TableCell>
                    <Chip
                      label={alert.status}
                      color={getStatusColor(alert.status)}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AlertSection;
