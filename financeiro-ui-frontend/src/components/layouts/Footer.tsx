import { Home, TrendingUp, CreditCard, User, Plus } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { QuickActionsModal } from "../dashboardComponents/QuickActionsModal";
import { ReceiveModal } from "../dashboardComponents/ReceiveModal";
import { PayModal } from "../dashboardComponents/PayModal";
import { TransferModal } from "../dashboardComponents/TransferModal";

export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActiveRoute = (route: string) => pathname === route;

  const goToHome = () => navigate("/dashboard");
  const goToInvestments = () => navigate("/dashboard/investimentos");
  const goToCards = () => navigate("/dashboard/cartoes");
  const goToProfile = () => navigate("/dashboard/perfil");

  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [showReceive, setShowReceive] = useState(false);

  const handleQuickAction = (action: string) => {
    setShowQuickActions(false);
    if (action === 'transfer') setShowTransfer(true);
    else if (action === 'pay') setShowPay(true);
    else if (action === 'receive') setShowReceive(true);
    else if (action === 'invest') navigate('/dashboard/investimentos');
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-50 border-t shadow-md">
      <div className="relative flex justify-around items-center py-3">

        <button
          type="button"
          onClick={goToHome}
          className={`flex flex-col items-center ${isActiveRoute("/dashboard") ? "text-indigo-600" : "text-gray-500"}`}
        >
          <Home size={22} />
          <span className="text-xs mt-1">Início</span>
        </button>

        <button
          type="button"
          onClick={goToInvestments}
          className={`flex flex-col items-center ${isActiveRoute("/dashboard/investimentos") ? "text-indigo-600" : "text-gray-500"}`}
        >
          <TrendingUp size={22} />
          <span className="text-xs mt-1">Investir</span>
        </button>

        <div className="absolute -top-6">
          <button
            type="button"
            onClick={() => setShowQuickActions(true)}
            className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg"
          >
            <Plus size={28} />
          </button>
        </div>

        <button
          type="button"
          onClick={goToCards}
          className={`flex flex-col items-center ${isActiveRoute("/dashboard/cartoes") ? "text-indigo-600" : "text-gray-500"}`}
        >
          <CreditCard size={22} />
          <span className="text-xs mt-1">Cartões</span>
        </button>

        <button
          type="button"
          onClick={goToProfile}
          className={`flex flex-col items-center ${isActiveRoute("/dashboard/perfil") ? "text-indigo-600" : "text-gray-500"}`}
        >
          <User size={22} />
          <span className="text-xs mt-1">Perfil</span>
        </button>

        <QuickActionsModal
          isOpen={showQuickActions}
          onClose={() => setShowQuickActions(false)}
          onAction={handleQuickAction}
        />
        <TransferModal
          isOpen={showTransfer}
          onClose={() => setShowTransfer(false)}
        />
        <PayModal
          isOpen={showPay}
          onClose={() => setShowPay(false)}
        />
        <ReceiveModal
          isOpen={showReceive}
          onClose={() => setShowReceive(false)}
        />

      </div>
    </footer>
  );
}