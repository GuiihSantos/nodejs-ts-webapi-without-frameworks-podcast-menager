# 🎙️ Gerenciador de Podcast

Um app estilo **Netflix**, voltado para a centralização de podcasts em vídeo, organizados por categorias.

---

## 📌 Descrição

Este projeto tem como objetivo criar uma API REST que retorna episódios de podcasts com dados como:

- Nome do podcast
- Nome do episódio
- Link para o vídeo
- Categoria(s)
  
---

## 📂 Estrutura do Projeto

- **Servidor HTTP** nativo com Node.js  
- Escrita em **TypeScript**  
- Utiliza `tsx` e `tsup` para build e desenvolvimento  
- Arquivos principais estão localizados em `src/`

---

## 🚀 Scripts disponíveis

| Comando           | Descrição                                         |
|-------------------|--------------------------------------------------|
| `start:dev`       | Inicia o servidor em modo desenvolvimento        |
| `start:watch`     | Inicia o servidor com hot-reload                 |
| `dist`            | Compila o projeto com `tsup`                     |
| `start:dist`      | Compila e inicia o projeto compilado             |

---

## 🎯 Funcionalidades

- ✅ Listagem de episódios organizados por categoria  
- ✅ Filtro de episódios por nome do podcast  
- ✅ Categorias suportadas:
  - Saúde
  - Entrevista
  - Humor

---

## 🔗 Exemplo de Resposta da API

```js
[
  {
    "podcastName": "Joguei No Grupo",
    "episodio": "Terapia Coletiva Com Senhorita Bira",
    "videoId": "f0WWIpVvWqg",
    "cover": "https://i.ytimg.com/vi//hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLUXudRNqnC6PSdPLOmwuxkStO7w",
    "link": "https://www.youtube.com/watch?v=f0WWIpVvWqg&t=1996s&pp=0gcJCesJAYcqIYzv",
    "categoria": ["humor"]
  },

```

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Utilizado para criar o servidor HTTP de forma nativa, sem frameworks.
- **TypeScript** – Superset do JavaScript que adiciona tipagem estática ao código.

---
## 📄 Licença

Este projeto está licenciado sob a ISC License.

