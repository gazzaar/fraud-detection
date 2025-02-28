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
import { useMemo } from 'react';
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

const Dashboard = ({ data }) => {
  const theme = useMUITheme();

  // Memoize chartColors to prevent recreation on every render
  const chartColors = useMemo(
    () => ({
      normal: theme.palette.primary.main,
      suspicious: theme.palette.error.main,
      low: theme.palette.success.main,
      medium: theme.palette.warning.main,
      high: theme.palette.error.main,
    }),
    [theme.palette]
  );

  // Calculate fraudCount once when data changes
  const fraudCount = useMemo(() => {
    return Object.entries(data).filter(
      ([_, [fraudIndicator]]) => fraudIndicator === 1
    ).length;
  }, [data]);

  // Transform data for charts - memoized to prevent recalculation
  const chartData = useMemo(() => {
    // Group transactions by hour for the transaction volume chart
    const hourlyData = {};
    Object.entries(data).forEach(([_, [fraudIndicator, details]]) => {
      const hour = details.time.split(':')[0];
      const timeKey = `${hour}:00`;

      if (!hourlyData[timeKey]) {
        hourlyData[timeKey] = { name: timeKey, normal: 0, suspicious: 0 };
      }

      if (fraudIndicator === 1) {
        hourlyData[timeKey].suspicious += 1;
      } else {
        hourlyData[timeKey].normal += 1;
      }
    });

    // Calculate risk distribution
    const riskCounts = { Low: 0, Medium: 0, High: 0 };
    Object.values(data).forEach(([_, details]) => {
      riskCounts[details.risk] += 1;
    });

    return {
      transactionVolume: Object.values(hourlyData).sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
      riskDistribution: [
        { name: 'Low Risk', value: riskCounts.Low, color: chartColors.low },
        {
          name: 'Medium Risk',
          value: riskCounts.Medium,
          color: chartColors.medium,
        },
        { name: 'High Risk', value: riskCounts.High, color: chartColors.high },
      ],
    };
  }, [data, chartColors]);

  // Update the recentTransactions to limit to 10 entries
  const recentTransactions = useMemo(() => {
    return Object.entries(data)
      .map(([id, [fraudIndicator, details]]) => ({
        id,
        time: details.time,
        amount: details.amount,
        status: fraudIndicator === 1 ? 'Suspicious' : 'Normal',
        risk: details.risk,
      }))
      .sort(
        (a, b) =>
          new Date('1970/01/01 ' + b.time) - new Date('1970/01/01 ' + a.time)
      )
      .slice(0, 10); // Limit to 10 most recent transactions
  }, [data]);

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
              <WarningIcon className={styles.cardIcon} color="error" />
              <Typography className={styles.cardTitle}>
                Active Alerts ({fraudCount})
              </Typography>
            </div>
            <div className={styles.cardContent}>
              {Object.entries(data).map(
                ([transactionId, [fraudIndicator, details]]) =>
                  fraudIndicator === 1 && (
                    <div key={transactionId} className={styles.alertItem}>
                      <Typography>Transaction ID: {transactionId}</Typography>
                      {/* You can display more details here based on your needs */}
                    </div>
                  )
              )}
            </div>
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
              <AreaChart data={chartData.transactionVolume}>
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
                    data={chartData.riskDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartData.riskDistribution.map((entry, index) => (
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
