import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { useParams, useNavigate } from 'react-router';
import Layout from '../components/Layout';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-gray-100 rounded-lg p-8 mb-4">
              <div className="aspect-square flex items-center justify-center">
                <span className="text-gray-400">Imagem do Produto #{id}</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center cursor-pointer hover:border-2 hover:border-gray-900 transition-all">
                  <span className="text-xs text-gray-400">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">Tênis Esportivo Pro</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(127 avaliações)</span>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold text-gray-900 mb-2">R$ 299,90</p>
              <p className="text-sm text-gray-600 line-through">R$ 399,90</p>
              <p className="text-sm text-green-600 font-semibold">25% de desconto</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Cor</h3>
              <div className="flex gap-2">
                {['bg-black', 'bg-white', 'bg-red-500', 'bg-blue-500'].map((color, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 ${color} rounded-full border-2 ${
                      i === 0 ? 'border-gray-900' : 'border-gray-300'
                    } hover:border-gray-900 transition-all`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Tamanho</h3>
              <div className="grid grid-cols-5 gap-2">
                {[38, 39, 40, 41, 42, 43, 44].map((size) => (
                  <button
                    key={size}
                    className="border-2 border-gray-300 rounded-lg py-2 hover:border-gray-900 hover:bg-gray-50 transition-all font-semibold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Quantidade</h3>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 font-bold">
                  -
                </button>
                <span className="w-12 text-center font-semibold">1</span>
                <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 font-bold">
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => navigate('/pagamento')}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Comprar Agora
              </button>
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Adicionar ao Carrinho
              </button>
              <button className="w-14 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-8 h-8 mb-2 text-gray-700" />
                <p className="text-xs font-semibold">Frete Grátis</p>
                <p className="text-xs text-gray-600">Acima de R$ 199</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="w-8 h-8 mb-2 text-gray-700" />
                <p className="text-xs font-semibold">Troca Grátis</p>
                <p className="text-xs text-gray-600">Até 30 dias</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 mb-2 text-gray-700" />
                <p className="text-xs font-semibold">Compra Segura</p>
                <p className="text-xs text-gray-600">Dados protegidos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Descrição do Produto</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              O Tênis Esportivo Pro foi desenvolvido com tecnologia de ponta para proporcionar o máximo de conforto e desempenho durante suas atividades físicas.
              Ideal para corridas, caminhadas e treinos intensos.
            </p>
            <h3 className="font-bold mb-3">Características:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cabedal em mesh respirável para maior ventilação</li>
              <li>Solado de borracha antiderrapante</li>
              <li>Palmilha anatômica removível</li>
              <li>Tecnologia de amortecimento avançada</li>
              <li>Peso aproximado: 280g (tamanho 42)</li>
              <li>Material: Tecido sintético e borracha</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-600">U</span>
                  </div>
                  <div>
                    <p className="font-semibold">Usuário {i}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Produto excelente! Muito confortável e com ótimo acabamento. Recomendo!
                </p>
                <p className="text-xs text-gray-500 mt-2">Avaliado em 20/05/2026</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
