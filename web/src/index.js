import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("Erro não tratado:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Algo deu errado</h1>
          <p>Por favor, recarregue a página ou tente novamente mais tarde.</p>
          <button onClick={() => window.location.reload()}>
            Recarregar aplicação
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Renderização otimizada
function renderApp() {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}


renderApp();


if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registrado com sucesso: ', registration.scope);
      })
      .catch(error => {
        console.log('Falha ao registrar ServiceWorker: ', error);
      });
  });
}


reportWebVitals(console.log);