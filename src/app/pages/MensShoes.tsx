import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';

export default function MensShoes() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Tênis Esportivo Masculino', price: 'R$ 299,90', rating: 5 },
    { id: 2, name: 'Tênis Casual Masculino', price: 'R$ 249,90', rating: 4 },
    { id: 3, name: 'Tênis Running Masculino', price: 'R$ 399,90', rating: 5 },
    { id: 4, name: 'Tênis Lifestyle Masculino', price: 'R$ 349,90', rating: 4 },
    { id: 5, name: 'Tênis Training Masculino', price: 'R$ 279,90', rating: 5 },
    { id: 6, name: 'Tênis Urban Masculino', price: 'R$ 329,90', rating: 4 },
    { id: 7, name: 'Tênis Basketball Pro', price: 'R$ 459,90', rating: 5 },
    { id: 8, name: 'Tênis Skatista Masculino', price: 'R$ 289,90', rating: 4 },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Tênis Masculino</h1>
        <p className="text-gray-600 mb-8">Encontre o tênis perfeito para seu estilo</p>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">Exibindo {products.length} itens</p>
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
              <div className="relative bg-gray-100 h-64 flex items-center justify-center">
                <div className="absolute top-3 right-3 flex gap-2">
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
                <span className="text-gray-400 text-sm">Produto Masculino</span>
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
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Anterior
          </button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </Layout>
  );
}
