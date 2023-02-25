export type StreamType = "MOVIE" | "TV" | "OVA" | "ONA" | "SPECIAL" | "MUSIC";
export interface Stream {
  id: string;
  title: string;
  type: StreamType;
  image: string;
  url: string;
}
