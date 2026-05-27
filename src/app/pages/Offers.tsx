import { Star, Heart, ShoppingCart, Tag } from 'lucide-react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';

export default function Offers() {
  const navigate = useNavigate();

  const products = [
    { id: 21, name: 'Tênis Super Oferta 1', price: 'R$ 149,90', oldPrice: 'R$ 299,90', discount: 50, rating: 5 },
    { id: 22, name: 'Tênis Super Oferta 2', price: 'R$ 179,90', oldPrice: 'R$ 299,90', discount: 40, rating: 4 },
    { id: 23, name: 'Tênis Super Oferta 3', price: 'R$ 199,90', oldPrice: 'R$ 399,90', discount: 50, rating: 5 },
    { id: 24, name: 'Tênis Super Oferta 4', price: 'R$ 209,90', oldPrice: 'R$ 349,90', discount: 40, rating: 4 },
    { id: 25, name: 'Tênis Super Oferta 5', price: 'R$ 139,90', oldPrice: 'R$ 279,90', discount: 50, rating: 5 },
    { id: 26, name: 'Tênis Super Oferta 6', price: 'R$ 164,90', oldPrice: 'R$ 329,90', discount: 50, rating: 4 },
  ];

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
          <p className="text-sm text-gray-600">Exibindo {products.length} ofertas</p>
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
              <div className="relative bg-gray-100 h-64 flex items-center justify-center">
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {product.discount}% OFF
                </div>
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
                <span className="text-gray-400 text-sm">Oferta Especial</span>
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
