import { useNavigate } from 'react-router';
import { ForgotPassword } from '../../components/authComponents/ForgotPassword';

export function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <ForgotPassword
      onGoToLogin={() => navigate('/login')}
    />
  );
}