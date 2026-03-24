import { Eye, CreditCard, Lock, FileText, DollarSign } from "lucide-react";

const Cards = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen pb-28">

      <div className="relative rounded-3xl p-8 text-white overflow-hidden shadow-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-600">

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>

        <div className="relative z-10">

          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Cartão de Crédito</p>
              <h2 className="text-xl font-semibold mt-1">
                Cartão Platinum
              </h2>
            </div>

            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
              <Eye size={18} />
            </div>
          </div>

          <div className="mt-8 text-2xl tracking-widest">
            **** **** **** 4829
          </div>

          <div className="flex justify-between mt-8 text-sm">
            <div>
              <p className="opacity-70">Validade</p>
              <p className="mt-1">**/**</p>
            </div>

            <div>
              <p className="opacity-70">CVV</p>
              <p className="mt-1">***</p>
            </div>

            <CreditCard size={28} className="opacity-80" />
          </div>

        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">

        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
              <DollarSign size={22} />
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Limite Disponível
              </p>
              <p className="text-xl font-semibold">
                R$ 11.600,00
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-gray-500 text-sm">
              Limite Total
            </p>
            <p className="font-semibold">
              R$ 15.000,00
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Utilizado</span>
            <span className="font-medium">22.7%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500 w-[22.7%] rounded-full"></div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            R$ 3.400,00 utilizado
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-4 rounded-2xl bg-gray-100 flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            <Lock size={18} />
            Bloquear
          </button>

          <button className="flex-1 py-4 rounded-2xl bg-gray-100 flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            <FileText size={18} />
            Fatura
          </button>
        </div>

      </div>

    </div>
  );
};

export default Cards;