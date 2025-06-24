# 🤝 ConectaONG

Uma plataforma web que conecta instituições sociais a voluntários, facilitando a divulgação de necessidades e promovendo o engajamento em causas sociais.

## 📌 Descrição

A ConectaONG foi criada para resolver o problema enfrentado por ONGs que ainda utilizam métodos manuais e descentralizados para captar voluntários e divulgar suas demandas. Esta plataforma digital oferece um ambiente intuitivo, organizado e responsivo onde:

- ONGs podem cadastrar suas necessidades de forma estruturada;
- Voluntários podem visualizar e se candidatar às oportunidades;
- A sociedade civil tem mais clareza sobre como e onde ajudar.

## 🖥️ Funcionalidades

### 🌐 Estrutura e Navegação

- **Página Inicial:** Apresentação da plataforma e seu propósito social.
- **Cadastro de Necessidade:** Formulário dedicado às instituições, com validação e preenchimento automático de endereço via API do ViaCEP.
- **Visualização de Necessidades:** Página onde os voluntários acessam todas as demandas cadastradas.
- **Design Responsivo:** Interface adaptável para desktops, tablets e celulares.
- **Layout Consistente:** Padrão visual unificado com cabeçalho, rodapé, tipografia e cores harmônicas.

### 🧾 Formulário de Cadastro

**Campos obrigatórios:**

- Nome da Instituição
- Tipo de Ajuda (Educação, Saúde, Meio Ambiente, etc.)
- Título da Necessidade
- Descrição Detalhada
- CEP (com auto-preenchimento de endereço via API)
- Contato (e-mail e/ou telefone)

**Validação de Dados:** Verificação de campos obrigatórios e formatos válidos.

**Armazenamento em Array:** Os dados cadastrados são salvos em um array via JavaScript (sem banco de dados).

### 🔍 Visualização de Necessidades

- **Exibição Dinâmica:** Necessidades renderizadas automaticamente a partir do array.
- **Cards Informativos:** Apresentação visual de cada necessidade com dados essenciais.
- **Pesquisa por Palavras-chave:** Busca no título ou descrição.
- **Filtro por Tipo de Ajuda:** Exibição segmentada das necessidades.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação
- **CSS3:** Estilização e design responsivo
- **JavaScript:** Lógica da aplicação, manipulação de dados e integração com a API do ViaCEP
- **API ViaCEP:** Preenchimento automático de endereço via CEP

> **Nota:** Não há banco de dados neste projeto. As informações são manipuladas e armazenadas temporariamente via arrays em JavaScript, com foco na prototipagem funcional.

## 📁 Organização do Projeto

```
conectaong/
├── index.html                # Página Inicial
├── cadastro.html             # Formulário de Cadastro
├── visualizacao.html         # Visualização das Necessidades
├── css/
│   └── style.css             # Estilo principal
├── js/
│   ├── cadastro.js           # Lógica do formulário
│   └── visualizacao.js       # Renderização e filtros
├── img/                      # Imagens do projeto
├── README.md                 # Documentação do projeto
```

## 📄 Licença

MIT License

Copyright (c) 2025 Mateus Tochio Yano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
