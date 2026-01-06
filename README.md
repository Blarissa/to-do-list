# 📝 To-Do List - Lista de Tarefas

Uma aplicação moderna e intuitiva de gerenciamento de tarefas desenvolvida com **Angular 20**, utilizando os recursos mais recentes como Standalone Components e Signals para uma experiência reativa e performática.

![Angular](https://img.shields.io/badge/Angular-20.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## ✨ Funcionalidades

### 📋 Gerenciamento de Tarefas
- ✅ **Criar tarefas** - Adicione novas tarefas rapidamente
- ✅ **Marcar como concluída** - Clique no checkbox para marcar/desmarcar
- ✅ **Excluir tarefas** - Remova tarefas individuais (botão aparece ao passar o mouse)
- ✅ **Duplo clique** - Alterne o status da tarefa clicando duas vezes no texto
- ✅ **Limpar concluídas** - Remove todas as tarefas concluídas de uma vez

### 🏷️ Sistema de Tags
- 🎨 **6 tags predefinidas** com cores distintas:
  - 🔵 **Trabalho** - Azul (#667eea)
  - 🟠 **Pessoal** - Laranja (#f59e0b)
  - 🔴 **Urgente** - Vermelho (#ef4444)
  - 🟢 **Estudo** - Verde (#10b981)
  - 🟣 **Casa** - Roxo (#8b5cf6)
  - 🩷 **Saúde** - Rosa (#ec4899)
- ✨ Seleção múltipla de tags ao criar tarefas
- 🔍 Filtro por tags específicas
- 🎨 Tags coloridas visíveis em cada tarefa

### 🔍 Filtros Avançados
- **Todas** - Exibe todas as tarefas
- **Ativas** - Apenas tarefas pendentes
- **Concluídas** - Apenas tarefas finalizadas
- **Por Tag** - Filtre tarefas por categoria específica

### 💾 Persistência de Dados
- Salvamento automático no **localStorage**
- Dados preservados entre sessões
- Carregamento automático ao abrir a aplicação

### 📱 Design Responsivo
- Interface adaptável para desktop, tablet e mobile
- Gradiente roxo moderno
- Animações suaves e transições
- Acessibilidade com ARIA labels

## 🚀 Tecnologias Utilizadas

### Core
- **Angular 20.2** - Framework principal
- **TypeScript 5.0** - Linguagem de programação
- **SCSS** - Estilização avançada com variáveis CSS

### Arquitetura Angular
- ✨ **Standalone Components** - Componentes independentes sem módulos
- 🔄 **Signals** - Sistema reativo moderno do Angular
- 💡 **Computed Signals** - Performance otimizada para valores derivados
- 🎯 **Two-way Data Binding** - Sincronização automática de dados
- 🔧 **Dependency Injection** - Injeção de dependências nativa

### Recursos Modernos
- **Server-Side Rendering (SSR)** - Suporte a renderização no servidor
- **Platform Detection** - Detecção de ambiente (browser/server)
- **Type Safety** - Tipagem forte em todo o código
- **CSS Variables** - Sistema de design tokens

## 📦 Instalação

### Pré-requisitos
- **Node.js** 20.x ou superior
- **npm** 10.x ou superior

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/to-do-list.git
cd to-do-list
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Acesse a aplicação**
```
http://localhost:4200
```

## 🛠️ Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Build com watch mode
npm run watch

# Servidor SSR
npm run serve:ssr:to-do-list
```

## 📁 Estrutura do Projeto

```
to-do-list/
├── src/
│   ├── app/
│   │   ├── app.ts              # Componente principal
│   │   ├── app.html            # Template do componente
│   │   ├── app.scss            # Estilos do componente
│   │   ├── app.routes.ts       # Rotas da aplicação
│   │   └── app.config.ts       # Configuração do app
│   ├── index.html              # HTML principal
│   ├── main.ts                 # Ponto de entrada
│   ├── styles.scss             # Estilos globais
│   └── server.ts               # Configuração SSR
├── public/                     # Arquivos estáticos
├── angular.json                # Configuração Angular
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências
└── README.md                   # Documentação
```

## 🎨 Arquitetura de Código

### Interface Todo
```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  tags: string[];
}
```

### Signals Principais
- `todos` - Lista de todas as tarefas
- `filter` - Filtro de status (all/active/completed)
- `tagFilter` - Filtro por tag selecionada
- `selectedTags` - Tags selecionadas para nova tarefa
- `filteredTodos` - Computed signal com tarefas filtradas
- `activeCount` - Computed signal com contagem de tarefas ativas
- `completedCount` - Computed signal com contagem de tarefas concluídas

### Sistema de Design Tokens (CSS Variables)
```scss
// Cores principais
--primary-gradient-start: #667eea
--primary-gradient-end: #764ba2
--primary-color: #764ba2
--primary-hover: #5f3a82

// Espaçamentos
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 10px
--spacing-lg: 15px
--spacing-xl: 20px

// Border radius
--border-radius-sm: 4px
--border-radius-md: 10px
--border-radius-lg: 12px
--border-radius-xl: 16px
```

## 🎯 Funcionalidades Detalhadas

### Adicionar Tarefa
1. Digite o texto da tarefa no campo de entrada
2. (Opcional) Selecione uma ou mais tags clicando nos botões coloridos
3. Pressione **Enter** ou clique em **Adicionar**
4. A tarefa aparece instantaneamente na lista

### Gerenciar Tarefas
- **Marcar/Desmarcar**: Clique no checkbox à esquerda
- **Duplo clique**: Clique duas vezes no texto da tarefa
- **Excluir**: Passe o mouse sobre a tarefa e clique no **×**
- **Visualizar tags**: Tags coloridas aparecem abaixo do texto

### Filtrar Tarefas
- **Por status**: Clique em "Todas", "Ativas" ou "Concluídas"
- **Por tag**: Clique em uma tag específica no rodapé
- **Limpar filtros**: Clique novamente na mesma tag ou filtro

### Limpar Tarefas
- Clique em **"Limpar concluídas"** para remover todas as tarefas marcadas como concluídas

## 🔧 Personalização

### Adicionar Novas Tags
Edite o arquivo `src/app/app.ts`:

```typescript
const AVAILABLE_TAGS: readonly Tag[] = [
  { name: 'Trabalho', color: '#667eea' },
  { name: 'Pessoal', color: '#f59e0b' },
  // Adicione novas tags aqui
  { name: 'Fitness', color: '#14b8a6' },
];
```

### Customizar Cores
Edite as variáveis CSS em `src/app/app.scss`:

```scss
:host {
  --primary-gradient-start: #667eea;
  --primary-gradient-end: #764ba2;
  // Modifique as cores conforme necessário
}
```

## 🌐 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints em:
- **Desktop**: > 600px
- **Mobile**: ≤ 600px

## ♿ Acessibilidade

- ✅ Labels ARIA para ações
- ✅ Navegação por teclado
- ✅ Contraste de cores adequado
- ✅ Semântica HTML apropriada
- ✅ Focus visível em elementos interativos

## 🚀 Performance

### Otimizações Implementadas
- ✅ **Computed Signals** - Recalculam apenas quando necessário
- ✅ **OnPush Change Detection** - Detecção de mudanças otimizada
- ✅ **Lazy Loading** - Carregamento sob demanda
- ✅ **Tree Shaking** - Remoção de código não utilizado
- ✅ **Minificação** - Código otimizado para produção

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ usando Angular 20

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Se encontrar algum problema ou tiver sugestões, por favor abra uma [issue](https://github.com/seu-usuario/to-do-list/issues).

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!**
