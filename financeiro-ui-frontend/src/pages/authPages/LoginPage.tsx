import { useNavigate } from 'react-router';
import { Login } from '../../components/authComponents/Login';

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <Login
      onLogin={handleLogin}
      onGoToRegister={() => navigate('/cadastro')}
      onGoToForgotPassword={() => navigate('/recuperar-senha')}
    />
  );
}