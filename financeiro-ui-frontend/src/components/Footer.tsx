import { Home, TrendingUp, CreditCard, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-50 border-t shadow-md">
      <div className="relative flex justify-around items-center py-3">

        <div className="flex flex-col items-center text-indigo-600">
          <Home size={22} />
          <span className="text-xs mt-1">Início</span>
        </div>

        <Link to="/invest" className="flex flex-col items-center text-gray-500">
          <TrendingUp size={22} />
          <span className="text-xs mt-1">Investir</span>
        </Link>

        <div className="absolute -top-6">
          <button className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
            <Plus size={28} />
          </button>
        </div>

        <Link to="/cards" className="flex flex-col items-center text-gray-500">
          <CreditCard size={22} />
          <span className="text-xs mt-1">Cartões</span>
        </Link>

        <div className="flex flex-col items-center text-gray-500">
          <User size={22} />
          <span className="text-xs mt-1">Perfil</span>
        </div>

      </div>
    </footer>
  );
}