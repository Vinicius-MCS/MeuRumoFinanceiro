import { Outlet, Navigate } from 'react-router';

export function DashboardLayout() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // Se não estiver autenticado, redireciona para o login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Outlet />
        </div>
    );
}
