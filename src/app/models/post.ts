import { Photo } from "./photo";
export interface Post {
  id: number;
  title: string;
  firstContent: string;
  secondContent: string;
  thirdContent: string;
  subtitle: string;
  description: string;
  type: string;
  photos: Photo[];
  author: string;
  created: string;
  updated: string;
}
