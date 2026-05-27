import { Package, MapPin, CheckCircle, Truck } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Tracking() {
  const [trackingCode, setTrackingCode] = useState('');
  const [showTracking, setShowTracking] = useState(false);

  const handleTrack = () => {
    if (trackingCode) {
      setShowTracking(true);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Rastreamento de Pedido</h1>
        <p className="text-gray-600 mb-8">Acompanhe seu pedido em tempo real</p>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <label className="block text-sm font-semibold mb-2">Código de Rastreamento</label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Digite o código de rastreamento"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleTrack}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Rastrear
              </button>
            </div>
          </div>
        </div>

        {showTracking && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold">Pedido #123456789</h2>
                  <p className="text-sm text-gray-600">Código: {trackingCode || 'BR123456789ABC'}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Previsão de entrega</p>
                  <p className="text-lg font-bold">30/05/2026</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Em trânsito</p>
                    <p className="text-sm text-blue-700">Seu pedido está a caminho!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-6">Histórico de Rastreamento</h3>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="space-y-6">
                  <div className="relative flex gap-4">
                    <div className="z-10 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-semibold">Pedido saiu para entrega</p>
                      <p className="text-sm text-gray-600">O pedido está a caminho do endereço de entrega</p>
                      <p className="text-xs text-gray-500 mt-1">27/05/2026 - 08:30</p>
                    </div>
                  </div>

                  <div className="relative flex gap-4">
                    <div className="z-10 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-semibold">Em trânsito - Centro de Distribuição SP</p>
                      <p className="text-sm text-gray-600">Pedido em transporte entre centros de distribuição</p>
                      <p className="text-xs text-gray-500 mt-1">26/05/2026 - 14:20</p>
                    </div>
                  </div>

                  <div className="relative flex gap-4">
                    <div className="z-10 bg-gray-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-semibold">Pedido enviado</p>
                      <p className="text-sm text-gray-600">Seu pedido foi postado e está a caminho</p>
                      <p className="text-xs text-gray-500 mt-1">25/05/2026 - 16:45</p>
                    </div>
                  </div>

                  <div className="relative flex gap-4">
                    <div className="z-10 bg-gray-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Pedido confirmado</p>
                      <p className="text-sm text-gray-600">Pagamento aprovado e pedido em separação</p>
                      <p className="text-xs text-gray-500 mt-1">24/05/2026 - 10:15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Itens do Pedido</h3>
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Produto</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Vans Old Skool</p>
                  <p className="text-sm text-gray-600">Tamanho: 42 | Quantidade: 1</p>
                  <p className="text-sm font-bold">R$ 299,90</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
