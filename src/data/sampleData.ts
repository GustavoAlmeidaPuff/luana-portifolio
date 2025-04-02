import { PhotoItem, GalleryCollection } from '../types';

// Dados de amostra de fotos
// Em um projeto real, essas URLs seriam suas imagens reais de alta qualidade
export const featuredPhotos: PhotoItem[] = [
  {
    id: 1,
    src: 'https://placehold.co/1600x900',
    thumbnail: 'https://placehold.co/500x300',
    alt: 'Retrato artístico',
    width: 1600,
    height: 900
  },
  {
    id: 2,
    src: 'https://placehold.co/1600x900',
    thumbnail: 'https://placehold.co/500x300',
    alt: 'Paisagem natural',
    width: 1600,
    height: 900
  },
  {
    id: 3,
    src: 'https://placehold.co/1600x900',
    thumbnail: 'https://placehold.co/500x300',
    alt: 'Arquitetura moderna',
    width: 1600,
    height: 900
  },
  {
    id: 4,
    src: 'https://placehold.co/1600x900',
    thumbnail: 'https://placehold.co/500x300',
    alt: 'Moda contemporânea',
    width: 1600,
    height: 900
  }
];

export const galleryCollections: GalleryCollection[] = [
  {
    title: 'Retratos',
    items: [
      {
        id: 101,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Retrato feminino',
        width: 1200,
        height: 800,
        category: 'retratos'
      },
      {
        id: 102,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Retrato masculino',
        width: 1200,
        height: 1500,
        category: 'retratos'
      },
      {
        id: 103,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Retrato artístico',
        width: 1500,
        height: 1000,
        category: 'retratos'
      },
      {
        id: 104,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Retrato com iluminação natural',
        width: 1000,
        height: 1500,
        category: 'retratos'
      },
      {
        id: 105,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Retrato em estúdio',
        width: 1300,
        height: 900,
        category: 'retratos'
      }
    ]
  },
  {
    title: 'Paisagens',
    items: [
      {
        id: 201,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Montanhas ao pôr do sol',
        width: 1600,
        height: 900,
        category: 'paisagens'
      },
      {
        id: 202,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Oceano',
        width: 1600,
        height: 900,
        category: 'paisagens'
      },
      {
        id: 203,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Floresta densa',
        width: 1600,
        height: 900,
        category: 'paisagens'
      },
      {
        id: 204,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Deserto ao amanhecer',
        width: 1600,
        height: 900,
        category: 'paisagens'
      },
      {
        id: 205,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Cachoeira',
        width: 1600,
        height: 900,
        category: 'paisagens'
      }
    ]
  },
  {
    title: 'Urbano',
    items: [
      {
        id: 301,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Rua movimentada',
        width: 1200,
        height: 900,
        category: 'urbano'
      },
      {
        id: 302,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Arquitetura urbana',
        width: 1200,
        height: 800,
        category: 'urbano'
      },
      {
        id: 303,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Cidade à noite',
        width: 900,
        height: 1200,
        category: 'urbano'
      },
      {
        id: 304,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Pessoas na cidade',
        width: 1500,
        height: 1000,
        category: 'urbano'
      },
      {
        id: 305,
        src: 'https://placehold.co/1600x900',
        thumbnail: 'https://placehold.co/500x300',
        alt: 'Edifício imponente',
        width: 1000,
        height: 1500,
        category: 'urbano'
      }
    ]
  }
];

// Todas as fotos em uma única coleção para a galeria principal
export const allPhotos: PhotoItem[] = [
  ...featuredPhotos,
  ...galleryCollections.flatMap(collection => collection.items)
]; 