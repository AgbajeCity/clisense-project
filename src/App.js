import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUser } from './contexts/UserContext';

// Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import RecommendationsPage from './pages/RecommendationsPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

function App() {
  const { currentUser, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-50">
        <div className="w-16 h-16 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<HomePage />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="risks" element={<RiskAssessmentPage />} />
        <Route path="recommendations" element={<RecommendationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
