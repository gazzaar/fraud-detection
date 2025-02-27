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
import { useTheme as useMUITheme } from '@mui/material/styles';
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
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const theme = useMUITheme();

  // Update chart colors based on theme
  const chartColors = {
    normal: theme.palette.primary.main,
    suspicious: theme.palette.error.main,
    low: theme.palette.success.main,
    medium: theme.palette.warning.main,
    high: theme.palette.error.main,
  };

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
    { name: 'Low Risk', value: 70, color: chartColors.low },
    { name: 'Medium Risk', value: 20, color: chartColors.medium },
    { name: 'High Risk', value: 10, color: chartColors.high },
  ];

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="h4" component="h1">
            Fraud Detection System
          </Typography>
        </div>

        <div className={styles.grid} style={{ marginBottom: '24px' }}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <TrendingUpIcon className={styles.cardIcon} color="primary" />
              <Typography className={styles.cardTitle}>
                Detection Rate
              </Typography>
            </div>
            <Typography className={styles.cardValue}>98%</Typography>
            <Typography className={styles.cardSubtext}>
              Accuracy in fraud detection
            </Typography>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <WarningIcon className={styles.cardIcon} />
              <Typography className={styles.cardTitle}>
                Active Alerts
              </Typography>
            </div>
            <Typography className={styles.cardValue}>5</Typography>
            <Typography className={styles.cardSubtext}>
              Requires immediate attention
            </Typography>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <PaymentsIcon className={styles.cardIcon} color="success" />
              <Typography className={styles.cardTitle}>
                Transaction Volume
              </Typography>
            </div>
            <Typography className={styles.cardValue}>1.2k</Typography>
            <Typography className={styles.cardSubtext}>
              Transactions processed today
            </Typography>
          </div>
        </div>

        {/* Charts Section */}
        <Stack spacing={3} sx={{ mb: 4 }}>
          {/* Transaction Volume Chart */}
          <Paper
            sx={{
              bgcolor: 'white',
              borderRadius: '0.75rem',
              p: 3,
              mt: 4,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
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
                  stroke={chartColors.normal}
                  fill={chartColors.normal}
                  name="Normal Transactions"
                />
                <Area
                  type="monotone"
                  dataKey="suspicious"
                  stackId="1"
                  stroke={chartColors.suspicious}
                  fill={chartColors.suspicious}
                  name="Suspicious Transactions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
          {/* Risk Distribution */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Paper
              sx={{
                bgcolor: 'white',
                borderRadius: '0.75rem',
                p: 3,
                mt: 4,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                flex: 1,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
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
            <Paper
              sx={{
                bgcolor: 'white',
                borderRadius: '0.75rem',
                p: 3,
                mt: 4,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                flex: 1,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
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
          <Paper
            sx={{
              bgcolor: 'white',
              borderRadius: '0.75rem',
              p: 3,
              mt: 4,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
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
      </div>
    </Container>
  );
};

export default Dashboard;
