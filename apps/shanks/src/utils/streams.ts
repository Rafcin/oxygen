import { StreamType } from "@/types/stream";

export function convertStreamType(type: StreamType) {
  let lowercaseType = type.toLowerCase();

  if (lowercaseType === "movie") {
    lowercaseType = "movies";
  } else if (
    lowercaseType === "tv" ||
    lowercaseType === "ova" ||
    lowercaseType === "ona" ||
    lowercaseType === "special"
  ) {
    lowercaseType = "series";
  }

  return lowercaseType;
}

export function chunkEpisodes(
  array: Array<object>,
  size: number
): Array<Array<object>> | Array<object> {
  if (!array) return [];
  const firstChunk = array.slice(0, size); // create the first chunk of the given array
  if (!firstChunk.length) {
    return array; // this is the base case to terminal the recursive
  }
  return [firstChunk].concat(
    chunkEpisodes(array.slice(size, array.length), size)
  );
}
