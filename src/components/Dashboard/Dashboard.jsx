import PaymentsIcon from '@mui/icons-material/Payments';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import {
  Box,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data - replace with actual API calls
  const [recentTransactions] = useState([
    {
      id: 1,
      time: '10:30 AM',
      amount: '$2,500',
      status: 'Suspicious',
      risk: 'High',
    },
    {
      id: 2,
      time: '10:15 AM',
      amount: '$150',
      status: 'Normal',
      risk: 'Low',
    },
    {
      id: 3,
      time: '10:00 AM',
      amount: '$4,999',
      status: 'Suspicious',
      risk: 'Medium',
    },
  ]);

  // Mock data for charts
  const transactionData = [
    { name: '00:00', normal: 40, suspicious: 2 },
    { name: '04:00', normal: 30, suspicious: 1 },
    { name: '08:00', normal: 60, suspicious: 3 },
    { name: '12:00', normal: 100, suspicious: 4 },
    { name: '16:00', normal: 80, suspicious: 2 },
    { name: '20:00', normal: 50, suspicious: 3 },
  ];

  const riskDistribution = [
    { name: 'Low Risk', value: 70, color: '#82ca9d' },
    { name: 'Medium Risk', value: 20, color: '#ffc658' },
    { name: 'High Risk', value: 10, color: '#ff8042' },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Fraud Detection System
        </Typography>
      </Box>

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <Box flex={1}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 200,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUpIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Detection Rate</Typography>
            </Box>
            <Typography variant="h3" component="div" sx={{ mb: 2 }}>
              98%
            </Typography>
            <Typography color="text.secondary">
              Accuracy in fraud detection
            </Typography>
          </Paper>
        </Box>

        <Box flex={1}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 200,
              bgcolor: 'error.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WarningIcon sx={{ mr: 1 }} />
              <Typography variant="h6">Active Alerts</Typography>
            </Box>
            <Typography variant="h3" component="div" sx={{ mb: 2 }}>
              5
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Requires immediate attention
            </Typography>
          </Paper>
        </Box>

        <Box flex={1}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 200,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PaymentsIcon sx={{ mr: 1, color: 'success.main' }} />
              <Typography variant="h6">Transaction Volume</Typography>
            </Box>
            <Typography variant="h3" component="div" sx={{ mb: 2 }}>
              1.2k
            </Typography>
            <Typography color="text.secondary">
              Transactions processed today
            </Typography>
          </Paper>
        </Box>
      </Stack>

      {/* Charts Section */}
      <Stack spacing={3} sx={{ mb: 4 }}>
        {/* Transaction Volume Chart */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Transaction Volume (24h)
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={transactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="normal"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
                name="Normal Transactions"
              />
              <Area
                type="monotone"
                dataKey="suspicious"
                stackId="1"
                stroke="#ff8042"
                fill="#ff8042"
                name="Suspicious Transactions"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>

        {/* Risk Distribution */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Paper sx={{ p: 3, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Risk Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>

          {/* Fraud Detection Accuracy Trend */}
          <Paper sx={{ p: 3, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Detection Accuracy Trend
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { name: 'Mon', accuracy: 95 },
                  { name: 'Tue', accuracy: 97 },
                  { name: 'Wed', accuracy: 96 },
                  { name: 'Thu', accuracy: 98 },
                  { name: 'Fri', accuracy: 97 },
                  { name: 'Sat', accuracy: 98 },
                  { name: 'Sun', accuracy: 99 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[90, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#82ca9d"
                  name="Accuracy %"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Stack>
      </Stack>

      {/* Recent Transactions Table */}
      <Box>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Recent Suspicious Transactions
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Risk Level</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentTransactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    sx={{
                      bgcolor:
                        transaction.risk === 'High'
                          ? 'error.lighter'
                          : transaction.risk === 'Medium'
                          ? 'warning.lighter'
                          : 'inherit',
                    }}
                  >
                    <TableCell>{transaction.time}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                    <TableCell>{transaction.risk}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
