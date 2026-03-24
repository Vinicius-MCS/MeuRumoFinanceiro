import { TrendingUp, PiggyBankIcon, PiggyBank } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    { name: "Renda Fixa", value: 47, color: "#3B82F6" },
    { name: "Ações", value: 33, color: "#10B981" },
    { name: "Fundos", value: 14, color: "#F59E0B" },
    { name: "Cripto", value: 6, color: "#8B5CF6" },
];

const investments = [
    {
        name: "Tesouro Selic 2027",
        type: "Renda Fixa",
        value: "R$ 8.000,00",
        profit: "+12.3%",
        iconBg: "bg-blue-500",
    },
    {
        name: "Ações PETR4",
        type: "Ações",
        value: "R$ 5.500,00",
        profit: "+18.7%",
        iconBg: "bg-green-500",
    },
    {
        name: "Fundo Multimercado",
        type: "Fundos",
        value: "R$ 3.600,00",
        profit: "+9.2%",
        iconBg: "bg-orange-500",
    },
    {
        name: "Bitcoin",
        type: "Cripto",
        value: "R$ 1.500,00",
        profit: "+24.5%",
        iconBg: "bg-purple-500",
    },
];

const Investments = () => {
    return (
        <div className="p-8 space-y-8 bg-gray-100 min-h-screen">

            <div className="bg-white rounded-3xl shadow-md p-8 flex justify-between items-center">
                <div>
                    <p className="text-gray-500 mb-2">Total Investido</p>

                    <h2 className="text-3xl font-bold text-gray-900">
                        R$ 25.600,00
                    </h2>

                    <div className="flex items-center gap-2 mt-3 text-green-600 text-sm font-medium">
                        <TrendingUp size={16} />
                        +15.3% nos últimos 30 dias
                    </div>
                </div>

                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white">
                    <PiggyBank size={28} />
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
                <h3 className="text-xl font-semibold mb-8">
                    Distribuição do Portfólio
                </h3>

                <div className="w-full h-80">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={110}
                                dataKey="value"
                                label={({ name, value }) => `${name} ${value}%`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>

                            <Tooltip
                                formatter={(value: any) => `${value}%`}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">
                <h3 className="text-xl font-semibold">
                    Meus Investimentos
                </h3>

                {investments.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 rounded-2xl p-5 shadow-sm"
                    >

                        <div className="flex items-center gap-4">
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-2xl text-white ${item.iconBg}`}
                            >
                                $
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.type}
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold text-gray-900">
                                {item.value}
                            </p>
                            <p className="text-green-600 text-sm font-medium">
                                {item.profit}
                            </p>
                        </div>
                    </div>
                ))}

                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md hover:opacity-90 transition flex items-center justify-center gap-2">
                    <PiggyBankIcon size={18} />
                    Novo Investimento
                </button>
            </div>
        </div>
    );
};

export default Investments;