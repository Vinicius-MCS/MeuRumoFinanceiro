import './styles/globals.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export default function App() {
  return <RouterProvider router={router} />;
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardCard from "./components/DashboardCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Invest from "./components/Invest";
import Cards from "./components/Cards";

function App() {
  return (
    <BrowserRouter>
        <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />

        <main className="flex-1 pb-24">
          <Routes>
            <Route path="/" element={<DashboardCard />}/>
            <Route path="/invest" element={<Invest/>}/>
            <Route path="/cards" element={<Cards/>}/>
            <Route/>
          </Routes>
        </main>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
