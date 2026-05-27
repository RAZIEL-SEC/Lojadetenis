import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';

export default function MyOrders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: '123456789',
      date: '24/05/2026',
      status: 'Em trânsito',
      statusType: 'transit',
      total: 'R$ 319,90',
      items: [{ name: 'Vans Old Skool', qty: 1, size: 42 }],
    },
    {
      id: '123456788',
      date: '15/05/2026',
      status: 'Entregue',
      statusType: 'delivered',
      total: 'R$ 249,90',
      items: [{ name: 'Tênis Casual Comfort', qty: 1, size: 40 }],
    },
    {
      id: '123456787',
      date: '10/05/2026',
      status: 'Cancelado',
      statusType: 'canceled',
      total: 'R$ 399,90',
      items: [{ name: 'Tênis Running Ultra', qty: 1, size: 42 }],
    },
    {
      id: '123456786',
      date: '05/05/2026',
      status: 'Processando',
      statusType: 'processing',
      total: 'R$ 279,90',
      items: [{ name: 'Tênis Training Max', qty: 1, size: 41 }],
    },
  ];

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'transit':
        return <Package className="w-5 h-5" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5" />;
      case 'canceled':
        return <XCircle className="w-5 h-5" />;
      case 'processing':
        return <Clock className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'transit':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'delivered':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'canceled':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Meus Pedidos</h1>
        <p className="text-gray-600 mb-8">Acompanhe todos os seus pedidos</p>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Pedido realizado em</p>
                  <p className="font-semibold">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Número do pedido</p>
                  <p className="font-semibold">#{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="font-bold text-lg">{order.total}</p>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(order.statusType)}`}>
                  {getStatusIcon(order.statusType)}
                  <span className="font-semibold">{order.status}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-500">Produto</span>
                  </div>
                  <div className="flex-1">
                    {order.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Tamanho: {item.size} | Quantidade: {item.qty}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => navigate('/rastreamento')}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Rastrear Pedido
                  </button>
                  <button className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Ver Detalhes
                  </button>
                  {order.statusType === 'delivered' && (
                    <button className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Comprar Novamente
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum pedido encontrado</h3>
            <p className="text-gray-600 mb-6">Você ainda não realizou nenhuma compra</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Começar a Comprar
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
