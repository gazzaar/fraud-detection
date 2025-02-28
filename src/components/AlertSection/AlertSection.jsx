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

const AlertSection = ({ data }) => {
  const [severityFilter, setSeverityFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Transform suspicious transactions into alerts
  const alerts = Object.entries(data)
    .filter(([_, [fraudIndicator]]) => fraudIndicator === 1)
    .map(([id, [_, details]]) => ({
      id,
      timestamp: details.time,
      description: `Suspicious transaction detected - Amount: ${details.amount}`,
      severity: details.risk,
      status: 'New', // You might want to add status to your data object
      transactionId: id,
    }));

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
