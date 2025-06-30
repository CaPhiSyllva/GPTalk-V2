import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import SideMenu from './components/SideMenu/SideMenu';
import ChatMessage from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Inicia como carregando
  const [error, setError] = useState(null);
  const chatLogRef = useRef(null);
  const textareaRef = useRef(null);

  // Carregar mensagem inicial
  useEffect(() => {
    async function loadInitialMessage() {
      try {
        // Simular um pequeno delay para demonstração
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setChatLog([{
          user: "gpt",
          message: "Como posso te ajudar hoje?"
        }]);
      } catch (err) {
        setError("Falha ao carregar o chat inicial");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadInitialMessage();
  }, []);

  // Rolar para a última mensagem automaticamente
  useEffect(() => {
    if (chatLogRef.current && chatLog.length > 0) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  // Auto-ajustar altura do textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Adiciona mensagem do usuário imediatamente
    const userMessage = { user: 'me', message: input };
    setChatLog(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest(input);
      
      setChatLog(prev => [
        ...prev, 
        { user: 'gpt', message: response.data }
      ]);
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError("Erro ao processar sua solicitação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  // Lidar com Shift+Enter para nova linha
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Se estiver carregando pela primeira vez
  if (isLoading && chatLog.length === 0) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Carregando chat...</p>
      </div>
    );
  }

  // Se houver erro de inicialização
  if (error) {
    return (
      <div className="app-error">
        <h2>⚠️ Algo deu errado</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Recarregar aplicação
        </button>
      </div>
    );
  }

  return (
    <div className='App'>
      <SideMenu />

      <section className='chatbox'>
        <div className='chat-log' ref={chatLogRef}>
          {chatLog.map((message, index) => (
            <ChatMessage key={`message-${index}`} message={message} />
          ))}
          
          {isLoading && (
            <div className="typing-indicator">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}
        </div>

        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <textarea
              ref={textareaRef}
              rows='1'
              className='chat-input-textarea'
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="send-button"
              aria-label="Enviar mensagem"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;