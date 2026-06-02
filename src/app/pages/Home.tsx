import { Star, Heart, ShoppingCart, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import vansImage from '../../imports/vans.png';
import Layout from '../components/Layout';

const ProductGrid = ({ currentPage }: { currentPage: number }) => {
  const navigate = useNavigate();

  const allProducts = [
    { id: 1, name: 'Tênis Esportivo Pro', price: 'R$ 299,90', rating: 5, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 2, name: 'Tênis Casual Comfort', price: 'R$ 249,90', rating: 4, image: 'https://images.unsplash.com/photo-1631087606988-a6be38fccaf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 3, name: 'Tênis Running Ultra', price: 'R$ 399,90', rating: 5, image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, name: 'Tênis Lifestyle Premium', price: 'R$ 349,90', rating: 4, image: 'https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 5, name: 'Tênis Training Max', price: 'R$ 279,90', rating: 5, image: 'https://images.unsplash.com/photo-1620656569905-6985bfe37d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 6, name: 'Tênis Urban Style', price: 'R$ 329,90', rating: 4, image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 7, name: 'Tênis Basketball Pro', price: 'R$ 459,90', rating: 5, image: 'https://images.unsplash.com/photo-1715693754061-fa58592c2e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 8, name: 'Tênis Skatista', price: 'R$ 289,90', rating: 4, image: 'https://images.unsplash.com/photo-1715693754067-8a0b8fc4c230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 9, name: 'Tênis Performance', price: 'R$ 319,90', rating: 5, image: 'https://images.unsplash.com/photo-1715692965423-28e7b823a60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 10, name: 'Tênis Classic', price: 'R$ 269,90', rating: 4, image: 'https://images.unsplash.com/photo-1715773408837-b7074beb12d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 11, name: 'Tênis Speed', price: 'R$ 339,90', rating: 5, image: 'https://images.unsplash.com/photo-1715773150368-55945728385a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bWVuJTIwc25lYWtlcnMlMjBzaG9lc3xlbnwxfHx8fDE3ODAzNTgyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 12, name: 'Tênis Comfort Plus', price: 'R$ 299,90', rating: 4, image: 'https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 13, name: 'Tênis Elite Runner', price: 'R$ 429,90', rating: 5, image: 'https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 14, name: 'Tênis Street Style', price: 'R$ 259,90', rating: 4, image: 'https://images.unsplash.com/photo-1587587448924-b5a1db520d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 15, name: 'Tênis Flex Max', price: 'R$ 349,90', rating: 5, image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 16, name: 'Tênis Air Motion', price: 'R$ 389,90', rating: 4, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 17, name: 'Tênis Trail Pro', price: 'R$ 369,90', rating: 5, image: 'https://images.unsplash.com/photo-1631087606988-a6be38fccaf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 18, name: 'Tênis Dynamic', price: 'R$ 309,90', rating: 4, image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 19, name: 'Tênis Velocity', price: 'R$ 329,90', rating: 5, image: 'https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 20, name: 'Tênis Sport Max', price: 'R$ 289,90', rating: 4, image: 'https://images.unsplash.com/photo-1620656569905-6985bfe37d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 21, name: 'Tênis Power Step', price: 'R$ 359,90', rating: 5, image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 22, name: 'Tênis Boost Energy', price: 'R$ 379,90', rating: 4, image: 'https://images.unsplash.com/photo-1715693754061-fa58592c2e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 23, name: 'Tênis Endurance', price: 'R$ 399,90', rating: 5, image: 'https://images.unsplash.com/photo-1715693754067-8a0b8fc4c230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 24, name: 'Tênis Supreme Fit', price: 'R$ 419,90', rating: 4, image: 'https://images.unsplash.com/photo-1715692965423-28e7b823a60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const products = allProducts.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate(`/produto/${product.id}`)}
        >
          <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-50 transition-colors"
              >
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-50 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-4">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < product.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <Layout>
      <section className="bg-gradient-to-r from-amber-100 via-yellow-700 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-6">
            <div className="flex-1 text-center text-white">
              <h2 className="text-3xl font-black mb-2 tracking-wide" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                OFERTA ESPECIAL!
              </h2>
              <p className="text-xl mb-1 font-bold">
                Vans Old Skool
              </p>
              <p className="text-4xl font-black mb-3 text-yellow-300" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                50% OFF
              </p>
              <button
                onClick={() => navigate('/pagamento')}
                className="bg-white text-amber-900 px-6 py-2 rounded-lg text-lg font-black hover:bg-gray-100 transition-colors shadow-lg"
              >
                COMPRE AGORA
              </button>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src={vansImage}
                alt="Vans Old Skool"
                className="max-w-xs w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-6">Filtros</h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categorias</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Tênis Masculino</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Tênis Feminino</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Tênis Infantil</span>
                  </label>
                </div>
              </div>

              <hr className="my-4" />

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Tamanho</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[35, 36, 37, 38, 39, 40, 41, 42, 43, 44].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded px-2 py-1 text-sm hover:border-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Preço</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="w-4 h-4" />
                    <span className="text-sm">Até R$ 100</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="w-4 h-4" />
                    <span className="text-sm">R$ 100 - R$ 200</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="w-4 h-4" />
                    <span className="text-sm">R$ 200 - R$ 300</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="w-4 h-4" />
                    <span className="text-sm">Acima de R$ 300</span>
                  </label>
                </div>
              </div>

              <hr className="my-4" />

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Estoque</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Apenas disponíveis</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Incluir pré-venda</span>
                  </label>
                </div>
              </div>

              <hr className="my-4" />

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Frete</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Frete Grátis</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Entrega Rápida</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Aplicar Filtros
              </button>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-700">Ordenar por:</label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
                  <option>Relevância</option>
                  <option>Modelo</option>
                  <option>Cor</option>
                  <option>Tamanho</option>
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">Exibindo 6 itens (Página {currentPage} de {totalPages})</p>
            <ProductGrid currentPage={currentPage} />

            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-gray-900 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próximo
              </button>
            </div>
          </main>
        </div>
      </div>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Compra Confirmada</h3>
                <p className="text-sm text-gray-600">Seu pedido foi realizado com sucesso!</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Item Adicionado ao Carrinho</h3>
                <p className="text-sm text-gray-600">Produto incluído com sucesso!</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Produto Não Encontrado</h3>
                <p className="text-sm text-gray-600">Item não disponível no momento.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Login Incorreto / Cupom Inválido</h3>
                <p className="text-sm text-gray-600">Verifique suas informações.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                <p className="text-sm font-semibold">Dados Pessoais</p>
              </div>
              <div className="flex-1 h-1 bg-gray-300 -mx-4"></div>
              <div className="flex-1 text-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                <p className="text-sm text-gray-600">Endereço</p>
              </div>
              <div className="flex-1 h-1 bg-gray-300 -mx-4"></div>
              <div className="flex-1 text-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                <p className="text-sm text-gray-600">Pagamento</p>
              </div>
              <div className="flex-1 h-1 bg-gray-300 -mx-4"></div>
              <div className="flex-1 text-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                <p className="text-sm text-gray-600">Confirmação</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 border-2 border-blue-600 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Etapa 1: Dados Pessoais</h3>
              <div className="space-y-3">
                <input type="text" placeholder="Nome completo" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="E-mail" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="tel" placeholder="Telefone" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="text" placeholder="CPF" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Etapa 2: Endereço</h3>
              <div className="space-y-3">
                <input type="text" placeholder="CEP" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="text" placeholder="Rua" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="text" placeholder="Número" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="text" placeholder="Cidade" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Etapa 3: Pagamento</h3>
              <div className="space-y-3">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Cartão de Crédito</option>
                  <option>Cartão de Débito</option>
                  <option>PIX</option>
                  <option>Boleto</option>
                </select>
                <input type="text" placeholder="Número do cartão" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Validade" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="text" placeholder="CVV" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Etapa 4: Confirmação</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-semibold">Resumo do Pedido</p>
                  <p className="text-gray-600 mt-1">Subtotal: R$ 299,90</p>
                  <p className="text-gray-600">Frete: R$ 20,00</p>
                  <p className="font-bold mt-2">Total: R$ 319,90</p>
                </div>
                <button
                  onClick={() => navigate('/pagamento')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
