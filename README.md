# Projeto Front-End - Roadmap de Features

Disponível em: [Vercel](https://sistema-flow.vercel.app)

## Objetivo
O projeto **Megafarma** é um sistema de farmácia online desenvolvido com **React + Vite + TypeScript**, totalmente responsivo e acessível. O site exibe produtos, mostra as unidades físicas, responde dúvidas e permite contato direto com o usuário.

Há uma área de login e cadastro, com dois tipos de acesso:
- **Usuário comum:** gerencia suas informações e pedidos.
- **Administrador:** controla produtos e configurações do sistema.

O frontend prioriza a segurança: nenhum dado sensível do usuário é salvo no localStorage. O perfil do usuário conta com upload de foto via localStorage, preview instantâneo e interface moderna, mantendo privacidade e usabilidade.

## 🔗 API Backend

O repositório da API utilizada neste projeto está disponível em: [megafarma](https://github.com/PxS00/megafarma)

Sinta-se à vontade para dar palpites, ideias e melhorias via issues ou pull requests!

---

## 🏗️ Estrutura do Site

 Home | Produtos | Unidades | FAQ | Contato | Integrantes | Perfil

### 🏠 Home
Visão geral da farmácia, com destaque para promoções, produtos em alta e links principais do site.

### 💊 Produtos
Listagem de produtos disponíveis com imagem, nome, preço e botão de visualização.  

### 📍 Unidades
Mapa e endereços das farmácias físicas, com horários de funcionamento.

### ❓ FAQ
Perguntas e respostas diretas sobre entrega, pagamento e uso do site.

### 📞 Contato
Formulário para mensagens e dados de contato (telefone, e-mail, WhatsApp).

### 👤 Minha Conta
Login e cadastro de usuários.

.env
```
VITE_API_URL_UNIDADES=https://megafarma-g620.onrender.com/unidades
VITE_HOME_URL=https://dummyjson.com/quotes
VITE_API_URL_USUARIOS=https://megafarma-g620.onrender.com/clientes
VITE_API_URL_PRODUTOS=https://megafarma-g620.onrender.com/produtos
```

---

**Tech Lead:** Prof. Alexandre  
**Project Coordinator:** Enzo Okuizumi   
**QA:** Lucas Rossoni

---

| Equipe | Integrantes |
|:-------|:-------------|
| **Equipe A** | Enrico, Iago, Vitor |
| **Equipe B** | Kelson, Alex, Rossoni |
| **Equipe C** | Enzo Okuizumi, Barros, Milton |
| **Equipe D** | André, João Victor, Lucas Tavares |
| **Equipe E** | Orlando, Alexandre, Gabriel Lourenço |
| **Equipe F** | Luiz Flosi, Arthur Brito, Pedro Brum |
| **Equipe G** | Moisés, Sofia, Felipe |
| **Equipe H** | João Victor L, Pedro Vaz |

---

## IMPLEMENTADOS:
<ul style="color:green">

- FEATURE / Realizar a lista de tarefas no README.md / prof.Alexandre 

- FEATURE / Criar o projeto (VITE+REACT+TS) do zero / prof.Alexandre

- FEATURE / Limpar o boiler-plate e instalar os pacotes react-router-dom, tailwindcss, json-server, react-icons, react-use-form/ Moisés Barsoti, Sofia Siqueira, Felipe Kirschne

- FEATURE / Criar uma api com json-server, o endpoint de nome usuarios, os dados do endpoint são [id,nome,nomeUser,email,avatar]/ Rossoni - Kelson- Alex

- FEATURE / Criar os componentes principais dentro dos padrões estabelecidos com nomes e pastas Cabecalho, Rodape e Menu / Luiz Flosi, Arthur Brito e Pedro Brum 

- FEATURE /(Criar formulário, com validação de useForms, estilizado de Cadastro)/ Orlando - Gabriel Lourenço - Alexandre

- FEATURE / Alterar o campo Senha no Cadastro / Orlando - Gabriel Lourenço - Alexandre

- FEATURE / Aplicação de responsividade em todos os componentes, utilizando 3 resoluções(lg,md e sm) / Joao Victor L - Pedro Vaz

- FEATURE / Alterar o TipoUser adicionando senha / Enzo Okuizumi - Lucas Barros - Milton Marcelino

- FEATURE / Criar rota com página de Lista de produtos e arrumar index.html / Luiz Flosi, Arthur Brito e Pedro Brum

- BUGFIX | Arrumar validação do usuário na página de login | Moisés Barsoti, Sofia Siqueira, Felipe Kirschne

- FEATURE | Alterar a página de Login para se adequar ao projeto | Equipe C

- BUGFIX | Arrumar API na página Home | Equipe A

- FEATURE | Adicionar Suspensão na página | Equipe A

- **BUGFIX:** Arrumar Pagina Error -> <span style="color:white">Equipe D</span>

- **BUGFIX:** Reformulação das rotas -> <span style="color:white">Equipe A</span>

- **BUGFIX:** Centralizar Zod em tipoUsuario.ts e corrigir informações divergentes da API (db.json) -> <span style="color:white">Equipe C</span>

- **FEATURE:** Corrigir responsividade de Header, Footer, etc -> <span style="color:white">Equipe B</span>

- **FEATURE:** Criação das rotas para as páginas de Unidades, FAQ e Contato. Adição das mesmas no componente Menu -> <span style="color:white">Equipe B</span>

- **BUGFIX:** Arrumar a API da página Home -> <span style="color:white">Equipe A</span>

- **BUGFIX:** Arrumar as Rotas (Pelo visto está sem a página Home em main.tsx) -> <span style="color:white">Equipe A (Precisa arrumar a página Home primeiro. Não sei)</span>

- **BUGFIX:** Corrigir Página Home (Tem um tipo any... Precisa gerar um tipo especifico para esses dados) -> <span style="color:white">Equipe A</span>

- **BUGFIX:** Arrumar a página de Produtos (Cards dos produtos) -> <span style="color:white">Equipe F</span>

- **FEATURE:** Desenvolver a página Home -> <span style="color:white">Equipe D</span>

- **FEATURE:** Desenvolver a página de Unidades (Cards das Unidades das Farmácias) -> <span style="color:white">Equipe B</span>

- **FEATURE:** Desenvolver a página de FAQ -> <span style="color:white">Equipe H</span>

- **FEATURE:** Desenvolver a página de Contato -> <span style="color:white">Equipe G</span>

- **FIX:** Arrumar posicionamento botão de mudar Tema -> <span style="color:white">Equipe C</span>

- **REFACTOR:** Refatorar css para global -> <span style="color:white">Equipe G</span>

- **FIX:** Arrumar API da página Home -> <span style="color:white">Equipe C</span>

- **FEATURE:** Desenvolver a página do Usuário Comum -> <span style="color:white">Equipe B</span>

- **FEATURE:** Desenvolver a página de um Produto (Exibindo Nome / Preço / Informações de um produto) -> <span style="color:white">Equipe E</span>

- **FEATURE:** Adicionar React Icons e mudar o botão de Login para um react Icon -> <span style="color:white">Equipe H</span>

- **FIX:** Arrumar Login e Cadastro -> <span style="color:white">Equipe B</span>

- **FIX:** Arrumar CSS nas páginas FAQ, Contato e Login -> <span style="color:white">Equipe D</span>

- **FEATURE:** Melhorar footer -> <span style="color:white">Equipe E</span>

- **Fix:** Aplicar APIs de Java - megafarma -> <span style="color:white">Equipe B</span>

- **FEATURE:** Desenvolver a componente de Spinner -> <span style="color:white">Equipe B</span>

- **FEATURE:** Desenvolver um componente de adição de produtos(reutilizavel) -> <span style="color:white">Equipe B</span>

- **FEATURE:** Criar uma página de Integrantes -> <span style="color:white">Equipe G</span>

- **FEATURE:** Upload de foto de perfil via localStorage, com preview instantâneo, limite de tamanho, UX aprimorada e botão padronizado. Nenhum dado sensível é salvo no localStorage. <span style="color:white">Equipe B</span>
</ul>

