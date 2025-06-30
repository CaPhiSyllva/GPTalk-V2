import React, { useState } from 'react';
import './SideMenu.css';

const SideMenu = ({ 
  onNewChat, 
  chatHistory = [], // Valor padrão
  onSelectChat, 
  onClearHistory 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className={`sidemenu ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button 
        className="menu-toggle" 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
      >
        {isExpanded ? '←' : '→'}
      </button>
      
      {isExpanded && (
        <>
          <button className='sidemenu-button' onClick={onNewChat}>
            <span className="plus-icon">+</span>
            Novo chat
          </button>
          
          <div className="chat-history">
            <div className="history-header">
              <h3>Histórico</h3>
              {chatHistory.length > 0 && (
                <button 
                  className="clear-button"
                  onClick={onClearHistory}
                  aria-label="Limpar histórico"
                >
                  Limpar
                </button>
              )}
            </div>
            
            {chatHistory.length > 0 ? (
              <ul>
                {chatHistory.map((chat, index) => (
                  <li 
                    key={index} 
                    onClick={() => onSelectChat(index)}
                    className="history-item"
                  >
                    {chat.title || `Conversa ${index + 1}`}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-history">Nenhuma conversa recente</p>
            )}
          </div>
          
          <div className="user-info">
            <div className="user-avatar">U</div>
            <div className="user-details">
              <strong>Usuário</strong>
              <small>conta@exemplo.com</small>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

// Valores padrão para as props
SideMenu.defaultProps = {
  chatHistory: [],
  onNewChat: () => {},
  onSelectChat: () => {},
  onClearHistory: () => {}
};

<div className="sidemenu">
  <button className="sidemenu-button">
    <span className="plus-icon">+</span>
    <span>Novo chat</span>
  </button>
  
  <div className="chat-history">
    <div className="history-header">
      <h3>Histórico</h3>
      <button className="clear-button">Limpar</button>
    </div>
    {/* Itens do histórico aqui */}
  </div>
  
  <div className="user-info">
    <div className="user-avatar">U</div>
    <div className="user-details">
      <strong>Usuário</strong>
      <small>conta@exemplo.com</small>
    </div>
  </div>
</div>

export default SideMenu;