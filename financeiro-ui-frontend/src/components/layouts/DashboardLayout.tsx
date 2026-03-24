import { Outlet, Navigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

export function DashboardLayout() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // Se não estiver autenticado, redireciona para o login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="pb-[80px] min-h-screen overflow-auto">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
