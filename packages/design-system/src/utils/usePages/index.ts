export const usePages = (arr: Array<any>, size: number) => {
  let previous: number | null = null
  const numberOfPages = Math.ceil(arr.length / size)
  const pages = arr.reduce((pages, item, index) => {
    const chunkIndex = Math.floor(index / size)
    if (!pages[chunkIndex]) {
      pages[chunkIndex] = {
        data: [],
        previousId: previous,
        nextId:
          chunkIndex === numberOfPages ? null : Math.floor(index / size) + 1,
      } // start a new chunk
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    previous = chunkIndex

    pages[chunkIndex] = {
      ...pages[chunkIndex],
      data: [...pages[chunkIndex].data, item],
    }

    return pages
  }, [])
  return { pages, numberOfPages }
}
