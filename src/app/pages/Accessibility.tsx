import { Eye, Type, Contrast, ZoomIn, ZoomOut, Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';

export default function Accessibility() {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
  };

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setDarkMode(false);
    setSoundEnabled(true);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Eye className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Recursos de Acessibilidade</h1>
        </div>
        <p className="text-gray-600 mb-8">Personalize sua experiência de navegação</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-blue-900">
            Esta página permite que você ajuste a aparência e funcionalidade do site para melhor atender às suas necessidades.
            Todas as alterações são aplicadas imediatamente e afetam todas as páginas do site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Type className="w-6 h-6 text-gray-700" />
              <h2 className="text-xl font-bold">Tamanho do Texto</h2>
            </div>
            <p className="text-gray-600 mb-4">Ajuste o tamanho do texto para facilitar a leitura</p>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize <= 80}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomOut className="w-5 h-5" />
                Diminuir
              </button>
              <span className="font-bold text-lg">{fontSize}%</span>
              <button
                onClick={increaseFontSize}
                disabled={fontSize >= 150}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomIn className="w-5 h-5" />
                Aumentar
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Contrast className="w-6 h-6 text-gray-700" />
              <h2 className="text-xl font-bold">Alto Contraste</h2>
            </div>
            <p className="text-gray-600 mb-4">Ative o modo de alto contraste para melhor visibilidade</p>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full py-3 rounded-lg font-bold transition-colors ${
                highContrast
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {highContrast ? 'Desativar' : 'Ativar'} Alto Contraste
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              {darkMode ? <Moon className="w-6 h-6 text-gray-700" /> : <Sun className="w-6 h-6 text-gray-700" />}
              <h2 className="text-xl font-bold">Modo Escuro</h2>
            </div>
            <p className="text-gray-600 mb-4">Reduza o brilho da tela com o tema escuro</p>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-full py-3 rounded-lg font-bold transition-colors ${
                darkMode
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {darkMode ? 'Desativar' : 'Ativar'} Modo Escuro
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              {soundEnabled ? <Volume2 className="w-6 h-6 text-gray-700" /> : <VolumeX className="w-6 h-6 text-gray-700" />}
              <h2 className="text-xl font-bold">Alertas Sonoros</h2>
            </div>
            <p className="text-gray-600 mb-4">Ative ou desative os sons de notificação</p>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-full py-3 rounded-lg font-bold transition-colors ${
                soundEnabled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {soundEnabled ? 'Desativar' : 'Ativar'} Sons
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Navegação por Teclado</h2>
          <div className="space-y-3 text-gray-700">
            <p><kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">Tab</kbd> - Navegar para o próximo elemento</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">Shift + Tab</kbd> - Navegar para o elemento anterior</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">Enter</kbd> - Ativar link ou botão</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">Esc</kbd> - Fechar modais e menus</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">Setas</kbd> - Navegar em menus e listas</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Tecnologias Assistivas</h2>
          <div className="space-y-3 text-gray-700">
            <p>✓ Compatível com leitores de tela (NVDA, JAWS, VoiceOver)</p>
            <p>✓ Suporte a navegação por teclado completa</p>
            <p>✓ Textos alternativos em todas as imagens</p>
            <p>✓ Contraste adequado em todos os elementos</p>
            <p>✓ Estrutura semântica HTML adequada</p>
            <p>✓ Labels descritivos em formulários</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={resetSettings}
            className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
          >
            Restaurar Padrões
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Voltar para Início
          </button>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold mb-3">Precisa de mais ajuda?</h3>
          <p className="text-gray-700 mb-4">
            Se você encontrar alguma dificuldade de acessibilidade em nosso site ou precisar de assistência adicional,
            entre em contato conosco:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>📧 Email: acessibilidade@ianstore.com</p>
            <p>📞 Telefone: 0800 123 4567</p>
            <p>💬 Chat ao vivo disponível 24/7</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
