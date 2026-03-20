import { useNavigate } from 'react-router';
import { Register } from '../../components/authComponents/Register';

export function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <Register
      onRegister={handleRegister}
      onGoToLogin={() => navigate('/login')}
    />
  );
}
