import { useState } from 'react';
import { X, ArrowDownLeft, QrCode, Copy, Check } from 'lucide-react';

interface ReceiveModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ReceiveModal({ isOpen, onClose }: ReceiveModalProps) {
    const [amount, setAmount] = useState('');
    const [copied, setCopied] = useState(false);
    const pixKey = 'seu.email@exemplo.com';

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleGenerateQR = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`QR Code gerado para receber R$ ${amount || '(valor aberto)'}`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 transition-colors">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-green-400 to-green-500 flex items-center justify-center">
                            <ArrowDownLeft className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Receber</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                <form onSubmit={handleGenerateQR} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Valor (opcional)
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 font-medium">R$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0,00 - Deixe vazio para valor aberto"
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-400 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sua Chave PIX
                        </label>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900">
                                {pixKey}
                            </div>
                            <button
                                type="button"
                                onClick={handleCopy}
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                            >
                                {copied ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                ) : (
                                    <Copy className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-8 flex flex-col items-center justify-center">
                        <QrCode className="w-32 h-32 text-green-600 mb-4" />
                        <p className="text-sm text-gray-600 text-center">
                            QR Code será gerado após clicar em "Gerar QR Code"
                        </p>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-linear-to-br from-green-500 to-green-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                        >
                            Gerar QR Code
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
