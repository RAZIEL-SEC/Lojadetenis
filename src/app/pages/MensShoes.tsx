import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function MensShoes() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const allProducts = [
    { id: 1, name: 'Tênis Esportivo Masculino', price: 'R$ 299,90', rating: 5, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 2, name: 'Tênis Casual Masculino', price: 'R$ 249,90', rating: 4, image: 'https://images.unsplash.com/photo-1631087606988-a6be38fccaf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 3, name: 'Tênis Running Masculino', price: 'R$ 399,90', rating: 5, image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, name: 'Tênis Lifestyle Masculino', price: 'R$ 349,90', rating: 4, image: 'https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 5, name: 'Tênis Training Masculino', price: 'R$ 279,90', rating: 5, image: 'https://images.unsplash.com/photo-1620656569905-6985bfe37d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 6, name: 'Tênis Urban Masculino', price: 'R$ 329,90', rating: 4, image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 7, name: 'Tênis Basketball Pro', price: 'R$ 459,90', rating: 5, image: 'https://images.unsplash.com/photo-1715693754061-fa58592c2e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 8, name: 'Tênis Skatista Masculino', price: 'R$ 289,90', rating: 4, image: 'https://images.unsplash.com/photo-1715693754067-8a0b8fc4c230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 9, name: 'Tênis Performance Max', price: 'R$ 319,90', rating: 5, image: 'https://images.unsplash.com/photo-1715692965423-28e7b823a60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 10, name: 'Tênis Classic Pro', price: 'R$ 269,90', rating: 4, image: 'https://images.unsplash.com/photo-1715773408837-b7074beb12d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 11, name: 'Tênis Speed Runner', price: 'R$ 339,90', rating: 5, image: 'https://images.unsplash.com/photo-1715773150368-55945728385a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bWVuJTIwc25lYWtlcnMlMjBzaG9lc3xlbnwxfHx8fDE3ODAzNTgyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 12, name: 'Tênis Comfort Elite', price: 'R$ 299,90', rating: 4, image: 'https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 13, name: 'Tênis Trail Explorer', price: 'R$ 429,90', rating: 5, image: 'https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 14, name: 'Tênis Street Master', price: 'R$ 259,90', rating: 4, image: 'https://images.unsplash.com/photo-1587587448924-b5a1db520d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 15, name: 'Tênis Flex Pro', price: 'R$ 349,90', rating: 5, image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 16, name: 'Tênis Air Force', price: 'R$ 389,90', rating: 4, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const products = allProducts.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Tênis Masculino</h1>
        <p className="text-gray-600 mb-8">Encontre o tênis perfeito para seu estilo</p>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">Exibindo {products.length} itens (Página {currentPage} de {totalPages})</p>
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-700">Ordenar por:</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option>Relevância</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Mais Vendidos</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/produto/${product.id}`)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-50 transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
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
                        index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
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

        <div className="flex items-center justify-center gap-2">
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
      </div>
    </Layout>
  );
}
