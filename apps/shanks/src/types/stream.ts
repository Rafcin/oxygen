export type StreamType = "MOVIE" | "TV" | "OVA" | "ONA" | "SPECIAL" | "MUSIC";
export interface Stream {
  id: string;
  title: string;
  type: StreamType;
  image: string;
  url: string;
}
export interface Source {
  url: string;
  isM3u8: boolean;
  quality: string;
}
export interface Subtitle {
  url: string;
  lang: string;
}
