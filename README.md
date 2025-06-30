# GPTalk-V2

# Integração Inteligente com ChatGPT via Node.js & React

## Visão Geral

Este projeto entrega uma aplicação web full-stack que integra a API do ChatGPT da OpenAI, combinando um backend Node.js (Express) e um frontend React.js moderno. O objetivo é proporcionar uma interface de chat responsiva, escalável e segura para interações com inteligência artificial generativa em tempo real.

## Tecnologias Utilizadas

- **Front-end:** React.js, Hooks, CSS modular  
- **Back-end:** Node.js, Express, CORS, dotenv  
- **API:** OpenAI SDK (`openai` package)  
- **Comunicação:** Axios para chamadas HTTP do React ao Node  
- **Desenvolvimento:** Nodemon para hot reload no backend  

## Estrutura do Projeto

├── src/
│ ├── api/
│ │ └── api.js # Função para chamada da API via axios
│ ├── components/
│ │ ├── ChatMessage.jsx # Componente de exibição da mensagem do chat
│ │ └── SideMenu.jsx # Menu lateral com histórico e ações
│ ├── config/
│ │ └── openai.js # Configuração do cliente OpenAI
│ ├── controllers/
│ │ └── prompt-controller.js # Lógica do endpoint que conversa com OpenAI
│ ├── routes/
│ │ └── routes.js # Definição das rotas Express
│ ├── styles/
│ │ └── ... # CSS modular para componentes
│ ├── App.jsx # Componente raiz React
│ ├── index.js # Entrada da aplicação React
│ └── server.js # Servidor Express principal
├── .env.example # Template para variáveis de ambiente
├── package.json # Dependências e scripts do backend
└── README.md # Este arquivo

markdown
Copiar
Editar

## Como Rodar o Projeto

### Pré-requisitos

- Node.js v18+ instalado  
- Chave da API OpenAI válida (`OPEN_AI_KEY`)  
- Porta padrão: `5000` (configurável via `.env`)

### Passo a Passo

1. Clone o repositório:  
   ```bash
   git clone https://seu-repositorio.git
   cd seu-repositorio
Configure as variáveis de ambiente:

Copie .env.example para .env

Insira sua chave da OpenAI no OPEN_AI_KEY

Instale dependências do backend:

bash
Copiar
Editar
cd src
npm install
Inicie o servidor em modo desenvolvimento:

bash
Copiar
Editar
npm run dev
Instale e rode o frontend:

(Se frontend estiver em pasta separada, rode o npm install e npm start lá)

Certifique-se que o frontend faça chamadas para o backend na URL correta (http://localhost:5000/api/prompt)

Acesse a aplicação no navegador:

arduino
Copiar
Editar
http://localhost:3000
Funcionalidades Principais
Interface de chat moderna com histórico e auto-scroll

Sistema de loading dinâmico com indicadores visuais

Suporte a múltiplas sessões de conversa (histórico no menu lateral)

Validação robusta dos prompts no backend

Tratamento detalhado de erros com mensagens claras para o usuário

Logs para monitoramento de performance (reportWebVitals no frontend)

Uso de Service Worker para suporte PWA (Progressive Web App) em produção

Estrutura Técnica
Front-end
React com hooks para gerenciamento de estado e efeitos

Componentes ChatMessage e SideMenu para organização visual

makeRequest encapsula as chamadas HTTP para o backend

Controle fino de UX com textarea auto-ajustável e envio via Enter/Shift+Enter

Back-end
API REST construída em Express com middleware CORS

Roteamento modular com controllers separados para lógica da OpenAI

Cliente OpenAI configurado para alta resiliência (timeout e retries)

Tratamento completo de erros com status HTTP corretos

Endpoint /health para health check e monitoramento externo

Diagramas UML
1. Diagrama de Caso de Uso
mermaid
Copiar
Editar
usecaseDiagram
    actor Usuário
    actor Sistema
    Usuário --> (Enviar mensagem)
    Usuário --> (Visualizar resposta)
    Sistema --> (Validar prompt)
    Sistema --> (Chamar API OpenAI)
    Sistema --> (Retornar resposta)
2. Diagrama de Sequência
mermaid
Copiar
Editar
sequenceDiagram
    participant U as Usuário
    participant F as Frontend React
    participant B as Backend Node.js
    participant O as OpenAI API

    U->>F: Digita mensagem no chat
    F->>B: Envia prompt via POST /api/prompt
    B->>B: Valida prompt
    B->>O: Chama OpenAI com prompt
    O-->>B: Retorna resposta gerada
    B-->>F: Envia resposta JSON
    F-->>U: Renderiza mensagem na UI
3. Diagrama de Componentes
mermaid
Copiar
Editar
graph LR
    subgraph Frontend
      React[React Components]
      Axios[Axios HTTP Client]
    end
    subgraph Backend
      Express[Express Server]
      Controller[Prompt Controller]
      OpenAI[OpenAI SDK]
    end
    React --> Axios --> Express
    Express --> Controller --> OpenAI
4. Diagrama de Atividades (Fluxo do Chat)
mermaid
Copiar
Editar
flowchart TD
    Start[Início]
    Input[Usuário digita mensagem]
    Validate{Prompt válido?}
    Error[Exibir erro]
    CallAPI[Chamar OpenAI API]
    Receive[Receber resposta]
    Display[Exibir mensagem no chat]
    End[Fim]

    Start --> Input --> Validate
    Validate -- Não --> Error --> End
    Validate -- Sim --> CallAPI --> Receive --> Display --> End
Potenciais Melhorias Futuras
Autenticação e controle de usuários

Armazenamento persistente do histórico em banco de dados

Melhoria na UI para múltiplos temas (dark mode, por exemplo)

Deploy em ambiente cloud com CI/CD

Testes automatizados para frontend e backend

Autor
Cauã — Analista de Cibersegurança, apaixonado por tecnologia e aprendizado contínuo.

Projeto concebido com visão tradicional, respeitando padrões consolidados, mas impulsionado pela inovação e foco prático na entrega.


