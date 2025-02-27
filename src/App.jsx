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

function App() {
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
              <Route index element={<Dashboard />} />
              <Route path="transactions" element={<TransactionList />} />
              <Route path="alerts" element={<AlertSection />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/upload" element={<DataUpload />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
