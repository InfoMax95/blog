import { Photo } from "./photo";

export interface Post {
  id: number;
  title: string;
  content: string;
  subtitle: string;
  description: string;
  type: string;
  photos: Photo[];
  authorName: string;
  created: string;
  updated: string;
}
