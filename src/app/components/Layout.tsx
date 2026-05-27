import { Search, User, ShoppingCart, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="size-full bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900">IanStore</h1>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar sapatos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 flex-shrink-0">
            <button
              onClick={() => navigate('/acessibilidade')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              title="Acessibilidade"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
            <button className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-3">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/tenis-masculino" className="text-gray-700 hover:text-gray-900 transition-colors">
                Tênis Masculino
              </Link>
            </li>
            <li>
              <Link to="/tenis-feminino" className="text-gray-700 hover:text-gray-900 transition-colors">
                Tênis Feminino
              </Link>
            </li>
            <li>
              <Link to="/ofertas" className="text-gray-700 hover:text-gray-900 transition-colors">
                Ofertas
              </Link>
            </li>
            <li>
              <Link to="/rastreamento" className="text-gray-700 hover:text-gray-900 transition-colors">
                Rastreamento
              </Link>
            </li>
            <li>
              <Link to="/meus-pedidos" className="text-gray-700 hover:text-gray-900 transition-colors">
                Meus Pedidos
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {children}

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Institucional</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nossa História</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Atendimento</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rastreamento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Acessibilidade</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/acessibilidade" className="hover:text-white transition-colors">
                    Recursos de Acessibilidade
                  </Link>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Navegação por Teclado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alto Contraste</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leitor de Tela</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ajuda para Deficientes</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400">
            <p>&copy; 2026 IanStore - Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
