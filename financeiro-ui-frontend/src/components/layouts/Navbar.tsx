import { Moon, Bell, User, TrendingUp, CreditCard, Target } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-gray-50 relative">
      <div className="flex items-center justify-between px-9 py-6">
        
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">Meu </span>
          <span className="text-blue-400">Rumo</span>
        </h1>

        <div className="flex items-center gap-8">

          <Moon className="w-7 h-7 text-gray-600 cursor-pointer" />

          <div className="relative" ref={dropdownRef}>
            <div
              className="relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Bell className="w-7 h-7 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></span>
            </div>

            {open && (
              <div className="absolute right-0 mt-4 w-96 bg-white rounded-2xl shadow-xl border z-50">

                <div className="px-6 py-4 border-b">
                  <h2 className="text-lg font-semibold">
                    Notificações
                  </h2>
                </div>

                <div className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 border-b">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500">
                    <TrendingUp className="text-white" size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">Receita recebida</p>
                    <p className="text-sm text-gray-500">
                      Você recebeu R$ 2.500,00
                    </p>
                    <span className="text-xs text-gray-400">
                      2h atrás
                    </span>
                  </div>

                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                </div>

                <div className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 border-b">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500">
                    <CreditCard className="text-white" size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">Fatura do cartão</p>
                    <p className="text-sm text-gray-500">
                      Vencimento em 5 dias
                    </p>
                    <span className="text-xs text-gray-400">
                      1d atrás
                    </span>
                  </div>

                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                </div>

                <div className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 border-b">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500">
                    <Target className="text-white" size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">
                      Meta atingida 🎉
                    </p>
                    <p className="text-sm text-gray-500">
                      Você alcançou sua meta de economia
                    </p>
                    <span className="text-xs text-gray-400">
                      2d atrás
                    </span>
                  </div>
                </div>

                <div className="text-center py-4">
                  <button className="text-indigo-600 text-sm font-medium hover:underline">
                    Ver todas as notificações
                  </button>
                </div>

              </div>
            )}
          </div>

          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-500 text-white cursor-pointer">
            <User size={28} />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;