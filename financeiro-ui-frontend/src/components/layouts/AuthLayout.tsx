import { Outlet, Navigate } from 'react-router';

export function AuthLayout() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // Se estiver autenticado, redireciona para o dashboard
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 transition-colors">
                <Outlet/>
            </div>
        </div>
    );
}
