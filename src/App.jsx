import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AlertSection from './components/AlertSection/AlertSection';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import TransactionList from './components/TransactionList/TransactionList';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import DataUpload from './pages/DataUpload';

// Move the data object outside the component
const mockData = {
  T123456: [
    true,
    {
      amount: '$2,500',
      fullname: 'John Doe',
      time: '10:30 AM',
      reason: 'Multiple high-value transactions in short period',
    },
  ],
  T123457: [
    false,
    {
      amount: '$150',
      fullname: 'Alice Smith',
      time: '10:15 AM',
      reason: 'Normal transaction pattern',
    },
  ],
  T123458: [
    true,
    {
      amount: '$4,999',
      fullname: 'Bob Wilson',
      time: '10:00 AM',
      reason: 'Unusual location for transaction',
    },
  ],
  T123459: [
    true,
    {
      amount: '$3,000',
      fullname: 'Emma Brown',
      time: '09:45 AM',
      reason: 'Transaction amount deviation from user pattern',
    },
  ],
  T123460: [
    false,
    {
      amount: '$75',
      fullname: 'Charlie Davis',
      time: '09:30 AM',
      reason: 'Normal transaction pattern',
    },
  ],
  T123461: [
    true,
    {
      amount: '$8,500',
      fullname: 'Grace Taylor',
      time: '09:15 AM',
      reason: 'Suspicious merchant category',
    },
  ],
  T123462: [
    false,
    {
      amount: '$250',
      fullname: 'David Miller',
      time: '09:00 AM',
      reason: 'Normal transaction pattern',
    },
  ],
  T123463: [
    true,
    {
      amount: '$1,200',
      fullname: 'Sophie Clark',
      time: '08:45 AM',
      reason: 'Time-based anomaly detected',
    },
  ],
  T123464: [
    false,
    {
      amount: '$180',
      fullname: 'James Wilson',
      time: '08:30 AM',
      reason: 'Normal transaction pattern',
    },
  ],
  T123465: [
    true,
    {
      amount: '$5,500',
      fullname: 'Olivia Moore',
      time: '08:15 AM',
      reason: 'Multiple transactions from different locations',
    },
  ],
  T123466: [
    true,
    {
      amount: '$3,333',
      time: '01:15 AM',
      fullname: 'Michael Johnson',
      reason: 'Unusual transaction pattern',
    },
  ],
  T123467: [
    false,
    {
      amount: '$1,275',
      time: '04:20 AM',
      fullname: 'Sarah Williams',
      reason: 'Normal transaction pattern',
    },
  ],
  T123468: [
    true,
    {
      amount: '$12,500',
      time: '12:05 PM',
      fullname: 'Daniel Brown',
      reason: 'Large amount transaction detected',
    },
  ],
  T123469: [
    false,
    {
      amount: '$75',
      time: '11:50 AM',
      fullname: 'Emily Davis',
      reason: 'Normal transaction pattern',
    },
  ],
  T123470: [
    true,
    {
      amount: '$5,500',
      time: '10:40 AM',
      fullname: 'William Taylor',
      reason: 'Multiple transactions in short period',
    },
  ],
  T123471: [
    false,
    {
      amount: '$250',
      time: '09:15 AM',
      fullname: 'Laura Anderson',
      reason: 'Normal transaction pattern',
    },
  ],
  T123472: [
    true,
    {
      amount: '$7,999',
      time: '08:30 AM',
      fullname: 'Robert Martin',
      reason: 'High-value transaction from new device',
    },
  ],
  T123473: [
    false,
    {
      amount: '$175',
      time: '07:45 AM',
      fullname: 'Jennifer White',
      reason: 'Normal transaction pattern',
    },
  ],
  T123474: [
    true,
    {
      amount: '$6,666',
      time: '03:30 AM',
      fullname: 'Thomas Lee',
      reason: 'Unusual transaction time',
    },
  ],
  T123475: [
    false,
    {
      amount: '$445',
      time: '05:20 AM',
      fullname: 'Patricia Moore',
      reason: 'Normal transaction pattern',
    },
  ],
  T123476: [
    true,
    {
      amount: '$9,999',
      time: '02:45 AM',
      fullname: 'George Wilson',
      reason: 'Suspicious amount pattern',
    },
  ],
  T123477: [
    false,
    {
      amount: '$550',
      time: '01:30 AM',
      fullname: 'Elizabeth Clark',
      reason: 'Normal transaction pattern',
    },
  ],
  T123478: [
    true,
    {
      amount: '$4,444',
      time: '11:35 AM',
      fullname: 'Richard Hall',
      reason: 'Multiple location access',
    },
  ],
  T123479: [
    false,
    {
      amount: '$825',
      time: '10:55 AM',
      fullname: 'Susan Wright',
      reason: 'Normal transaction pattern',
    },
  ],
  T123480: [
    true,
    {
      amount: '$11,111',
      time: '09:40 AM',
      fullname: 'Joseph King',
      reason: 'Large amount from unusual location',
    },
  ],
  T123481: [
    false,
    {
      amount: '$95',
      time: '08:45 AM',
      fullname: 'Margaret Young',
      reason: 'Normal transaction pattern',
    },
  ],
  T123482: [
    true,
    {
      amount: '$3,777',
      time: '07:15 AM',
      fullname: 'Christopher Scott',
      reason: 'Unusual merchant pattern',
    },
  ],
  T123483: [
    false,
    {
      amount: '$225',
      time: '06:30 AM',
      fullname: 'Barbara Lewis',
      reason: 'Normal transaction pattern',
    },
  ],
  T123484: [
    true,
    {
      amount: '$8,888',
      time: '05:45 AM',
      fullname: 'Kevin Baker',
      reason: 'Multiple high-risk indicators',
    },
  ],
  T123485: [
    false,
    {
      amount: '$650',
      time: '04:30 AM',
      fullname: 'Linda Green',
      reason: 'Normal transaction pattern',
    },
  ],
};
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard data={mockData} />} />
              <Route
                path="transactions"
                element={<TransactionList data={mockData} />}
              />
              <Route path="alerts" element={<AlertSection data={mockData} />} />
              <Route path="upload" element={<DataUpload />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
