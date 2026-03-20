import { CheckCircle, Mail } from "lucide-react";
import { useRef, useState } from "react";

import { isValidEmail } from "../../utils/formatters";

export const ForgotPassword = ({ onGoToLogin }: { onGoToLogin: () => void }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const emailRef = useRef<HTMLInputElement | null>(null);

    const handleEmailBlur = () => {
        if (!emailRef.current) return;

        if (!email) {
            emailRef.current.setCustomValidity('');
        } else if (!isValidEmail(email)) {
            emailRef.current.setCustomValidity('Por favor, digite um e-mail válido.');
        } else {
            emailRef.current.setCustomValidity('');
        }

        emailRef.current.reportValidity();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-8">
                <div className="w-full max-w-md">

                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-3">
                            <span className="text-blue-600">Meu</span>{' '}
                            <span className="text-sky-500">Rumo</span>
                        </h1>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            E-mail Enviado!
                        </h2>

                        <p className="text-gray-600 mb-8">
                            Enviamos um link de recuperação de senha para{' '}
                            <span className="font-semibold text-gray-900">{email}</span>.
                            Verifique sua caixa de entrada e siga as instruções.
                        </p>

                        <div className="bg-blue-50 rounded-xl p-4 mb-6">
                            <p className="text-sm text-blue-800">
                                <span className="font-semibold">Dica:</span> Se não encontrar o e-mail,
                                verifique sua pasta de spam ou lixo eletrônico.
                            </p>
                        </div>

                        <button
                            onClick={onGoToLogin}
                            className="w-full py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            Voltar ao Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-blue-50)] py-[40px]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-[30px]">
                    <h1 className="text-5xl font-bold mb-3 leading-[43px]">
                        <span className="text-blue-600 dark:text-blue-400">Meu</span>{' '}
                        <span className="text-sky-500 dark:text-sky-400">Rumo</span>
                    </h1>
                    <p className="text-[var(--color-gray-700)]">Recupere o acesso à sua conta</p>
                </div>

                <div className="flex flex-col justify-center bg-white shadow-md w-[500px] p-[33px] rounded-[25px]">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Esqueceu sua senha?
                    </h2>
                    <p className="text-gray-600 text-sm mb-6">
                        Sem problemas! Digite seu e-mail e enviaremos um link para redefinir sua senha.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-[25px]">
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
                                    value={email}
                                    placeholder="exemplo@email.com"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-40 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-br from-[var(--color-blue-500)] to-[var(--color-indigo-600)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            Enviar Link de Recuperação 
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">ou</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-700 text-sm">
                                Lembrou sua senha?{' '}
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
