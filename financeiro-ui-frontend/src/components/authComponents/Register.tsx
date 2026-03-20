import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { useState } from "react";

import { formatBrazilianPhone, isValidBrazilianPhone, isValidEmail } from "../../utils/formatters";

interface RegisterProps {
    onRegister: () => void;
    onGoToLogin: () => void;
}

export const Register = ({ onRegister, onGoToLogin }: RegisterProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Por favor, informe um e-mail válido.');
            return;
        }

        if (!isValidBrazilianPhone(phone)) {
            alert('Por favor, informe um telefone válido (10 ou 11 dígitos).');
            return;
        }

        if (name && email && phone && password) {
            alert('Cadastro realizado com sucesso!');
            onRegister();
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-blue-50)] py-[40px]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-[30px]">
                    <h1 className="text-5xl font-bold mb-3 leading-[43px]">
                        <span className="text-blue-600 dark:text-blue-400">Meu</span>{' '}
                        <span className="text-sky-500 dark:text-sky-400">Rumo</span>
                    </h1>
                    <p className="text-[var(--color-gray-700)]">Crie sua conta e comece agora</p>
                </div>

                <div className="flex flex-col justify-center bg-white shadow-md w-[500px] p-[33px] rounded-[25px]">
                    <h2 className="text-[23px] font-bold mb-[20px]">Criar Conta</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-[20px]">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nome Completo
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="João da Silva"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-[20px]">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                E-mail
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="exemplo@email.com"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-[20px]">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Telefone
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    autoComplete="tel"
                                    onChange={(e) => setPhone(formatBrazilianPhone(e.target.value))}
                                    value={phone}
                                    placeholder="(11) 98765-4321"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-[20px]">
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
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-60 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="mb-[40px]">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirmar Senha
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-60 cursor-pointer"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-br from-[var(--color-blue-500)] to-[var(--color-indigo-600)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer"
                        >
                            Criar Conta
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
                                Já tem uma conta?{' '}
                                <button
                                    onClick={onGoToLogin}
                                    className="text-blue-600 font-semibold hover:underline hover:cursor-pointer"
                                >
                                    Faça login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}