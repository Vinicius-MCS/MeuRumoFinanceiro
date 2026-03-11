import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/layout"
import { Login } from "../pages/auth/Login"
import { Home } from "../pages/dashboard/Home"
import { Investment } from "../pages/dashboard/Investment"
import { Cards } from "../pages/dashboard/Cards"
import { Profile } from "../pages/dashboard/Profile"
import { Register } from "../pages/auth/Register"
import { ResetPassword } from "../pages/auth/ResetPassword"

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/reset-password" element={<ResetPassword/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/investment" element={<Investment/>}></Route>
                <Route path="/cards" element={<Cards/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
            </Route>
        </Routes>
    )
}