// import './TransactionList.css';

import {
  Box,
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

const TransactionList = () => {
  const [riskFilter, setRiskFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with API call
  const transactions = [
    {
      id: 1,
      time: '2024-03-20 10:30 AM',
      amount: '$2,500',
      merchant: 'Amazon',
      status: 'Suspicious',
      risk: 'High',
    },
    {
      id: 2,
      time: '2024-03-20 10:15 AM',
      amount: '$150',
      merchant: 'Walmart',
      status: 'Normal',
      risk: 'Low',
    },
    {
      id: 3,
      time: '2024-03-20 10:00 AM',
      amount: '$4,999',
      merchant: 'Best Buy',
      status: 'Suspicious',
      risk: 'Medium',
    },
    // Add more mock transactions as needed
  ];

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (riskFilter === 'all' || transaction.risk === riskFilter) &&
      (searchTerm === '' ||
        transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.amount.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Transactions
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
          <InputLabel>Risk Level</InputLabel>
          <Select
            value={riskFilter}
            label="Risk Level"
            onChange={(e) => setRiskFilter(e.target.value)}
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
                <TableCell>Amount</TableCell>
                <TableCell>Merchant</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Risk Level</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  sx={{
                    bgcolor:
                      transaction.risk === 'High'
                        ? 'error.lighter'
                        : transaction.risk === 'Medium'
                        ? 'warning.lighter'
                        : 'inherit',
                    '&:hover': {
                      bgcolor:
                        transaction.risk === 'High'
                          ? 'error.light'
                          : transaction.risk === 'Medium'
                          ? 'warning.light'
                          : 'grey.100',
                    },
                  }}
                >
                  <TableCell>{transaction.time}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.merchant}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                  <TableCell>{transaction.risk}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TransactionList;
