# Portfólio de José Luiz Neto

Site estático em HTML, CSS e JavaScript, sem dependências ou etapa de build.

## Estrutura

```text
index.html                 # Conteúdo e entrada do GitHub Pages
src/
  css/
    styles.css             # Entrada dos estilos e ordem de importação
    base.css               # Temas, variáveis e estilos globais
    header.css             # Navegação e controle de tema
    hero.css               # Apresentação, retrato e botões
    sections.css           # Seções compartilhadas, sobre e tecnologias
    projects.css           # Cards dos projetos e revelação ao rolar
    contact.css            # Contato, ícones sociais e rodapé
    responsive.css         # Adaptações para tablet e celular
    motion.css             # Preferência por movimento reduzido
  scripts/
    main.js                # Inicialização dos módulos
    theme.js               # Tema, armazenamento e atributos acessíveis
    skills-carousel.js     # Cópia visual da lista para animação contínua
    scroll-reveal.js       # Revelação das seções ao rolar
    footer.js              # Ano atual do rodapé
assets/
  images/                  # Foto e imagens dos projetos
  icons/                   # Ícones SVG e créditos
```

## Executar localmente

Sirva a raiz do projeto via HTTP, usando Live Server ou Python:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`. Os módulos JavaScript precisam de um servidor
HTTP; abrir o HTML diretamente via `file://` pode bloquear seu carregamento.

## Manutenção

- Edite textos, projetos e tecnologias em `index.html`. A lista de tecnologias
  aparece apenas uma vez no HTML; sua cópia animada é criada pelo JavaScript e
  ocultada dos leitores de tela.
- Ajuste cores e temas nas variáveis de `src/css/base.css`.
- Edite o CSS da área correspondente. As regras responsivas e de movimento
  reduzido são importadas por último para preservar a cascata.
- Adicione comportamentos em módulos de `src/scripts/` e inicialize-os em
  `main.js`. Cada módulo consulta apenas os elementos que utiliza.
- Caminhos de imagens no HTML partem da raiz; URLs no CSS partem de `src/css/`.

## Publicação

No GitHub Pages, publique a raiz da branch configurada. O `index.html` permanece
na raiz como entrada pública e carrega os arquivos de `src/` diretamente.
Não é necessário instalar pacotes ou gerar uma pasta de distribuição.

## Verificação manual

Confira imagens e ícones, links de navegação, layouts mobile e desktop, troca de
tema e persistência após recarregar. O carrossel mantém o loop contínuo sem barra de rolagem, inclusive com a
preferência de movimento reduzido. As elevações de cards e botões preservam
as transições suaves. Sem suporte
a `IntersectionObserver`, o conteúdo permanece visível.
