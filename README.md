# GPTalk-V2  
**Integração Inteligente com ChatGPT via Node.js & React**

---

## Visão Geral

GPTalk-V2 é uma aplicação web full-stack que integra a API do ChatGPT da OpenAI, unindo um backend Node.js (Express) robusto e um frontend React.js moderno. O sistema entrega uma interface de chat responsiva, escalável e segura para interações em tempo real com inteligência artificial generativa, promovendo produtividade e inovação.

---

## Tecnologias Utilizadas

- **Front-end:** React.js (Hooks, CSS modular)  
- **Back-end:** Node.js, Express, CORS, dotenv  
- **API:** OpenAI SDK (`openai` package)  
- **Comunicação:** Axios para chamadas HTTP entre frontend e backend  
- **Ferramentas de Desenvolvimento:** Nodemon para hot reload no backend  

---

## Estrutura do Projeto

├── src/
│ ├── api/
│ │ └── api.js # Função para chamada da API via Axios
│ ├── components/
│ │ ├── ChatMessage.jsx # Componente para exibir mensagens do chat
│ │ └── SideMenu.jsx # Menu lateral com histórico e ações
│ ├── config/
│ │ └── openai.js # Configuração do cliente OpenAI
│ ├── controllers/
│ │ └── prompt-controller.js # Lógica do endpoint que interage com OpenAI
│ ├── routes/
│ │ └── routes.js # Definição das rotas Express
│ ├── styles/
│ │ └── ... # CSS modular para componentes
│ ├── App.jsx # Componente raiz React
│ ├── index.js # Ponto de entrada do React
│ └── server.js # Servidor Express principal
├── .env.example # Template para variáveis de ambiente
├── package.json # Dependências e scripts do backend
└── README.md # Documentação do projeto

yaml
Copiar
Editar

---

## Como Rodar o Projeto

### Pré-requisitos

- Node.js v18 ou superior instalado  
- Chave válida da API OpenAI (`OPEN_AI_KEY`)  
- Porta padrão configurada para `5000` (personalizável via `.env`)

### Passos para Execução

1. Clone o repositório:  
   ```bash
   git clone https://seu-repositorio.git
   cd seu-repositorio
Configure as variáveis de ambiente:

Copie .env.example para .env

Insira sua chave da OpenAI no campo OPEN_AI_KEY

Instale as dependências do backend:

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
Instale e rode o frontend (caso esteja em pasta separada):

Execute npm install e npm start na pasta do frontend

Configure as chamadas HTTP para o backend no endereço http://localhost:5000/api/prompt

Acesse a aplicação no navegador:

arduino
Copiar
Editar
http://localhost:3000
Funcionalidades Principais
Interface de chat moderna, com histórico e auto-scroll inteligente

Indicadores visuais dinâmicos para carregamento e digitação

Suporte a múltiplas sessões com gerenciamento de histórico no menu lateral

Validação robusta dos prompts no backend para garantir qualidade e segurança

Tratamento detalhado de erros com mensagens claras para o usuário final

Monitoramento de performance via reportWebVitals no frontend

Suporte a Progressive Web App (PWA) com Service Worker para melhor experiência em produção

Arquitetura Técnica
Frontend
React com hooks para controle fino de estado e ciclos de vida

Componentes modulares: ChatMessage, SideMenu, e formulário de input

makeRequest encapsula chamadas HTTP ao backend com tratamento de erros

UX aprimorado: textarea autoajustável, envio via Enter, suporte a Shift+Enter para nova linha

Backend
API RESTful construída com Express e middleware CORS para segurança

Arquitetura modular com controllers e roteamento organizados

Cliente OpenAI configurado para alta resiliência com timeout e retries

Endpoint /health para monitoramento e verificação de saúde da API

Tratamento completo de erros com códigos HTTP e mensagens customizadas

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
Possíveis Melhorias Futuras
Implementação de autenticação e controle de acesso por usuário

Persistência do histórico em banco de dados para consultas futuras

Interface adaptativa com temas (dark mode, acessibilidade)

Implantação em ambiente cloud com pipelines CI/CD automatizados

Desenvolvimento de testes automatizados para garantir qualidade e estabilidade

Autor
Cauã — Analista de Cibersegurança, apaixonado por tecnologia e aprendizado contínuo.
