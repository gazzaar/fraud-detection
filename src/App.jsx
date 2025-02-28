import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
  T123456: [1, { amount: '$2,500', time: '10:30 AM', risk: 'High' }],
  T123457: [0, { amount: '$150', time: '10:15 AM', risk: 'Low' }],
  T123458: [1, { amount: '$4,999', time: '10:00 AM', risk: 'Medium' }],
  T123459: [0, { amount: '$300', time: '09:45 AM', risk: 'Low' }],
  T123460: [1, { amount: '$1,999', time: '09:30 AM', risk: 'High' }],
  T123461: [0, { amount: '$50', time: '08:15 AM', risk: 'Low' }],
  T123462: [1, { amount: '$8,750', time: '07:30 AM', risk: 'High' }],
  T123463: [0, { amount: '$425', time: '06:45 AM', risk: 'Low' }],
  T123464: [1, { amount: '$15,000', time: '11:20 AM', risk: 'High' }],
  T123465: [0, { amount: '$899', time: '02:30 AM', risk: 'Low' }],
  T123466: [1, { amount: '$3,333', time: '01:15 AM', risk: 'Medium' }],
  T123467: [0, { amount: '$1,275', time: '04:20 AM', risk: 'Medium' }],
  T123468: [1, { amount: '$12,500', time: '12:05 PM', risk: 'High' }],
  T123469: [0, { amount: '$75', time: '11:50 AM', risk: 'Low' }],
  T123470: [1, { amount: '$5,500', time: '10:40 AM', risk: 'Medium' }],
  T123471: [0, { amount: '$250', time: '09:15 AM', risk: 'Low' }],
  T123472: [1, { amount: '$7,999', time: '08:30 AM', risk: 'High' }],
  T123473: [0, { amount: '$175', time: '07:45 AM', risk: 'Low' }],
  T123474: [1, { amount: '$6,666', time: '03:30 AM', risk: 'High' }],
  T123475: [0, { amount: '$445', time: '05:20 AM', risk: 'Low' }],
  T123476: [1, { amount: '$9,999', time: '02:45 AM', risk: 'High' }],
  T123477: [0, { amount: '$550', time: '01:30 AM', risk: 'Low' }],
  T123478: [1, { amount: '$4,444', time: '11:35 AM', risk: 'Medium' }],
  T123479: [0, { amount: '$825', time: '10:55 AM', risk: 'Low' }],
  T123480: [1, { amount: '$11,111', time: '09:40 AM', risk: 'High' }],
  T123481: [0, { amount: '$95', time: '08:45 AM', risk: 'Low' }],
  T123482: [1, { amount: '$3,777', time: '07:15 AM', risk: 'Medium' }],
  T123483: [0, { amount: '$225', time: '06:30 AM', risk: 'Low' }],
  T123484: [1, { amount: '$8,888', time: '05:45 AM', risk: 'High' }],
  T123485: [0, { amount: '$650', time: '04:30 AM', risk: 'Low' }],
};
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
