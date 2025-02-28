// import './TransactionList.css';

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

const TransactionList = ({ data }) => {
  const [riskFilter, setRiskFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Transform data object into array format
  const transactions = Object.entries(data).map(([id, [isFraud, details]]) => ({
    id,
    userName: details.fullname || 'N/A',
    amount: details.amount,
    isFraud: isFraud ? 'Yes' : 'No',
    reason:
      details.reason ||
      (isFraud ? 'Suspicious Activity' : 'Normal Transaction'),
  }));

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (riskFilter === 'all' ||
        (riskFilter === 'High'
          ? transaction.isFraud === 'Yes'
          : transaction.isFraud === 'No')) &&
      (searchTerm === '' ||
        transaction.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="h4" component="h1">
            Transactions
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
            <InputLabel>Risk Level</InputLabel>
            <Select
              value={riskFilter}
              label="Risk Level"
              onChange={(e) => setRiskFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
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
                {filteredTransactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    sx={{
                      bgcolor:
                        transaction.isFraud === 'Yes'
                          ? 'error.lighter'
                          : 'inherit',
                      '&:hover': {
                        bgcolor:
                          transaction.isFraud === 'Yes'
                            ? 'error.light'
                            : 'grey.100',
                      },
                    }}
                  >
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.userName}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.isFraud}</TableCell>
                    <TableCell>{transaction.reason}</TableCell>
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

export default TransactionList;
