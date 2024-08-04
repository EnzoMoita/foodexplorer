import logo from '../images/logo.svg'; // Importa a logo

const Login = () => {
    return (
        <div className="flex items-center justify-between min-h-screen bg-dark-blue text-white font-sans">
            <div className="ml-60"> {/* Margem à esquerda para a logo */}
                <img src={logo} alt="Logo" className="h-12" /> {/* Ajuste a classe conforme o tamanho desejado */}
            </div>
            <div className="w-full max-w-lg pt-20 pb-20 px-12 space-y-10 bg-dark-dark rounded-lg shadow-lg mr-40">
                <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold">Faça login</span>
                    </div>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                            placeholder="No mínimo 6 caracteres"
                        />
                    </div>
                    <button type="submit" className="w-full px-6 py-4 text-md font-medium bg-tomato rounded hover:bg-red-700">Entrar</button>
                </form>
                <div className="text-center">
                    <button className="text-sm hover:underline">Criar uma conta</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
