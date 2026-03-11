import { Link } from "react-router-dom"

export const Login = () => {
    return(
        <main className="">
            <div>
                <div>
                    <h1>Meu Rumo</h1>
                    <p>Organize suas finanças com inteligência</p>
                </div>

                <div>
                    <h2>Bem-vindo de volta!</h2>

                    <label htmlFor="">E-mail</label>
                    <input type="email" />

                    <label htmlFor="">Senha</label>
                    <input type="password" />

                    <Link to="/reset-password">
                        <a href="">Esqueceu sua senha?</a>
                    </Link>

                    <button>Entrar</button>
                    
                    <p>ou</p>

                    <p>Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
                </div>
            </div>
        </main>
    )
}
