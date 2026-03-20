import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useRef, useState } from "react";

import { isValidEmail } from "../../utils/formatters";

interface LoginProps {
    onLogin: () => void;
    onGoToRegister: () => void;
    onGoToForgotPassword: () => void;
}

export const Login = ({ onLogin, onGoToRegister, onGoToForgotPassword }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef<HTMLInputElement | null>(null);

    const handleEmailBlur = () => {
        if (!emailRef.current) return;
        if (!email) {
            emailRef.current.setCustomValidity('');
            return;
        }

        if (!isValidEmail(email)) {
            emailRef.current.setCustomValidity('Por favor, digite um e-mail válido.');
        } else {
            emailRef.current.setCustomValidity('');
        }

        emailRef.current.reportValidity();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (emailRef.current && !emailRef.current.checkValidity()) {
            emailRef.current.reportValidity();
            return;
        }

        if (!password) return;

        onLogin();
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-[var(--color-blue-50)] py-[40px]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-[30px]">
                    <h1 className="text-5xl font-bold mb-3 leading-[43px]">
                        <span className="text-blue-600 dark:text-blue-400">Meu</span>{' '}
                        <span className="text-sky-500 dark:text-sky-400">Rumo</span>
                    </h1>
                    <p className="text-[var(--color-gray-700)]">Organize suas finanças com inteligência</p>
                </div>

                <div className="flex flex-col justify-center bg-white shadow-md w-[500px] p-[33px] rounded-[25px]">
                    <h2 className="text-[23px] font-bold mb-[20px]">Bem-vindo de volta!</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-[20px]">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                E-mail
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    ref={emailRef}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={handleEmailBlur}
                                    placeholder="exemplo@email.com"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Senha
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-60"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="text-right my-[20px] font-semibold">
                            <button
                                onClick={onGoToForgotPassword}
                                type="button"
                                className="text-sm text-blue-600 hover:underline hover:cursor-pointer"
                            >
                                Esqueceu sua senha?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-br from-[var(--color-blue-500)] to-[var(--color-indigo-600)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer"
                        >
                            Entrar
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">
                                    ou
                                </span>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-700 text-sm">
                                Ainda não tem uma conta?{' '}
                                <button
                                    onClick={onGoToRegister}
                                    className="text-blue-600 font-semibold hover:underline hover:cursor-pointer"
                                >
                                    Cadastre-se
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
