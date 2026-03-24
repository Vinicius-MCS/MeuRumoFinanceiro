import { Wallet, TrendingUp, TrendingDown, CreditCard, PiggyBank, Plus, Target, BarChart3, Clock } from "lucide-react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

export default function DashboardCard() {

  const cards = [
    {
      title: "Saldo Total",
      value: "R$ 14.280,00",
      icon: <Wallet className="text-white" size={26} />,
      iconBg: "bg-blue-500",
      change: "+12.5%",
      changeColor: "text-green-600", 
      trendIcon: <TrendingUp size={16}/>
    },
    {
      title: "Receitas",
      value: "R$ 8.500,00",
      icon: <TrendingUp className="text-white" size={26} />,
      iconBg: "bg-green-500",
      change: "+8.2%",
      changeColor: "text-green-600",
      trendIcon: <TrendingUp size={16}/>
    },
    {
      title: "Despesas",
      value: "R$ 3.400,00",
      icon: <CreditCard className="text-white" size={26} />,
      iconBg: "bg-orange-500",
      change: "-3.1%",
      changeColor: "text-red-500",
      trendIcon: <TrendingDown size={16}/>
    },
    {
      title: "Investimentos",
      value: "R$ 25.600,00",
      icon: <PiggyBank className="text-white" size={26} />,
      iconBg: "bg-indigo-500",
      change: "+15.3%",
      changeColor: "text-green-600",
      trendIcon: <TrendingUp size={16}/>
    }
  ];

const formatCurrency = (value: number) => {
  return `R$ ${value / 1000}k`;
};

const saldoData = [
  { mes: "Jan", valor: 10500 },
  { mes: "Fev", valor: 11800 },
  { mes: "Mar", valor: 11000 },
  { mes: "Abr", valor: 12500 },
  { mes: "Mai", valor: 13200 },
  { mes: "Jun", valor: 14500 },
];

const receitasDespesasData = [
  { mes: "Jan", receitas: 8000, despesas: 5000 },
  { mes: "Fev", receitas: 8500, despesas: 5200 },
  { mes: "Mar", receitas: 8200, despesas: 5100 },
  { mes: "Abr", receitas: 8800, despesas: 5400 },
  { mes: "Mai", receitas: 8400, despesas: 5300 },
  { mes: "Jun", receitas: 8900, despesas: 5500 },
];

const actions = [
    {
      title: "Nova Transação",
      icon: <Plus className="text-white" size={28} />,
      bg: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "Metas",
      icon: <Target className="text-white" size={28} />,
      bg: "bg-green-500"
    },
    {
      title: "Relatórios",
      icon: <BarChart3 className="text-white" size={28} />,
      bg: "bg-indigo-500"
    },
    {
      title: "Histórico",
      icon: <Clock className="text-white" size={28} />,
      bg: "bg-orange-500"
    }
  ];

  return (
    <div className="p-6 bg-gray-100">
      <section className="grid grid-cols-2 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-start"
          >
            <div>
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 ${card.iconBg}`}
              >
                {card.icon}
              </div>

              <p className="text-gray-500 text-sm">{card.title}</p>
              <h2 className="text-2xl font-bold text-gray-900">
                {card.value}
              </h2>
            </div>

            <div className={`flex items-center gap-1 text-sm font-medium ${card.changeColor}`}>
              {card.trendIcon}
              {card.change}
            </div>
          </div>
        ))}

      </section>


      <section className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Evolução do Saldo</h2>

          <ResponsiveContainer width="100%" height={250}>
              <LineChart data={saldoData}>
                  <CartesianGrid strokeDasharray="3 3" />
  
                  <XAxis dataKey="mes" />

                  <YAxis tickFormatter={formatCurrency} />

                  <Tooltip
  formatter={(value) =>
    typeof value === "number"
      ? `R$ ${value.toLocaleString("pt-BR")}`
      : value
  }
/>

                  <Line type="monotone" dataKey="valor" stroke="#6366f1" strokeWidth={3} dot={{ r: 5, fill: "#6366f1", strokeWidth: 0 }}/>
              </LineChart>
          </ResponsiveContainer>
        </div>


        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Receitas vs Despesas</h2>

            <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={receitasDespesasData} barCategoryGap="25%">
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="mes" />

                        <YAxis tickFormatter={formatCurrency} />

                        <Tooltip
  formatter={(value) =>
    typeof value === "number"
      ? `R$ ${value.toLocaleString("pt-BR")}`
      : value
  }
/>

                        <Legend />

                        <Bar dataKey="receitas" fill="#10b981" radius={[8, 8, 0, 0]}/>

                        <Bar dataKey="despesas" fill="#f97316" radius={[8, 8, 0, 0]}/>

                  </BarChart>
            </ResponsiveContainer>
        </div>

      </section>


      <section className="grid grid-cols-2 gap-6 mt-6">

            {actions.map((action, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition">
          
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${action.bg}`}>
                  {action.icon}
                </div>

                <span className="text-lg font-semibold">
                  {action.title}
                </span>

            </div>
      ))}

    </section>
  </div>

    
  );
}