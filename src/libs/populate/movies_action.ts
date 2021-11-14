interface MovieProps {
  name: string
  description: string
  created_at: Date
  updated_at: Date
  image_link: string
  category?: string
  trailler_link: string
  director: string
  year: number
  slugSearch?: string
}

interface MoviesJson {
  movies: MovieProps[]
  slug: string
  slugSearch: string
}

export const moviesActionJson: MoviesJson = {
  slug: 'Filmes de Ação',
  slugSearch: 'action',
  movies: [
    {
      name: 'Coringa o filme',
      description: 'Coringa fazendo coringuisses',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/zAGVQLHvwOY',
      year: 2019,
      director: 'Todd Phillips',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    },
    {
      name: 'Bacurau',
      description: 'Dois amigos muito de loucos',
      category: 'drama',
      trailler_link: 'https://www.youtube.com/embed/qlheaoLnewE',
      year: 2019,
      director: 'Kleber Mendonça Filho, Juliano Dornelles',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg'
    },
    {
      name: 'Shang Chi',
      description: 'Aquele lá da marvel msm',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/8YjFbMbfXaQ',
      year: 2021,
      director: 'Destin Daniel Cretton',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/9830/filme_9830.jpg'
    },
    {
      name: 'Space Jam, o jogo do Seculo',
      description: 'Aquele lá dos coelhos que jogam basquete',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/oKNy-MWjkcU',
      year: 1996,
      director: 'Joe Pytka',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img3.acsta.net/pictures/21/08/02/19/37/2769156.jpg'
    },
    {
      name: 'X-men, Dias de um futuro esquecido',
      description: 'Cada filme um pouco menos de sentido',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/w1dIkYegWuQ',
      year: 2014,
      director: 'Bryan Singer',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img2.acsta.net/pictures/14/05/08/22/33/194334.jpg'
    },
    {
      name: 'Transformers XX',
      description: 'Aquele lá dos robos que viram carros e comem gente',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/v8ItGrI-Ou0',
      year: 2007,
      director: 'Michael Bay',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img3.acsta.net/pictures/14/06/20/23/27/478475.jpg'
    },
    {
      name: 'Harry Poti e a Predra',
      description: 'The boy who leaves under the tails',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/MSs0gZJ5P9o',
      year: 2001,
      director: 'Chris Columbus',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg'
    },
    {
      name: 'Harry Poti e a Cobra',
      description: 'The boy who leaves under the tails',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/1bq0qff4iF8',
      year: 2002,
      director: 'Chris Columbus',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://img.elo7.com.br/product/zoom/2657601/big-poster-filme-harry-potter-e-a-camara-secreta-lo02-90x60-geek.jpg'
    },
    {
      name: 'Harry Poti e a Fenix',
      description: 'The boy who leaves under the tails',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/Tbv2Al6LGW8',
      year: 2007,
      director: 'David Yates',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://img.elo7.com.br/product/zoom/26579D5/big-poster-harry-potter-e-a-ordem-da-fenix-lo04-tam-90x60-cm-geek.jpg'
    },
    {
      name: 'Harry Poti e o Dragão',
      description: 'The boy who leaves under the tails',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/RwJlOdtoHRE',
      year: 2005,
      director: 'Mike Newell',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-calice-fogo-04-original1.jpeg?quality=70&strip=info&w=395'
    },
    {
      name: 'Harry Poti e o tal do Enigma',
      description: 'The boy who leaves under the tails',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/kSEc4_MR3xs',
      year: 2009,
      director: 'David Yates',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/18/20224756.jpg'
    },
    {
      name: 'Avengers',
      description: 'Revenge apenas eles diriam',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/hA6hldpSTF8',
      year: 2012,
      director: 'Joss Whedon',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://i.pinimg.com/564x/08/dd/09/08dd09a13fa4ec6f1da8d236fc7fdd73.jpg'
    },
    {
      name: 'Ironman',
      description: 'Yeah, dont tell to anybody, buy, IM IRON MAN',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/8ugaeA-nMTc',
      year: 2008,
      director: 'Jon Favreau',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://img.elo7.com.br/product/zoom/1DFB189/poster-cartaz-iron-man-homem-de-ferro-poster-tematico.jpg'
    },
    {
      name: 'Homem Aranha longe de casa',
      description: 'Uma aranha nunca cai tão longe assim do jardim eles diriam',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/6bpZXJgtYww',
      year: 2019,
      director: 'Jon Watts',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg'
    },
    {
      name: 'Batman, Cavaleiro das Trevas',
      description: 'Sim, sou melhor que todos os outros que que vieram antes',
      category: 'fiction',
      trailler_link: 'https://www.youtube.com/embed/a-PVBsmiB0Y',
      year: 2008,
      director: 'Christopher Nolan',
      created_at: new Date,
      updated_at: new Date,
      image_link:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg'
    }
  ]
}
