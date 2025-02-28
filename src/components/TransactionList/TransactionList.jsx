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

const TransactionList = ({ data }) => {
  const [riskFilter, setRiskFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Transform data object into array format
  const transactions = Object.entries(data).map(
    ([id, [fraudIndicator, details]]) => ({
      id,
      time: details.time,
      amount: details.amount,
      status: fraudIndicator === 1 ? 'Suspicious' : 'Normal',
      risk: details.risk,
    })
  );

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (riskFilter === 'all' || transaction.risk === riskFilter) &&
      (searchTerm === '' ||
        transaction.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()))
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
                  <TableCell>{transaction.id}</TableCell>
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
