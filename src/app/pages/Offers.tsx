import { Star, Heart, ShoppingCart, Tag } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Offers() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const allProducts = [
    { id: 21, name: 'Tênis Super Oferta 1', price: 'R$ 149,90', oldPrice: 'R$ 299,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 22, name: 'Tênis Super Oferta 2', price: 'R$ 179,90', oldPrice: 'R$ 299,90', discount: 40, rating: 4, image: 'https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 23, name: 'Tênis Super Oferta 3', price: 'R$ 199,90', oldPrice: 'R$ 399,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1587587448924-b5a1db520d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 24, name: 'Tênis Super Oferta 4', price: 'R$ 209,90', oldPrice: 'R$ 349,90', discount: 40, rating: 4, image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 25, name: 'Tênis Super Oferta 5', price: 'R$ 139,90', oldPrice: 'R$ 279,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1715692965423-28e7b823a60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 26, name: 'Tênis Super Oferta 6', price: 'R$ 164,90', oldPrice: 'R$ 329,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1715773408837-b7074beb12d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 27, name: 'Tênis Mega Oferta 1', price: 'R$ 154,90', oldPrice: 'R$ 309,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 28, name: 'Tênis Mega Oferta 2', price: 'R$ 189,90', oldPrice: 'R$ 379,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 29, name: 'Tênis Mega Oferta 3', price: 'R$ 174,90', oldPrice: 'R$ 349,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 30, name: 'Tênis Mega Oferta 4', price: 'R$ 159,90', oldPrice: 'R$ 319,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1587587448924-b5a1db520d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 31, name: 'Tênis Mega Oferta 5', price: 'R$ 144,90', oldPrice: 'R$ 289,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 32, name: 'Tênis Mega Oferta 6', price: 'R$ 169,90', oldPrice: 'R$ 339,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1715692965423-28e7b823a60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 33, name: 'Tênis Ultra Oferta 1', price: 'R$ 149,90', oldPrice: 'R$ 299,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1715773408837-b7074beb12d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 34, name: 'Tênis Ultra Oferta 2', price: 'R$ 179,90', oldPrice: 'R$ 299,90', discount: 40, rating: 4, image: 'https://images.unsplash.com/photo-1715773150368-55945728385a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bWVuJTIwc25lYWtlcnMlMjBzaG9lc3xlbnwxfHx8fDE3ODAzNTgyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 35, name: 'Tênis Ultra Oferta 3', price: 'R$ 199,90', oldPrice: 'R$ 399,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 36, name: 'Tênis Ultra Oferta 4', price: 'R$ 209,90', oldPrice: 'R$ 349,90', discount: 40, rating: 4, image: 'https://images.unsplash.com/photo-1631087606988-a6be38fccaf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 37, name: 'Tênis Ultra Oferta 5', price: 'R$ 139,90', oldPrice: 'R$ 279,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 38, name: 'Tênis Ultra Oferta 6', price: 'R$ 164,90', oldPrice: 'R$ 329,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1620656569905-6985bfe37d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 39, name: 'Tênis Premium Oferta 1', price: 'R$ 154,90', oldPrice: 'R$ 309,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 40, name: 'Tênis Premium Oferta 2', price: 'R$ 189,90', oldPrice: 'R$ 379,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1715693754061-fa58592c2e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 41, name: 'Tênis Premium Oferta 3', price: 'R$ 174,90', oldPrice: 'R$ 349,90', discount: 50, rating: 5, image: 'https://images.unsplash.com/photo-1715693754067-8a0b8fc4c230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 42, name: 'Tênis Premium Oferta 4', price: 'R$ 159,90', oldPrice: 'R$ 319,90', discount: 50, rating: 4, image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHNob2VzJTIwcnVubmluZ3xlbnwxfHx8fDE3ODAzNTgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const products = allProducts.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            OFERTAS IMPERDÍVEIS!
          </h1>
          <p className="text-2xl mb-2">Descontos de até 50%</p>
          <p className="text-lg">Aproveite enquanto durar o estoque!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">Exibindo {products.length} ofertas (Página {currentPage} de {totalPages})</p>
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-700">Ordenar por:</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option>Maior Desconto</option>
              <option>Menor Preço</option>
              <option>Mais Vendidos</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/produto/${product.id}`)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 z-10">
                  <Tag className="w-4 h-4" />
                  {product.discount}% OFF
                </div>
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
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-2xl font-bold text-red-600">{product.price}</p>
                  <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                </div>
                <p className="text-sm text-green-600 font-semibold">Economize {product.discount}%</p>
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
