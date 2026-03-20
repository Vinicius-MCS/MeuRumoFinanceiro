import { createBrowserRouter, Navigate } from "react-router";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { LoginPage } from "../pages/authPages/LoginPage";
import { RegisterPage } from "../pages/authPages/RegisterPage";
import { ForgotPasswordPage } from "../pages/authPages/ForgotPasswordPage";
import { HomePage } from "../pages/dashboardPages/HomePage";
import { InvestmentsPage } from "../pages/dashboardPages/InvestmentsPage";
import { CardsPage } from "../pages/dashboardPages/CardsPage";
import { ProfilePage } from "../pages/dashboardPages/ProfilePage";

// Simulação de autenticação (em produção, isso viria de um contexto ou estado global)
const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />,
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "cadastro",
                element: <RegisterPage />,
            },
            {
                path: "recuperar-senha",
                element: <ForgotPasswordPage />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "investimentos",
                element: <InvestmentsPage />,
            },
            {
                path: "cartoes",
                element: <CardsPage />,
            },
            {
                path: "perfil",
                element: <ProfilePage />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/login" replace />,
    },
]);
