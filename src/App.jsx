import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AlertSection from './components/AlertSection/AlertSection';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
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
  T123499: [1, { amount: '$700', time: '03:45 AM', risk: 'Low' }],
  T123489: [0, { amount: '$300', time: '05:45 AM', risk: 'Medium' }],
  T123460: [1, { amount: '$1,999', time: '09:30 AM', risk: 'High' }],
  // ... rest of your data ...
};

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
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
