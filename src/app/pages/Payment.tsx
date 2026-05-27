import { CreditCard, Smartphone, Barcode, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [step, setStep] = useState(1);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Pagamento</h1>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center mx-auto mb-2 font-bold`}>
                {step > 1 ? <CheckCircle className="w-6 h-6" /> : '1'}
              </div>
              <p className="text-sm font-semibold">Dados Pessoais</p>
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'} -mx-4`}></div>
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center mx-auto mb-2 font-bold`}>
                {step > 2 ? <CheckCircle className="w-6 h-6" /> : '2'}
              </div>
              <p className="text-sm">Endereço</p>
            </div>
            <div className={`flex-1 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'} -mx-4`}></div>
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center mx-auto mb-2 font-bold`}>
                {step > 3 ? <CheckCircle className="w-6 h-6" /> : '3'}
              </div>
              <p className="text-sm">Pagamento</p>
            </div>
            <div className={`flex-1 h-1 ${step >= 4 ? 'bg-blue-600' : 'bg-gray-300'} -mx-4`}></div>
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center mx-auto mb-2 font-bold`}>
                {step > 4 ? <CheckCircle className="w-6 h-6" /> : '4'}
              </div>
              <p className="text-sm">Confirmação</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Dados Pessoais</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome Completo</label>
                    <input type="text" placeholder="Digite seu nome completo" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">E-mail</label>
                      <input type="email" placeholder="seu@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Telefone</label>
                      <input type="tel" placeholder="(00) 00000-0000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">CPF</label>
                    <input type="text" placeholder="000.000.000-00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Endereço de Entrega</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">CEP</label>
                    <input type="text" placeholder="00000-000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Endereço</label>
                    <input type="text" placeholder="Rua, avenida..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Número</label>
                      <input type="text" placeholder="123" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold mb-2">Complemento</label>
                      <input type="text" placeholder="Apto, bloco..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Bairro</label>
                      <input type="text" placeholder="Centro" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Cidade</label>
                      <input type="text" placeholder="São Paulo" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors">
                      Voltar
                    </button>
                    <button onClick={() => setStep(3)} className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                      Continuar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Forma de Pagamento</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setPaymentMethod('credit')}
                    className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                      paymentMethod === 'credit' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <CreditCard className="w-8 h-8" />
                    <span className="font-semibold">Cartão de Crédito</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                      paymentMethod === 'pix' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Smartphone className="w-8 h-8" />
                    <span className="font-semibold">PIX</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('boleto')}
                    className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                      paymentMethod === 'boleto' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Barcode className="w-8 h-8" />
                    <span className="font-semibold">Boleto</span>
                  </button>
                </div>

                {paymentMethod === 'credit' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Número do Cartão</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nome no Cartão</label>
                      <input type="text" placeholder="Como está impresso no cartão" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Validade</label>
                        <input type="text" placeholder="MM/AA" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">CVV</label>
                        <input type="text" placeholder="000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Parcelas</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option>1x de R$ 319,90 sem juros</option>
                        <option>2x de R$ 159,95 sem juros</option>
                        <option>3x de R$ 106,63 sem juros</option>
                        <option>4x de R$ 79,98 sem juros</option>
                      </select>
                    </div>
                  </div>
                )}

                {paymentMethod === 'pix' && (
                  <div className="text-center py-8">
                    <div className="bg-gray-100 p-8 rounded-lg inline-block mb-4">
                      <div className="w-48 h-48 bg-white flex items-center justify-center">
                        <p className="text-gray-500 text-sm">QR Code PIX</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Escaneie o QR Code com seu aplicativo de banco</p>
                    <p className="text-xs text-gray-500">Pagamento identificado automaticamente</p>
                  </div>
                )}

                {paymentMethod === 'boleto' && (
                  <div className="text-center py-8">
                    <div className="bg-gray-100 p-6 rounded-lg mb-4">
                      <p className="text-sm font-mono mb-2">34191.79001 01043.510047 91020.150008 1 96610000031990</p>
                      <button className="text-blue-600 hover:underline text-sm font-semibold">Copiar código de barras</button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Vencimento: 30/05/2026</p>
                    <p className="text-xs text-gray-500">O boleto pode levar até 3 dias úteis para ser compensado</p>
                  </div>
                )}

                <div className="flex gap-4 mt-6">
                  <button onClick={() => setStep(2)} className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors">
                    Voltar
                  </button>
                  <button onClick={() => setStep(4)} className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center py-8">
                  <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Pedido Confirmado!</h2>
                  <p className="text-gray-600 mb-2">Número do pedido: #123456789</p>
                  <p className="text-gray-600 mb-8">Enviamos um e-mail com os detalhes da sua compra</p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold mb-4">Resumo do Pedido</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>R$ 299,90</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frete:</span>
                        <span>R$ 20,00</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>R$ 319,90</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => window.location.href = '/'} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Voltar para Início
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-4">Resumo do Pedido</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Produto</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vans Old Skool</p>
                    <p className="text-sm text-gray-600">Tamanho: 42</p>
                    <p className="text-sm text-gray-600">Qtd: 1</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R$ 299,90</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span>R$ 20,00</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>R$ 319,90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
