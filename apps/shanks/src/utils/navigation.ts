export function avoid(pathname: string, list: Array<string>): boolean {
  for (const path of list) {
    if (pathname.startsWith(path)) {
      return true;
    }
  }
  return false;
}

export const avoidpaths: Array<string> = ["/video"];
