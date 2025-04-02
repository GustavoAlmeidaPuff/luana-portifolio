export interface PhotoItem {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

export type GalleryCollection = {
  title: string;
  items: PhotoItem[];
}; 