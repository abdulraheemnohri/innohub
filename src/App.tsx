import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import IdeaBoard from './pages/IdeaBoard';
import Profile from './pages/Profile';
import Showcase from './pages/Showcase';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ideas" element={<IdeaBoard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;