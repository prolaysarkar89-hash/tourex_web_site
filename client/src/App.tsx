import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Chats from './pages/Chats';
import Leads from './pages/Leads';
import Packages from './pages/Packages';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/chats" element={
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          } />
          
          <Route path="/leads" element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          } />
          
          <Route path="/packages" element={
            <ProtectedRoute>
              <Packages />
            </ProtectedRoute>
          } />

          <Route path="/settings" element={
            <ProtectedRoute>
              <div className="p-8 glass-card rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-4">Settings</h2>
                <p className="text-slate-400 italic">Configuration options coming soon...</p>
              </div>
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
