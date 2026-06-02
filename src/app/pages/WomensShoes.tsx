import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function WomensShoes() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const allProducts = [
    { id: 11, name: 'Tênis Esportivo Feminino', price: 'R$ 279,90', rating: 5, image: 'https://images.unsplash.com/photo-1561808843-7adeb9606939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 12, name: 'Tênis Casual Feminino', price: 'R$ 239,90', rating: 4, image: 'https://images.unsplash.com/photo-1641997465126-c73cc4070337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 13, name: 'Tênis Running Feminino', price: 'R$ 389,90', rating: 5, image: 'https://images.unsplash.com/photo-1689357642277-65228ee23680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 14, name: 'Tênis Lifestyle Feminino', price: 'R$ 329,90', rating: 4, image: 'https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 15, name: 'Tênis Training Feminino', price: 'R$ 269,90', rating: 5, image: 'https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 16, name: 'Tênis Fashion Feminino', price: 'R$ 319,90', rating: 4, image: 'https://images.unsplash.com/photo-1739138053555-13321c306033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 17, name: 'Tênis Platform Feminino', price: 'R$ 349,90', rating: 5, image: 'https://images.unsplash.com/photo-1596565206601-eb1c83627d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 18, name: 'Tênis Slip-On Feminino', price: 'R$ 259,90', rating: 4, image: 'https://images.unsplash.com/photo-1663151860122-4890a08dc22b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8d29tZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 19, name: 'Tênis Sport Feminino', price: 'R$ 299,90', rating: 5, image: 'https://images.unsplash.com/photo-1561808843-7adeb9606939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 20, name: 'Tênis Comfort Feminino', price: 'R$ 289,90', rating: 4, image: 'https://images.unsplash.com/photo-1641997465126-c73cc4070337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 21, name: 'Tênis Flex Feminino', price: 'R$ 309,90', rating: 5, image: 'https://images.unsplash.com/photo-1689357642277-65228ee23680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 22, name: 'Tênis Power Feminino', price: 'R$ 319,90', rating: 4, image: 'https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 23, name: 'Tênis Energy Feminino', price: 'R$ 339,90', rating: 5, image: 'https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 24, name: 'Tênis Boost Feminino', price: 'R$ 359,90', rating: 4, image: 'https://images.unsplash.com/photo-1739138053555-13321c306033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 25, name: 'Tênis Elite Feminino', price: 'R$ 379,90', rating: 5, image: 'https://images.unsplash.com/photo-1596565206601-eb1c83627d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3b21lbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzgwMzU4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 26, name: 'Tênis Supreme Feminino', price: 'R$ 399,90', rating: 4, image: 'https://images.unsplash.com/photo-1663151860122-4890a08dc22b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8d29tZW4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc4MDM1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const products = allProducts.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Tênis Feminino</h1>
        <p className="text-gray-600 mb-8">Estilo e conforto para cada momento</p>

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
