# Podcast Menager

### Descrição

Um app estilo netflix, aonde possa centralizar diferentes episódios, separado por categoria

### Domínio

Podcast feitos em vídeos

### Features

- listar os podcast em sessões de categorias
  - [saúde, entrevista, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como vou implementar

Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categoria.

```js
{
    podcastName: 'Joguei No Grupo',
    episodio: 'Terapia Coletiva Com Senhorita Bira',
    videoId: 'f0WWIpVvWqg',
    cover: 'https://i.ytimg.com/vi//hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLUXudRNqnC6PSdPLOmwuxkStO7w',
    link: 'https://www.youtube.com/watch?v=f0WWIpVvWqg&t=1996s&pp=0gcJCesJAYcqIYzv',
    categoria: ['humor']
},


{
    podcastName: 'DE FRENTE COM BLOGUEIRINHA',
    episodio: 'DANILO DABAGUE',
    videoId: 'F3QP3wjMH-8'
    cover: 'https://i.ytimg.com/vi//hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA_U8KN89dooc1jurxUBXyNhd6yEw',
    link: 'https://www.youtube.com/live/F3QP3wjMH-8?si=goexO9WzOPQoc0XX',
    categoria: ['entrevista']
}

```
